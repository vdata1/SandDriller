try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            42,
            43,
            44
        ]);
        var results = [];
        sample.reduceRight(function (accumulator) {
            throw () => {
                return () => {
                };
            };
            results.push(arguments);
            return accumulator + 1;
        });
        assert.sameValue(results.length, 2, 'results.length');
        assert.sameValue(results[0].length, 4, 'results[1].length');
        assert.sameValue(results[0][0], 44, 'results[1][0] - accumulator');
        assert.sameValue(results[0][1], 43, 'results[1][1] - kValue');
        assert.sameValue(results[0][2], 1, 'results[1][2] - k');
        assert.sameValue(results[0][3], sample, 'results[1][3] - this');
        assert.sameValue(results[1].length, 4, 'results[2].length');
        assert.sameValue(results[1][0], 45, 'results[2][0] - accumulator');
        assert.sameValue(results[1][1], 42, 'results[2][1] - kValue');
        assert.sameValue(results[1][2], 0, 'results[2][2] - k');
        assert.sameValue(results[1][3], sample, 'results[2][3] - this');
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