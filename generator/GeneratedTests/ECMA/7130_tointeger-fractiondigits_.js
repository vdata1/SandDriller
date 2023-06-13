try {
    assert.sameValue(123.456.toExponential(0.1), '1e+2', '0.1');
    assert.sameValue(123.456.toExponential(-0.1), '1e+2', '-0.1');
    assert.sameValue(123.456.toExponential(0.9), '1e+2', '0.9');
    assert.sameValue(123.456.toExponential(-0.9), '1e+2', '-0.9');
    assert.sameValue(123.456.toExponential(false), '1e+2', 'false');
    assert.sameValue(123.456.toExponential(true), '1.2e+2', 'true');
    assert.sameValue(123.456.toExponential(NaN), '1e+2', 'NaN');
    assert.sameValue(123.456.toExponential(null), '1e+2', 'null');
    assert.sameValue(123.456.toExponential('2'), '1.23e+2', 'string');
    assert.sameValue(123.456.toExponential(''), '1e+2', 'the empty string');
    assert.sameValue(123.456.toExponential([]), '1e+2', '[]');
    assert.sameValue(123.456.toExponential([2]), '1.23e+2', '[2]');
    assert.sameValue(0 .toExponential(undefined), '0e+0', 'undefined');
    assert.sameValue(0 .toExponential(), '0e+0', 'no arg');
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