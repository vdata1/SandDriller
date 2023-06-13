try {
    var __old__Array__prototype__toString = Array.prototype.toString;
    Array.prototype.toString = function () {
        throw () => {
            return () => {
            };
        };
        return '__ARRAY__';
    };
    var __str = String(new Array());
    Array.prototype.toString = __old__Array__prototype__toString;
    if (typeof __str !== 'string') {
        $ERROR('#1: __str = String(new Array); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '__ARRAY__') {
        $ERROR('#2: Array.prototype.toString=function(){return "__ARRAY__";}; __str = String(new Array); __str === "__ARRAY__". Actual: __str ===' + __str);
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