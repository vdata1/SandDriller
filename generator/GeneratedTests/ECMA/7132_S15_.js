try {
    if (Number.prototype.toFixed() !== '0') {
        $ERROR('#1: Number.prototype.toFixed() === "0"');
    }
    if (Number.prototype.toFixed(0) !== '0') {
        $ERROR('#2: Number.prototype.toFixed(0) === "0"');
    }
    if (Number.prototype.toFixed(1) !== '0.0') {
        $ERROR('#3: Number.prototype.toFixed(1) === "0.0"');
    }
    if (Number.prototype.toFixed(1.1) !== '0.0') {
        $ERROR('#4: Number.prototype.toFixed(1.1) === "0.0"');
    }
    if (Number.prototype.toFixed(0.9) !== '0') {
        $ERROR('#5: Number.prototype.toFixed(0.9) === "0"');
    }
    if (Number.prototype.toFixed('1') !== '0.0') {
        $ERROR('#6: Number.prototype.toFixed("1") === "0.0"');
    }
    if (Number.prototype.toFixed('1.1') !== '0.0') {
        $ERROR('#7: Number.prototype.toFixed("1.1") === "0.0"');
    }
    if (Number.prototype.toFixed('0.9') !== '0') {
        $ERROR('#8: Number.prototype.toFixed("0.9") === "0"');
    }
    if (Number.prototype.toFixed(Number.NaN) !== '0') {
        $ERROR('#9: Number.prototype.toFixed(Number.NaN) === "0"');
    }
    if (Number.prototype.toFixed('some string') !== '0') {
        $ERROR('#9: Number.prototype.toFixed("some string") === "0"');
    }
    try {
        if (Number.prototype.toFixed(-0.1) !== '0') {
            $ERROR('#10: Number.prototype.toFixed(-0.1) === "0"');
        }
    } catch (e) {
        $ERROR('#10: Number.prototype.toFixed(-0.1) should not throw ' + e);
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