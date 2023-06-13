try {
    if (new Number('a').toFixed() !== 'NaN') {
        $ERROR('#1: (new Number("a")).prototype.toFixed() === "NaN"');
    }
    if (new Number('a').toFixed(0) !== 'NaN') {
        $ERROR('#2: (new Number("a")).prototype.toFixed(0) === "NaN"');
    }
    if (new Number('a').toFixed(1) !== 'NaN') {
        $ERROR('#3: (new Number("a")).prototype.toFixed(1) === "NaN"');
    }
    if (new Number('a').toFixed(1.1) !== 'NaN') {
        $ERROR('#4: (new Number("a")).toFixed(1.1) === "NaN"');
    }
    if (new Number('a').toFixed(0.9) !== 'NaN') {
        $ERROR('#5: (new Number("a")).toFixed(0.9) === "NaN"');
    }
    if (new Number('a').toFixed('1') !== 'NaN') {
        $ERROR('#6: (new Number("a")).toFixed("1") === "NaN"');
    }
    if (new Number('a').toFixed('1.1') !== 'NaN') {
        $ERROR('#7: (new Number("a")).toFixed("1.1") === "NaN"');
    }
    if (new Number('a').toFixed('0.9') !== 'NaN') {
        $ERROR('#8: (new Number("a")).toFixed("0.9") === "NaN"');
    }
    if (new Number('a').toFixed(Number.NaN) !== 'NaN') {
        $ERROR('#9: (new Number("a")).toFixed(Number.NaN) === "NaN"');
    }
    if (new Number('a').toFixed('some string') !== 'NaN') {
        $ERROR('#9: (new Number("a")).toFixed("some string") === "NaN"');
    }
    try {
        s = new Number('a').toFixed(Number.POSITIVE_INFINITY);
        $ERROR('#10: (new Number("a")).toFixed(Number.POSITIVE_INFINITY) should throw RangeError, not return NaN');
    } catch (e) {
        if (!(e instanceof RangeError)) {
            $ERROR('#10: (new Number("a")).toFixed(Number.POSITIVE_INFINITY) should throw RangeError, not ' + e);
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