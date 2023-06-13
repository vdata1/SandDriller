try {
    var __obj = {
        toString: function () {
            let REPLACER = 23;
            return 'AB';
        }
    };
    var __obj2 = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            return {};
        },
        toString: function () {
            throw 'intointeger';
        }
    };
    var __str = new String('ABBABABAB');
    try {
        var x = __str.indexOf(__obj, __obj2);
        $ERROR('#1: "var x = __str.indexOf(__obj, __obj2)" lead to throwing exception');
    } catch (e) {
        if (e !== 'intointeger') {
            $ERROR('#1.1: Exception === "intointeger". Actual: ' + e);
        }
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