try {
    const tests = [
        [
            'auto',
            '-\u221E',
            '-987',
            '-0',
            '-0',
            '0',
            '0',
            '987',
            '\u221E',
            'NaN'
        ],
        [
            'always',
            '-\u221E',
            '-987',
            '-0',
            '-0',
            '+0',
            '+0',
            '+987',
            '+\u221E',
            '+NaN'
        ],
        [
            'never',
            '\u221E',
            '987',
            '0',
            '0',
            '0',
            '0',
            '987',
            '\u221E',
            'NaN'
        ],
        [
            'exceptZero',
            '-\u221E',
            '-987',
            '0',
            '0',
            '0',
            '0',
            '+987',
            '+\u221E',
            'NaN'
        ]
    ];
    for (const [signDisplay, ...expected] of tests) {
        const nf = new Intl.NumberFormat('ja-JP', { signDisplay });
        assert.sameValue(nf.format(-Infinity), expected[0], `-Infinity (${ signDisplay })`);
        assert.sameValue(nf.format(-987), expected[1], `-987 (${ signDisplay })`);
        assert.sameValue(nf.format(-0.0001), expected[2], `-0.0001 (${ signDisplay })`);
        assert.sameValue(nf.format(-0), expected[3], `-0 (${ signDisplay })`);
        assert.sameValue(nf.format(0), expected[4], `0 (${ signDisplay })`);
        assert.sameValue(nf.format(0.0001), expected[5], `0.0001 (${ signDisplay })`);
        assert.sameValue(nf.format(987), expected[6], `987 (${ signDisplay })`);
        assert.sameValue(nf.format(Infinity), expected[7], `Infinity (${ signDisplay })`);
        assert.sameValue(nf.format(NaN), expected[8], `NaN (${ signDisplay })`);
    }
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