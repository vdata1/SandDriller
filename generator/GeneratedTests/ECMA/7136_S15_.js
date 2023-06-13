try {
    if (new Number(1e+21).toFixed() !== String(1e+21)) {
        $ERROR('#1: (new Number(1e21)).prototype.toFixed() === String(1e21)');
    }
    if (new Number(1e+21).toFixed(0) !== String(1e+21)) {
        $ERROR('#2: (new Number(1e21)).prototype.toFixed(0) === String(1e21)');
    }
    if (new Number(1e+21).toFixed(1) !== String(1e+21)) {
        $ERROR('#3: (new Number(1e21)).prototype.toFixed(1) === String(1e21)');
    }
    if (new Number(1e+21).toFixed(1.1) !== String(1e+21)) {
        $ERROR('#4: (new Number(1e21)).toFixed(1.1) === String(1e21)');
    }
    if (new Number(1e+21).toFixed(0.9) !== String(1e+21)) {
        $ERROR('#5: (new Number(1e21)).toFixed(0.9) === String(1e21)');
    }
    if (new Number(1e+21).toFixed('1') !== String(1e+21)) {
        $ERROR('#6: (new Number(1e21)).toFixed("1") === String(1e21)');
    }
    if (new Number(1e+21).toFixed('1.1') !== String(1e+21)) {
        $ERROR('#7: (new Number(1e21)).toFixed("1.1") === String(1e21)');
    }
    if (new Number(1e+21).toFixed('0.9') !== String(1e+21)) {
        $ERROR('#8: (new Number(1e21)).toFixed("0.9") === String(1e21)');
    }
    if (new Number(1e+21).toFixed(Number.NaN) !== String(1e+21)) {
        $ERROR('#9: (new Number(1e21)).toFixed(Number.NaN) === String(1e21)');
    }
    if (new Number(1e+21).toFixed('some string') !== String(1e+21)) {
        $ERROR('#9: (new Number(1e21)).toFixed("some string") === String(1e21)');
    }
    try {
        s = new Number(1e+21).toFixed(Number.POSITIVE_INFINITY);
        $ERROR('#10: (new Number(1e21)).toFixed(Number.POSITIVE_INFINITY) should throw RangeError, not return NaN');
    } catch (e) {
        if (!(e instanceof RangeError)) {
            $ERROR('#10: (new Number(1e21)).toFixed(Number.POSITIVE_INFINITY) should throw RangeError, not ' + e);
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