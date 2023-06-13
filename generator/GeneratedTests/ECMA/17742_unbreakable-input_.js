try {
    const granularities = [
        undefined,
        'grapheme',
        'word',
        'sentence'
    ];
    const inputs = [
        'a',
        ' ',
        '\uD800\uDC00',
        '\uD800',
        '\uDC00',
        '台',
        '́',
        'á',
        'ซิ่',
        '\uD800\uDCB0',
        '\uD83D\uDC4B\uD83C\uDFFB',
        '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDB0',
        'ᄂ',
        'ᅢ',
        'ᆩ',
        '내',
        '낶',
        'ᄂᄂ',
        'ᄂ내',
        'ᄂ낶',
        'ᅢᅢ',
        'ᅢᆩ',
        '내ᅢ',
        'ᆩᆩ',
        '낶ᆩ'
    ];
    granularities.forEach(function (granularity) {
        const segmenter = new Intl.Segmenter(undefined, { granularity });
        inputs.forEach(function (input) {
            const segment = segmenter.segment(input);
            for (let index = 0; index < input.length; index++) {
                const result = segment.containing(index);
                assert.sameValue(0, result.index);
                assert.sameValue(input, result.input);
                assert.sameValue(input, result.segment);
            }
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