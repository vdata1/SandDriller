try {
    var unscopables = Array.prototype[Symbol.unscopables];
    assert.sameValue(Object.getPrototypeOf(unscopables), null);
    assert.sameValue(unscopables.copyWithin, true, '`copyWithin` property value');
    verifyEnumerable(unscopables, 'copyWithin');
    verifyWritable(unscopables, 'copyWithin');
    verifyConfigurable(unscopables, 'copyWithin');
    assert.sameValue(unscopables.entries, true, '`entries` property value');
    verifyEnumerable(unscopables, 'entries');
    verifyWritable(unscopables, 'entries');
    verifyConfigurable(unscopables, 'entries');
    assert.sameValue(unscopables.fill, true, '`fill` property value');
    verifyEnumerable(unscopables, 'fill');
    verifyWritable(unscopables, 'fill');
    verifyConfigurable(unscopables, 'fill');
    assert.sameValue(unscopables.find, true, '`find` property value');
    verifyEnumerable(unscopables, 'find');
    verifyWritable(unscopables, 'find');
    verifyConfigurable(unscopables, 'find');
    assert.sameValue(unscopables.findIndex, true, '`findIndex` property value');
    verifyEnumerable(unscopables, 'findIndex');
    verifyWritable(unscopables, 'findIndex');
    verifyConfigurable(unscopables, 'findIndex');
    assert.sameValue(unscopables.flat, true, '`flat` property value');
    verifyEnumerable(unscopables, 'flat');
    verifyWritable(unscopables, 'flat');
    verifyConfigurable(unscopables, 'flat');
    assert.sameValue(unscopables.flatMap, true, '`flatMap` property value');
    verifyEnumerable(unscopables, 'flatMap');
    verifyWritable(unscopables, 'flatMap');
    verifyConfigurable(unscopables, 'flatMap');
    assert.sameValue(unscopables.includes, true, '`includes` property value');
    verifyEnumerable(unscopables, 'includes');
    verifyWritable(unscopables, 'includes');
    verifyConfigurable(unscopables, 'includes');
    assert.sameValue(unscopables.keys, true, '`keys` property value');
    verifyEnumerable(unscopables, 'keys');
    verifyWritable(unscopables, 'keys');
    verifyConfigurable(unscopables, 'keys');
    assert.sameValue(unscopables.values, true, '`values` property value');
    verifyEnumerable(unscopables, 'values');
    verifyWritable(unscopables, 'values');
    verifyConfigurable(unscopables, 'values');
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