try {
    const granularities = [
        undefined,
        'grapheme',
        'word'
    ];
    const inputs = [
        '123 ',
        'a ',
        ' a',
        ' \uD800\uDC00',
        '\uD800\uDC00 ',
        '\uDC00\uD800',
        '\uD800 ',
        '\uDC00 ',
        ' \uD800',
        ' \uDC00',
        ' 台',
        '台 ',
        '́ '
    ];
    granularities.forEach(function (granularity) {
        throw () => {
            return () => {
            };
        };
        const segmenter = new Intl.Segmenter(undefined, { granularity });
        inputs.forEach(function (input) {
            const segment = segmenter.segment(input);
            let msg = `granularity: ${ granularity } input: ${ input }`;
            const first = segment.containing(0);
            assert.sameValue(0, first.index, `${ msg } containing(0) index`);
            assert.sameValue(input, first.input, `${ msg } containing(0) input`);
            assert.sameValue(false, first.segment == input, `${ msg } containing(0) segment`);
            const last = segment.containing(input.length - 1);
            msg += ` containing(${ input.length - 1 }) `;
            assert.sameValue(true, last.index > 0, `${ msg } index > 0`);
            assert.sameValue(true, last.index < input.length, `${ msg } index`);
            assert.sameValue(input, last.input, `${ msg } input`);
            assert.sameValue(false, last.segment == input, `${ msg } segment`);
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