try {
    let defaultLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
    let supportedNumberingSystems = [
        'latn',
        'arab'
    ].filter(nu => new Intl.DateTimeFormat(defaultLocale + '-u-nu-' + nu).resolvedOptions().numberingSystem === nu);
    if (supportedNumberingSystems.includes('latn')) {
        let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + '-u-nu-lATn');
        assert.sameValue(dateTimeFormat.resolvedOptions().numberingSystem, 'latn', 'Numbering system option should be in lower case');
    }
    if (supportedNumberingSystems.includes('arab')) {
        let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + '-u-nu-Arab');
        assert.sameValue(dateTimeFormat.resolvedOptions().numberingSystem, 'arab', 'Numbering system option should be in lower case');
    }
    let supportedCalendars = [
        'gregory',
        'chinese'
    ].filter(ca => new Intl.DateTimeFormat(defaultLocale + '-u-ca-' + ca).resolvedOptions().calendar === ca);
    if (supportedCalendars.includes('gregory')) {
        let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + '-u-ca-Gregory');
        assert.sameValue(dateTimeFormat.resolvedOptions().calendar, 'gregory', 'Calendar option should be in lower case');
    }
    if (supportedCalendars.includes('chinese')) {
        let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + '-u-ca-CHINESE');
        assert.sameValue(dateTimeFormat.resolvedOptions().calendar, 'chinese', 'Calendar option should be in lower case');
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