try {
    if (new Number(1).toFixed() !== '1') {
        $ERROR('#1: (new Number(1)).prototype.toFixed() === "1"');
    }
    if (new Number(1).toFixed(0) !== '1') {
        $ERROR('#2: (new Number(1)).prototype.toFixed(0) === "1"');
    }
    if (new Number(1).toFixed(1) !== '1.0') {
        $ERROR('#3: (new Number(1)).prototype.toFixed(1) === "1.0"');
    }
    if (new Number(1).toFixed(1.1) !== '1.0') {
        $ERROR('#4: (new Number(1)).toFixed(1.1) === "1.0"');
    }
    if (new Number(1).toFixed(0.9) !== '1') {
        $ERROR('#5: (new Number(1)).toFixed(0.9) === "1"');
    }
    if (new Number(1).toFixed('1') !== '1.0') {
        $ERROR('#6: (new Number(1)).toFixed("1") === "1.0"');
    }
    if (new Number(1).toFixed('1.1') !== '1.0') {
        $ERROR('#7: (new Number(1)).toFixed("1.1") === "1.0"');
    }
    if (new Number(1).toFixed('0.9') !== '1') {
        $ERROR('#8: (new Number(1)).toFixed("0.9") === "1"');
    }
    if (new Number(1).toFixed(Number.NaN) !== '1') {
        $ERROR('#9: (new Number(1)).toFixed(Number.NaN) === "1"');
    }
    if (new Number(1).toFixed('some string') !== '1') {
        $ERROR('#9: (new Number(1)).toFixed("some string") === "1"');
    }
    try {
        if (new Number(1).toFixed(-0.1) !== '1') {
            $ERROR('#10: (new Number(1)).toFixed(-0.1) === "1"');
        }
    } catch (e) {
        $ERROR('#10: (new Number(1)).toFixed(-0.1) should not throw ' + e);
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