try {
    var poisoned = {
        valueOf: function () {
            throw new Test262Error('should not evaluate this code');
        }
    };
    assert.throws(TypeError, function () {
        Atomics.wait(null, poisoned, poisoned, poisoned);
    }, '`Atomics.wait(null, poisoned, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        Atomics.wait(undefined, poisoned, poisoned, poisoned);
    }, '`Atomics.wait(undefined, poisoned, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        Atomics.wait(true, poisoned, poisoned, poisoned);
    }, '`Atomics.wait(true, poisoned, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        Atomics.wait(false, poisoned, poisoned, poisoned);
    }, '`Atomics.wait(false, poisoned, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        Atomics.wait('***string***', poisoned, poisoned, poisoned);
    }, '`Atomics.wait(\'***string***\', poisoned, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        Atomics.wait(Number.NEGATIVE_INFINITY, poisoned, poisoned, poisoned);
    }, '`Atomics.wait(Number.NEGATIVE_INFINITY, poisoned, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        Atomics.wait(Symbol('***symbol***'), poisoned, poisoned, poisoned);
    }, '`Atomics.wait(Symbol(\'***symbol***\'), poisoned, poisoned, poisoned)` throws TypeError');
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