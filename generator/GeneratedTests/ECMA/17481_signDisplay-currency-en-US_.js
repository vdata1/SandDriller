try {
    const tests = [
        [
            'auto',
            '($987.00)',
            '($0.00)',
            '($0.00)',
            '$0.00',
            '$0.00',
            '$987.00'
        ],
        [
            'always',
            '($987.00)',
            '($0.00)',
            '($0.00)',
            '+$0.00',
            '+$0.00',
            '+$987.00'
        ],
        [
            'never',
            '$987.00',
            '$0.00',
            '$0.00',
            '$0.00',
            '$0.00',
            '$987.00'
        ],
        [
            'exceptZero',
            '($987.00)',
            '$0.00',
            '$0.00',
            '$0.00',
            '$0.00',
            '+$987.00'
        ]
    ];
    for (const [signDisplay, negative, negativeNearZero, negativeZero, zero, positiveNearZero, positive] of tests) {
        const nf = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            currencySign: 'accounting',
            signDisplay
        });
        assert.sameValue(nf.format(-987), negative);
        assert.sameValue(nf.format(-0.0001), negativeNearZero);
        assert.sameValue(nf.format(-0), negativeZero);
        assert.sameValue(nf.format(0), zero);
        assert.sameValue(nf.format(0.0001), positiveNearZero);
        assert.sameValue(nf.format(987), positive);
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