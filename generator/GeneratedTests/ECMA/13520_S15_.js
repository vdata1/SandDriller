try {
    var __str__instance = new String('ABCABC');
    if (__str__instance.length !== 6) {
        $ERROR('#1: var __str__instance = new String("ABC\\u0041\\u0042\\u0043"); __str__instance.length === 6. Actual: __str__instance.length ===' + __str__instance.length);
    }
    __str__instance.valueOf = function () {
        return 'ed';
    };
    __str__instance.toString = function () {
        return 'ed';
    };
    if (__str__instance != 'ed') {
        $ERROR('#2: var __str__instance = new String("ABC\\u0041\\u0042\\u0043"); __str__instance.valueOf = function(){return "ed"}; __str__instance.toString = function(){return "ed"}; __str__instance =="ed". Actual: __str__instance ==' + __str__instance);
    }
    if (__str__instance.length !== 6) {
        $ERROR('#3: var __str__instance = new String("ABC\\u0041\\u0042\\u0043"); __str__instance.valueOf = function(){return "ed"}; __str__instance.toString = function(){return "ed"}; __str__instance.length === 6. Actual: __str__instance.length ===' + __str__instance.length);
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