try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample = new TA(2);
        assert.sameValue(Reflect.defineProperty(sample, '0.1', {
            value: 42,
            configurable: false,
            enumerable: true,
            writable: true
        }), false, '0.1');
        assert.sameValue(sample[0], 0, '\'0.1\' - does not change the value for [0]');
        assert.sameValue(sample['0.1'], undefined, '\'0.1\' - does not define a value for [\'0.1\']');
        assert.sameValue(Reflect.defineProperty(sample, '0.000001', {
            value: 42,
            configurable: false,
            enumerable: true,
            writable: true
        }), false, '0.000001');
        assert.sameValue(sample[0], 0, '\'0.000001\' - does not change the value for [0]');
        assert.sameValue(sample['0.000001'], undefined, '\'0.000001\' - does not define a value for [\'0.000001\']');
        assert.sameValue(Reflect.defineProperty(sample, '1.1', {
            value: 42,
            configurable: false,
            enumerable: true,
            writable: true
        }), false, '1.1');
        assert.sameValue(sample[1], 0, '\'1.1\' - does not change the value for [1]');
        assert.sameValue(sample['1.1'], undefined, '\'1.1\' - does not define a value for [\'1.1\']');
        assert.sameValue(Reflect.defineProperty(sample, 'Infinity', {
            value: 42,
            configurable: false,
            enumerable: true,
            writable: true
        }), false, 'Infinity');
        assert.sameValue(sample[0], 0, '\'Infinity\' - does not change the value for [0]');
        assert.sameValue(sample[1], 0, '\'Infinity\' - does not change the value for [1]');
        assert.sameValue(sample['Infinity'], undefined, '\'Infinity\' - does not define a value for [\'Infinity\']');
        assert.sameValue(Reflect.defineProperty(sample, '-Infinity', {
            value: 42,
            configurable: false,
            enumerable: true,
            writable: true
        }), false, '-Infinity');
        assert.sameValue(sample[0], 0, '\'-Infinity\' - does not change the value for [0]');
        assert.sameValue(sample[1], 0, '\'-Infinity\' - does not change the value for [1]');
        assert.sameValue(sample['-Infinity'], undefined, '\'-Infinity\' - does not define a value for [\'-Infinity\']');
    });
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