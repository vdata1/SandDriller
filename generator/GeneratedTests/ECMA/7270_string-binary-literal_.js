try {
    assert.sameValue(Number('0b0'), 0, 'lower-case head');
    assert.sameValue(Number('0B0'), 0, 'upper-case head');
    assert.sameValue(Number('0b00'), 0, 'lower-case head with leading zeros');
    assert.sameValue(Number('0B00'), 0, 'upper-case head with leading zeros');
    assert.sameValue(Number('0b1'), 1, 'lower-case head');
    assert.sameValue(Number('0B1'), 1, 'upper-case head');
    assert.sameValue(Number('0b01'), 1, 'lower-case head with leading zeros');
    assert.sameValue(Number('0B01'), 1, 'upper-case head with leading zeros');
    assert.sameValue(Number('0b10'), 2, 'lower-case head');
    assert.sameValue(Number('0B10'), 2, 'upper-case head');
    assert.sameValue(Number('0b010'), 2, 'lower-case head with leading zeros');
    assert.sameValue(Number('0B010'), 2, 'upper-case head with leading zeros');
    assert.sameValue(Number('0b11'), 3, 'lower-case head');
    assert.sameValue(Number('0B11'), 3, 'upper-case head');
    assert.sameValue(Number('0b011'), 3, 'lower-case head with leading zeros');
    assert.sameValue(Number('0B011'), 3, 'upper-case head with leading zeros');
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