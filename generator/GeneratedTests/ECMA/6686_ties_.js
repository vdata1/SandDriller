try {
    var a0 = 1;
    var a1 = 1.0000000596046448;
    var a2 = 1.0000001192092896;
    var a3 = 1.0000001788139343;
    var a4 = 1.000000238418579;
    var a5 = 1.0000002980232239;
    var a6 = 1.0000003576278687;
    assert.sameValue(Math.fround(a0), a0, 'Math.fround(a0)');
    assert.sameValue(Math.fround(a1), a0, 'Math.fround(a1)');
    assert.sameValue(Math.fround(a2), a2, 'Math.fround(a2)');
    assert.sameValue(Math.fround(a3), a4, 'Math.fround(a3)');
    assert.sameValue(Math.fround(a4), a4, 'Math.fround(a4)');
    assert.sameValue(Math.fround(a5), a4, 'Math.fround(a5)');
    assert.sameValue(Math.fround(a6), a6, 'Math.fround(a6)');
    assert.sameValue(Math.fround(-a0), -a0, 'Math.fround(-a0)');
    assert.sameValue(Math.fround(-a1), -a0, 'Math.fround(-a1)');
    assert.sameValue(Math.fround(-a2), -a2, 'Math.fround(-a2)');
    assert.sameValue(Math.fround(-a3), -a4, 'Math.fround(-a3)');
    assert.sameValue(Math.fround(-a4), -a4, 'Math.fround(-a4)');
    assert.sameValue(Math.fround(-a5), -a4, 'Math.fround(-a5)');
    assert.sameValue(Math.fround(-a6), -a6, 'Math.fround(-a6)');
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