try {
    assert.sameValue(typeof FinalizationRegistry, 'function', 'typeof FinalizationRegistry is function');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        new FinalizationRegistry({});
    }, 'ordinary object');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        new FinalizationRegistry(WeakRef.prototype);
    }, 'WeakRef.prototype');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        new FinalizationRegistry(FinalizationRegistry.prototype);
    }, 'FinalizationRegistry.prototype');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        new FinalizationRegistry([]);
    }, 'Array');
    assert.throws(TypeError, function () {
        new FinalizationRegistry();
    }, 'implicit undefined');
    assert.throws(TypeError, function () {
        new FinalizationRegistry(undefined);
    }, 'explicit undefined');
    assert.throws(TypeError, function () {
        new FinalizationRegistry(null);
    }, 'null');
    assert.throws(TypeError, function () {
        new FinalizationRegistry(1);
    }, 'number');
    assert.throws(TypeError, function () {
        new FinalizationRegistry('Object');
    }, 'string');
    var s = Symbol();
    assert.throws(TypeError, function () {
        new FinalizationRegistry(s);
    }, 'symbol');
    assert.throws(TypeError, function () {
        new FinalizationRegistry(true);
    }, 'Boolean, true');
    assert.throws(TypeError, function () {
        new FinalizationRegistry(false);
    }, 'Boolean, false');
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