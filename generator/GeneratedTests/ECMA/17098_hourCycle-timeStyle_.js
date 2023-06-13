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
    const dataPropertyDesc = {
        writable: true,
        enumerable: true,
        configurable: true
    };
    for (const timeStyle of [
            'full',
            'long',
            'medium',
            'short'
        ]) {
        assert.sameValue(new Intl.DateTimeFormat([], { timeStyle }).resolvedOptions().timeStyle, timeStyle, `Should support timeStyle=${ timeStyle }`);
        for (const hcValue of hcValues) {
            const resolvedOptions = new Intl.DateTimeFormat(`de-u-hc-${ hcValue }`, { timeStyle }).resolvedOptions();
            assert.sameValue(resolvedOptions.hourCycle, hcValue);
            assert.sameValue(resolvedOptions.hour12, hour12Values.includes(hcValue));
        }
        for (const hcValue of hcValues) {
            const resolvedOptions = new Intl.DateTimeFormat('en-US', {
                timeStyle,
                hourCycle: hcValue
            }).resolvedOptions();
            assert.sameValue(resolvedOptions.hourCycle, hcValue);
            assert.sameValue(resolvedOptions.hour12, hour12Values.includes(hcValue));
            verifyProperty(resolvedOptions, 'hourCycle', dataPropertyDesc);
            verifyProperty(resolvedOptions, 'hour12', dataPropertyDesc);
        }
        let resolvedOptions = new Intl.DateTimeFormat('en-US-u-hc-h12', {
            timeStyle,
            hourCycle: 'h23'
        }).resolvedOptions();
        assert.sameValue(resolvedOptions.hourCycle, 'h23');
        assert.sameValue(resolvedOptions.hour12, false);
        verifyProperty(resolvedOptions, 'hourCycle', dataPropertyDesc);
        verifyProperty(resolvedOptions, 'hour12', dataPropertyDesc);
        resolvedOptions = new Intl.DateTimeFormat('fr', {
            timeStyle,
            hour12: true,
            hourCycle: 'h23'
        }).resolvedOptions();
        assert(hour12Values.includes(resolvedOptions.hourCycle));
        assert.sameValue(resolvedOptions.hour12, true);
        verifyProperty(resolvedOptions, 'hourCycle', dataPropertyDesc);
        verifyProperty(resolvedOptions, 'hour12', dataPropertyDesc);
        resolvedOptions = new Intl.DateTimeFormat('fr-u-hc-h24', {
            timeStyle,
            hour12: true
        }).resolvedOptions();
        assert(hour12Values.includes(resolvedOptions.hourCycle));
        assert.sameValue(resolvedOptions.hour12, true);
        verifyProperty(resolvedOptions, 'hourCycle', dataPropertyDesc);
        verifyProperty(resolvedOptions, 'hour12', dataPropertyDesc);
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