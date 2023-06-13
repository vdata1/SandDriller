try {
    if (parseFloat('0x0') !== 0) {
        $ERROR('#0: parseFloat("0x0") === 0. Actual: ' + parseFloat('0x0'));
    }
    if (parseFloat('0x1') !== 0) {
        $ERROR('#1: parseFloat("0x1") === 0. Actual: ' + parseFloat('0x1'));
    }
    if (parseFloat('0x2') !== 0) {
        $ERROR('#2: parseFloat("0x2") === 0. Actual: ' + parseFloat('0x2'));
    }
    if (parseFloat('0x3') !== 0) {
        $ERROR('#3: parseFloat("0x3") === 0. Actual: ' + parseFloat('0x3'));
    }
    if (parseFloat('0x4') !== 0) {
        $ERROR('#4: parseFloat("0x4") === 0. Actual: ' + parseFloat('0x4'));
    }
    if (parseFloat('0x5') !== 0) {
        $ERROR('#5: parseFloat("0x5") === 0. Actual: ' + parseFloat('0x5'));
    }
    if (parseFloat('0x6') !== 0) {
        $ERROR('#6: parseFloat("0x6") === 0. Actual: ' + parseFloat('0x6'));
    }
    if (parseFloat('0x7') !== 0) {
        $ERROR('#7: parseFloat("0x7") === 0. Actual: ' + parseFloat('0x7'));
    }
    if (parseFloat('0x8') !== 0) {
        $ERROR('#8: parseFloat("0x8") === 0. Actual: ' + parseFloat('0x8'));
    }
    if (parseFloat('0x9') !== 0) {
        $ERROR('#9: parseFloat("0x9") === 0. Actual: ' + parseFloat('0x9'));
    }
    if (parseFloat('0xA') !== 0) {
        $ERROR('#A: parseFloat("0xA") === 0. Actual: ' + parseFloat('0xA'));
    }
    if (parseFloat('0xB') !== 0) {
        $ERROR('#B: parseFloat("0xB") === 0. Actual: ' + parseFloat('0xB'));
    }
    if (parseFloat('0xC') !== 0) {
        $ERROR('#C: parseFloat("0xC") === 0. Actual: ' + parseFloat('0xC'));
    }
    if (parseFloat('0xD') !== 0) {
        $ERROR('#D: parseFloat("0xD") === 0. Actual: ' + parseFloat('0xD'));
    }
    if (parseFloat('0xE') !== 0) {
        $ERROR('#E: parseFloat("0xE") === 0. Actual: ' + parseFloat('0xE'));
    }
    if (parseFloat('0xF') !== 0) {
        $ERROR('#F: parseFloat("0xF") === 0. Actual: ' + parseFloat('0xF'));
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