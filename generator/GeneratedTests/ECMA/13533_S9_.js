try {
    if (String(1) !== '1') {
        $ERROR('#1: String(1) === "1". Actual: ' + String(1));
    }
    if (String(10) !== '10') {
        $ERROR('#2: String(10) === "10". Actual: ' + String(10));
    }
    if (String(100) !== '100') {
        $ERROR('#3: String(100) === "100". Actual: ' + String(100));
    }
    if (String(100000000000000000000) !== '100000000000000000000') {
        $ERROR('#4: String(100000000000000000000) === "100000000000000000000". Actual: ' + String(100000000000000000000));
    }
    if (String(100000000000000000000) !== '100000000000000000000') {
        $ERROR('#5: String(1e20) === "100000000000000000000". Actual: ' + String(100000000000000000000));
    }
    if (String(12345) !== '12345') {
        $ERROR('#6: String(12345) === "12345". Actual: ' + String(12345));
    }
    if (String(12345000) !== '12345000') {
        $ERROR('#7: String(12345000) === "12345000". Actual: ' + String(12345000));
    }
    if (String(-1) !== '-1') {
        $ERROR('#8: String(-1) === "-1". Actual: ' + String(-1));
    }
    if (String(-10) !== '-10') {
        $ERROR('#9: String(-10) === "-10". Actual: ' + String(-10));
    }
    if (String(-100) !== '-100') {
        $ERROR('#3: String(-100) === "-100". Actual: ' + String(-100));
    }
    if (String(-100000000000000000000) !== '-100000000000000000000') {
        $ERROR('#10: String(-100000000000000000000) === "-100000000000000000000". Actual: ' + String(-100000000000000000000));
    }
    if (String(-100000000000000000000) !== '-100000000000000000000') {
        $ERROR('#11: String(-1e20) === "-100000000000000000000". Actual: ' + String(-100000000000000000000));
    }
    if (String(-12345) !== '-12345') {
        $ERROR('#12: String(-12345) === "-12345". Actual: ' + String(-12345));
    }
    if (String(-12345000) !== '-12345000') {
        $ERROR('#13: String(-12345000) === "-12345000". Actual: ' + String(-12345000));
    }
    if (String(100000000000000000000) !== '100000000000000000000') {
        $ERROR('#14: String(1E20) === "100000000000000000000". Actual: ' + String(100000000000000000000));
    }
    if (String(-100000000000000000000) !== '-100000000000000000000') {
        $ERROR('#15: String(-1E20) === "-100000000000000000000". Actual: ' + String(-100000000000000000000));
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