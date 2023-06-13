try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample;
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], '');
        assert(compareArray(sample, [
            42,
            2
        ]), 'the empty string');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], '0');
        assert(compareArray(sample, [
            42,
            2
        ]), '\'0\'');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], false);
        assert(compareArray(sample, [
            42,
            2
        ]), 'false');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], 0.1);
        assert(compareArray(sample, [
            42,
            2
        ]), '0.1');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], 0.9);
        assert(compareArray(sample, [
            42,
            2
        ]), '0.9');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], -0.5);
        assert(compareArray(sample, [
            42,
            2
        ]), '-0.5');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], 1.1);
        assert(compareArray(sample, [
            1,
            42
        ]), '1.1');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], NaN);
        assert(compareArray(sample, [
            42,
            2
        ]), 'NaN');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], null);
        assert(compareArray(sample, [
            42,
            2
        ]), 'null');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], undefined);
        assert(compareArray(sample, [
            42,
            2
        ]), 'undefined');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], {});
        assert(compareArray(sample, [
            42,
            2
        ]), '{}');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], []);
        assert(compareArray(sample, [
            42,
            2
        ]), '[]');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], [0]);
        assert(compareArray(sample, [
            42,
            2
        ]), '[0]');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], true);
        assert(compareArray(sample, [
            1,
            42
        ]), 'true');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], '1');
        assert(compareArray(sample, [
            1,
            42
        ]), '\'1\'');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], [1]);
        assert(compareArray(sample, [
            1,
            42
        ]), '[1]');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], {
            valueOf: function () {
                return 1;
            }
        });
        assert(compareArray(sample, [
            1,
            42
        ]), 'valueOf');
        sample = new TA([
            1,
            2
        ]);
        sample.set([42], {
            toString: function () {
                return 1;
            }
        });
        assert(compareArray(sample, [
            1,
            42
        ]), 'toString');
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