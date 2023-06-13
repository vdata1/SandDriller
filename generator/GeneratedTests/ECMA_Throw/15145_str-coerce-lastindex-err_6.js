try {
    var badLastIndex;
    var obj = {
        constructor: function () {
            let REPLACER = 23;
        }
    };
    var fakeRe = {
        set lastIndex(_) {
            let REPLACER = 23;
        },
        get lastIndex() {
            let REPLACER = 23;
            return badLastIndex;
        },
        exec: function () {
            let REPLACER = 23;
            return [];
        }
    };
    obj.constructor[Symbol.species] = function () {
        let REPLACER = 23;
        return fakeRe;
    };
    badLastIndex = Symbol.split;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        RegExp.prototype[Symbol.split].call(obj, 'abcd');
    });
    badLastIndex = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, function () {
        RegExp.prototype[Symbol.split].call(obj, 'abcd');
    });
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