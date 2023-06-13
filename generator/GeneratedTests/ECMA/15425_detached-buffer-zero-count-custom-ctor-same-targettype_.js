try {
    testWithTypedArrayConstructors(function (TA) {
        let counter = 0;
        let sample, result, other;
        let ctor = {};
        ctor[Symbol.species] = function (count) {
            counter++;
            $DETACHBUFFER(sample.buffer);
            other = new TA(count);
            return other;
        };
        sample = new TA(0);
        sample.constructor = ctor;
        result = sample.slice();
        assert.sameValue(result.length, 0, 'The value of result.length is 0');
        assert.notSameValue(result.buffer, sample.buffer, 'The value of result.buffer is expected to not equal the value of `sample.buffer`');
        assert.sameValue(result, other, 'The value of `result` is expected to equal the value of other');
        assert.sameValue(counter, 1, 'The value of `counter` is 1');
        sample = new TA(4);
        sample.constructor = ctor;
        sample.slice(1, 1);
        assert.sameValue(counter, 2, 'The value of `counter` is 2');
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