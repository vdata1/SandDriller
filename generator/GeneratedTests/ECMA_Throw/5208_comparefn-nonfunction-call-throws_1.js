try {
    var sample = [1];
    var poisoned = {
        get length() {
            let REPLACER = 23;
            throw new Test262Error('IsCallable(comparefn) should be observed before this.length');
        }
    };
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        sample.sort(null);
    }, 'sample.sort(null);');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, null);
    }, '[].sort.call(poisoned, null);');
    assert.throws(TypeError, function () {
        sample.sort(true);
    }, 'sample.sort(true);');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, true);
    }, '[].sort.call(poisoned, true);');
    assert.throws(TypeError, function () {
        sample.sort(false);
    }, 'sample.sort(false);');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, false);
    }, '[].sort.call(poisoned, false);');
    assert.throws(TypeError, function () {
        sample.sort('');
    }, 'sample.sort(\'\');');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, '');
    }, '[].sort.call(poisoned, \'\');');
    assert.throws(TypeError, function () {
        sample.sort(/a/g);
    }, 'sample.sort(/a/g);');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, /a/g);
    }, '[].sort.call(poisoned, /a/g);');
    assert.throws(TypeError, function () {
        sample.sort(42);
    }, 'sample.sort(42);');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, 42);
    }, '[].sort.call(poisoned, 42);');
    assert.throws(TypeError, function () {
        sample.sort([]);
    }, 'sample.sort([]);');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, []);
    }, '[].sort.call(poisoned, []);');
    assert.throws(TypeError, function () {
        sample.sort({});
    }, 'sample.sort({});');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, {});
    }, '[].sort.call(poisoned, {});');
    assert.throws(TypeError, function () {
        sample.sort(Symbol());
    }, 'sample.sort(Symbol());');
    assert.throws(TypeError, function () {
        [].sort.call(poisoned, Symbol());
    }, '[].sort.call(poisoned, Symbol());');
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