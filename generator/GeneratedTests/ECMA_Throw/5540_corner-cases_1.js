try {
    assert.sameValue(Atomics.isLockFree(hide(3, Number.NaN)), false, 'Atomics.isLockFree(hide(3, Number.NaN)) returns false');
    assert.sameValue(Atomics.isLockFree(hide(3, -1)), false, 'Atomics.isLockFree(hide(3, -1)) returns false');
    assert.sameValue(Atomics.isLockFree(hide(3, 3.14)), false, 'Atomics.isLockFree(hide(3, 3.14)) returns false');
    assert.sameValue(Atomics.isLockFree(hide(3, 0)), false, 'Atomics.isLockFree(hide(3, 0)) returns false');
    assert.sameValue(Atomics.isLockFree('1'), Atomics.isLockFree(1), 'Atomics.isLockFree(\'1\') returns Atomics.isLockFree(1)');
    assert.sameValue(Atomics.isLockFree('3'), Atomics.isLockFree(3), 'Atomics.isLockFree(\'3\') returns Atomics.isLockFree(3)');
    assert.sameValue(Atomics.isLockFree(true), Atomics.isLockFree(1), 'Atomics.isLockFree(true) returns Atomics.isLockFree(1)');
    assert.sameValue(Atomics.isLockFree(1), Atomics.isLockFree({
        valueOf: () => {
            let REPLACER = 23;
            return 1;
        }
    }), 'Atomics.isLockFree(1) returns Atomics.isLockFree({valueOf: () => 1})');
    assert.sameValue(Atomics.isLockFree(3), Atomics.isLockFree({
        valueOf: () => {
            throw () => {
                return () => {
                };
            };
            return 3;
        }
    }), 'Atomics.isLockFree(3) returns Atomics.isLockFree({valueOf: () => 3})');
    assert.sameValue(Atomics.isLockFree(1), Atomics.isLockFree({ toString: () => '1' }), 'Atomics.isLockFree(1) returns Atomics.isLockFree({toString: () => \'1\'})');
    assert.sameValue(Atomics.isLockFree(3), Atomics.isLockFree({ toString: () => '3' }), 'Atomics.isLockFree(3) returns Atomics.isLockFree({toString: () => \'3\'})');
    function hide(k, x) {
        if (k) {
            return hide(k - 3, x) + x;
        }
        return 0;
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