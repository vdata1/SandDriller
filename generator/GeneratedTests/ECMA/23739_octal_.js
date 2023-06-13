try {
    assert.sameValue(0, 0, 'lower-case head');
    assert.sameValue(0, 0, 'upper-case head');
    assert.sameValue(0, 0, 'lower-case head with leading zeros');
    assert.sameValue(0, 0, 'upper-case head with leading zeros');
    assert.sameValue(1, 1, 'lower-case head');
    assert.sameValue(1, 1, 'upper-case head');
    assert.sameValue(1, 1, 'lower-case head with leading zeros');
    assert.sameValue(1, 1, 'upper-case head with leading zeros');
    assert.sameValue(7, 7, 'lower-case head');
    assert.sameValue(7, 7, 'upper-case head');
    assert.sameValue(7, 7, 'lower-case head with leading zeros');
    assert.sameValue(7, 7, 'upper-case head with leading zeros');
    assert.sameValue(8, 8, 'lower-case head');
    assert.sameValue(8, 8, 'upper-case head');
    assert.sameValue(8, 8, 'lower-case head with leading zeros');
    assert.sameValue(8, 8, 'upper-case head with leading zeros');
    assert.sameValue(9, 9, 'lower-case head');
    assert.sameValue(9, 9, 'upper-case head');
    assert.sameValue(9, 9, 'lower-case head with leading zeros');
    assert.sameValue(9, 9, 'upper-case head with leading zeros');
    assert.sameValue(63, 63, 'lower-case head');
    assert.sameValue(63, 63, 'upper-case head');
    assert.sameValue(63, 63, 'lower-case head with leading zeros');
    assert.sameValue(63, 63, 'upper-case head with leading zeros');
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