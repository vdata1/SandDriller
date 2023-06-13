try {
    var __obj = {
        toString: function () {
            let REPLACER = 23;
            throw 'intostr';
        }
    };
    var __obj2 = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            throw 'intoint';
        }
    };
    var __instance = new Number(10001.10001);
    Number.prototype.split = String.prototype.split;
    try {
        var x = __instance.split(__obj, __obj2);
        Test262Error.thrower('#1: "var x = __instance.split(__obj, __obj2)" lead to throwing exception');
    } catch (e) {
        assert.sameValue(e, 'intoint', 'The value of `e` is "intoint"');
    }
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