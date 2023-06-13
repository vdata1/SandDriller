try {
    if (parseFloat('\t1.1') !== parseFloat('1.1')) {
        $ERROR('#1: parseFloat("\\u00091.1") === parseFloat("1.1"). Actual: ' + parseFloat('\t1.1'));
    }
    if (parseFloat('\t\t-1.1') !== parseFloat('-1.1')) {
        $ERROR('#2: parseFloat("\\u0009\\u0009-1.1") === parseFloat("-1.1"). Actual: ' + parseFloat('\t\t-1.1'));
    }
    if (parseFloat('\t1.1') !== parseFloat('1.1')) {
        $ERROR('#3: parseFloat("\t1.1") === parseFloat("1.1"). Actual: ' + parseFloat('\t1.1'));
    }
    if (parseFloat('\t\t\t1.1') !== parseFloat('1.1')) {
        $ERROR('#4: parseFloat("\t\t\t1.1") === parseFloat("1.1"). Actual: ' + parseFloat('\t\t\t1.1'));
    }
    if (parseFloat('\t\t\t\t\t\t\t\t-1.1') !== parseFloat('-1.1')) {
        $ERROR('#5: parseFloat("\t\t\t\\u0009\t\t\t\\u0009-1.1") === parseFloat("-1.1"). Actual: ' + parseFloat('\t\t\t\t\t\t\t\t-1.1'));
    }
    assert.sameValue(parseFloat('\t'), NaN, '\'\t\'');
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