try {
    var __stored__Function__prototype__toString = Function.prototype.toString;
    Function.prototype.toString = function () {
        return 'SHIFTED';
    };
    var __str = new String(function () {
    });
    Function.prototype.toString = __stored__Function__prototype__toString;
    if (typeof __str !== 'object') {
        $ERROR('#1: __str = new String(function(){}); typeof __str === "object". Actual: typeof __str ===' + typeof __str);
    }
    if (__str.constructor !== String) {
        $ERROR('#1.5: __str = new String(function(){}); __str.constructor === String. Actual: __str.constructor ===' + __str.constructor);
    }
    if (__str != 'SHIFTED') {
        $ERROR('#2: Function.prototype.toString=function(){return "SHIFTED"}; __str = new String(function(){}); __str =="SHIFTED". Actual: __str ==' + __str);
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