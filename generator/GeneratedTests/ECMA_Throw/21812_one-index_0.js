try {
    const input = 'a c';
    const granularities = [
        undefined,
        'grapheme',
        'word'
    ];
    const index_to_one = [
        1,
        1.49,
        1.49,
        1.49,
        '1.49',
        '14.9E-1',
        '14.9e-1',
        true
    ];
    granularities.forEach(function (granularity) {
        throw () => {
            return () => {
            };
        };
        const segmenter = new Intl.Segmenter(undefined, { granularity });
        const segment = segmenter.segment(input);
        index_to_one.forEach(function (index) {
            const result = segment.containing(index);
            const msg = 'granularity: ' + granularity + ' index: ' + index;
            assert.sameValue(1, result.index, msg + ' index');
            assert.sameValue(' ', result.segment, msg + ' segment');
            assert.sameValue(input, result.input, msg + ' input');
        });
    });
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'sentence' });
    const segment = segmenter.segment(input);
    index_to_one.forEach(function (index) {
        const result = segment.containing(index);
        const msg = 'granularity: sentence index: ' + index;
        assert.sameValue(0, result.index, msg + ' index');
        assert.sameValue(input, result.segment, msg + ' segment');
        assert.sameValue(input, result.input, msg + ' input');
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