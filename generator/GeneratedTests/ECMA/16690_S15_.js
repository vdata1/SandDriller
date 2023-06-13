try {
    if (parseFloat(new String('-1.1')) !== parseFloat('-1.1')) {
        $ERROR('#1: parseFloat(new String("-1.1")) === parseFloat("-1.1"). Actual: ' + parseFloat(new String('-1.1')));
    }
    if (parseFloat(new String('Infinity')) !== parseFloat('Infinity')) {
        $ERROR('#2: parseFloat(new String("Infinity")) === parseFloat("Infinity"). Actual: ' + parseFloat(new String('Infinity')));
    }
    if (String(parseFloat(new String('NaN'))) !== 'NaN') {
        $ERROR('#3: String(parseFloat(new String("NaN"))) === "NaN". Actual: ' + String(parseFloat(new String('NaN'))));
    }
    if (parseFloat(new String('.01e+2')) !== parseFloat('.01e+2')) {
        $ERROR('#4: parseFloat(new String(".01e+2")) === parseFloat(".01e+2"). Actual: ' + parseFloat(new String('.01e+2')));
    }
    if (String(parseFloat(new String('false'))) !== 'NaN') {
        $ERROR('#5: String(parseFloat(new String("false"))) === "NaN". Actual: ' + String(parseFloat(new String('false'))));
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