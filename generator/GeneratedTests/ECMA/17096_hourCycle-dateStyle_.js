try {
    const hcValues = [
        'h11',
        'h12',
        'h23',
        'h24'
    ];
    const hour12Values = [
        'h11',
        'h12'
    ];
    for (const dateStyle of [
            'full',
            'long',
            'medium',
            'short'
        ]) {
        assert.sameValue(new Intl.DateTimeFormat([], { dateStyle }).resolvedOptions().dateStyle, dateStyle, `Should support dateStyle=${ dateStyle }`);
        for (const hcValue of hcValues) {
            const resolvedOptions = new Intl.DateTimeFormat(`de-u-hc-${ hcValue }`, { dateStyle }).resolvedOptions();
            assert.sameValue(resolvedOptions.hourCycle, undefined);
            assert.sameValue(resolvedOptions.hour12, undefined);
        }
        for (const hcValue of hcValues) {
            const resolvedOptions = new Intl.DateTimeFormat('en-US', {
                dateStyle,
                hourCycle: hcValue
            }).resolvedOptions();
            assert.sameValue(resolvedOptions.hourCycle, undefined);
            assert.sameValue(resolvedOptions.hour12, undefined);
        }
        let resolvedOptions = new Intl.DateTimeFormat('en-US-u-hc-h12', {
            dateStyle,
            hourCycle: 'h23'
        }).resolvedOptions();
        assert.sameValue(resolvedOptions.hourCycle, undefined);
        assert.sameValue(resolvedOptions.hour12, undefined);
        resolvedOptions = new Intl.DateTimeFormat('fr', {
            dateStyle,
            hour12: true,
            hourCycle: 'h23'
        }).resolvedOptions();
        assert.sameValue(resolvedOptions.hourCycle, undefined);
        assert.sameValue(resolvedOptions.hour12, undefined);
        resolvedOptions = new Intl.DateTimeFormat('fr-u-hc-h24', {
            dateStyle,
            hour12: true
        }).resolvedOptions();
        assert.sameValue(resolvedOptions.hourCycle, undefined);
        assert.sameValue(resolvedOptions.hour12, undefined);
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