try {
    if (parseFloat('-11string') !== -11) {
        $ERROR('#1: parseFloat("-11string") === -11. Actual: ' + parseFloat('-11string'));
    }
    if (parseFloat('01string') !== 1) {
        $ERROR('#2: parseFloat("01string") === 1. Actual: ' + parseFloat('01string'));
    }
    if (parseFloat('-11e-1string') !== -1.1) {
        $ERROR('#3: parseFloat("-11e-1string") === -1.1. Actual: ' + parseFloat('-11e-1string'));
    }
    if (parseFloat('01e1string') !== 10) {
        $ERROR('#4: parseFloat("01e1string") === 10. Actual: ' + parseFloat('01e1string'));
    }
    if (parseFloat('001string') !== 1) {
        $ERROR('#5: parseFloat("001string") === 1. Actual: ' + parseFloat('001string'));
    }
    if (parseFloat('1e001string') !== 10) {
        $ERROR('#6: parseFloat("1e001string") === 10. Actual: ' + parseFloat('1e001string'));
    }
    if (parseFloat('010string') !== 10) {
        $ERROR('#7: parseFloat("010string") === 10. Actual: ' + parseFloat('010string'));
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