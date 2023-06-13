try {
    const values = [
        [
            undefined,
            'short'
        ],
        ['short'],
        ['narrow'],
        ['long']
    ];
    for (const [value, expected = value] of values) {
        const nf = new Intl.NumberFormat([], {
            style: 'unit',
            unitDisplay: value,
            unit: 'hour'
        });
        const resolvedOptions = nf.resolvedOptions();
        assert.sameValue('unitDisplay' in resolvedOptions, true);
        assert.sameValue(resolvedOptions.unitDisplay, expected);
    }
    for (const [value, expected = value] of values) {
        const nf = new Intl.NumberFormat([], {
            style: 'unit',
            unitDisplay: value,
            unit: 'percent'
        });
        const resolvedOptions = nf.resolvedOptions();
        assert.sameValue('unitDisplay' in resolvedOptions, true);
        assert.sameValue(resolvedOptions.unitDisplay, expected);
    }
    for (const [value] of values) {
        const nf = new Intl.NumberFormat([], {
            style: 'percent',
            unitDisplay: value
        });
        const resolvedOptions = nf.resolvedOptions();
        assert.sameValue('unitDisplay' in resolvedOptions, false);
        assert.sameValue(resolvedOptions.unitDisplay, undefined);
    }
    const invalidValues = [
        '',
        'Short',
        's',
        'ſhort'
    ];
    for (const unitDisplay of invalidValues) {
        assert.throws(RangeError, () => {
            new Intl.NumberFormat([], { unitDisplay });
        });
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