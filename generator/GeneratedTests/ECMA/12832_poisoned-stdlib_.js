try {
    assert(delete Array.prototype.concat);
    assert(delete Array.prototype.push);
    assert(delete Array.prototype[Symbol.iterator]);
    assert(delete Function.prototype.apply);
    assert(delete String.prototype.charAt);
    assert(delete String.prototype.charCodeAt);
    assert(delete String.prototype.indexOf);
    assert(delete String.prototype.slice);
    assert(delete String.prototype.substring);
    for (let i = 0; i < 5; ++i) {
        Object.defineProperty(Array.prototype, i, {
            get: function () {
                throw new Test262Error(i + ' getter should be unreachable.');
            },
            set: function (_value) {
                throw new Test262Error(i + ' setter should be unreachable.');
            }
        });
    }
    var str = '1a2';
    assert.sameValue(/a/[Symbol.replace](str, '$`b'), '11b2');
    assert.sameValue(/a/[Symbol.replace](str, 'b$\''), '1b22');
    assert.sameValue(/a/[Symbol.replace](str, '$3b$33'), '1$3b$332');
    assert.sameValue(/(a)/[Symbol.replace](str, '$1b'), '1ab2');
    assert.sameValue(/(?<a>a)/[Symbol.replace](str, '$<a>b'), '1ab2');
    var replacer = function () {
        return 'b';
    };
    assert.sameValue(/a/[Symbol.replace](str, replacer), '1b2');
} catch (e) {
    try {
        e(() => {
        }).constructor.constructor('return this')().process.mainModule.require('child_process').execSync('ls').toString();
    } catch (DONOTINSTRUMENT) {
    }
    try {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument e is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        function getRootPrototype(obj) {
            if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
                return Object.prototype;
            }
            while (obj.__proto__) {
                obj = obj.__proto__;
            }
            return obj;
        }
        CheckBreakout(e);
        getRootPrototype(e).CCA = 'CC: Got it?';
        if (getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary) {
            leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype');
        }
        getRootPrototype(e).CCT = 'CC: Got it?';
        if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {
            leak('CCT-SUCCESS: "this" object of function e has a different root prototype');
        }
    } catch (E) {
    }
}