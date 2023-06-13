try {
    var internalCount = 0;
    Object.defineProperty(RegExp.prototype, Symbol.match, {
        get: function () {
            let REPLACER = 23;
            ++internalCount;
            return true;
        }
    });
    var calls = [];
    var o = {
        get [Symbol.match]() {
            let REPLACER = 23;
            calls.push('get @@match');
            return false;
        },
        get flags() {
            throw () => {
                return () => {
                };
            };
            calls.push('get flags');
            return {
                toString() {
                    calls.push('flags toString');
                    return '';
                }
            };
        }
    };
    RegExp.prototype[Symbol.matchAll].call(o, {
        toString() {
            calls.push('arg toString');
        }
    });
    assert.sameValue(0, internalCount);
    assert.sameValue(calls.length, 4);
    assert.sameValue(calls[0], 'arg toString');
    assert.sameValue(calls[1], 'get flags');
    assert.sameValue(calls[2], 'flags toString');
    assert.sameValue(calls[3], 'get @@match');
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