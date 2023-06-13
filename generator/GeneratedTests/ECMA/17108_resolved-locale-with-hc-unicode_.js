try {
    var defaultLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
    var defaultLocaleWithHourCycle = defaultLocale + '-u-hc-h11';
    function assertLocale(locale, expectedLocale, options, message) {
        var resolved = new Intl.DateTimeFormat(locale, {
            hour: '2-digit',
            hour12: options.hour12,
            hourCycle: options.hourCycle
        }).resolvedOptions();
        assert.sameValue(resolved.locale, expectedLocale, message + ' (With hour option.)');
        resolved = new Intl.DateTimeFormat(locale, {
            hour12: options.hour12,
            hourCycle: options.hourCycle
        }).resolvedOptions();
        assert.sameValue(resolved.locale, expectedLocale, message + ' (Without hour option.)');
    }
    assertLocale(defaultLocaleWithHourCycle, defaultLocale, {
        hour12: false,
        hourCycle: 'h23'
    }, 'hour12 and hourCycle options and hc Unicode extension value are present.');
    assertLocale(defaultLocaleWithHourCycle, defaultLocale, { hour12: false }, 'hour12 option and hc Unicode extension value are present.');
    assertLocale(defaultLocaleWithHourCycle, defaultLocale, { hourCycle: 'h23' }, 'hourCycle option and hc Unicode extension value are present.');
    assertLocale(defaultLocaleWithHourCycle, defaultLocaleWithHourCycle, {}, 'Only hc Unicode extension value is present.');
    assertLocale(defaultLocale, defaultLocale, {
        hour12: false,
        hourCycle: 'h23'
    }, 'hour12 and hourCycle options are present, but no hc Unicode extension value.');
    assertLocale(defaultLocale, defaultLocale, { hour12: false }, 'hourCycle option is present, but no hc Unicode extension value.');
    assertLocale(defaultLocale, defaultLocale, { hourCycle: 'h23' }, 'hourCycle option is present, but no hc Unicode extension value.');
    assertLocale(defaultLocale, defaultLocale, {}, 'No options are present and no hc Unicode extension value.');
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