try {
    class CustomRelativeTimeFormat extends Intl.RelativeTimeFormat {
        constructor(locales, options) {
            super(locales, options);
            this.isCustom = true;
        }
    }
    const locale = 'de';
    const value = 7;
    const unit = 'day';
    const real_rtf = new Intl.RelativeTimeFormat(locale);
    assert.sameValue(real_rtf.isCustom, undefined, 'Custom property');
    const custom_rtf = new CustomRelativeTimeFormat(locale);
    assert.sameValue(custom_rtf.isCustom, true, 'Custom property');
    assert.sameValue(custom_rtf.format(value, unit), real_rtf.format(value, unit), 'Direct call');
    assert.sameValue(Intl.RelativeTimeFormat.prototype.format.call(custom_rtf, value, unit), Intl.RelativeTimeFormat.prototype.format.call(real_rtf, value, unit), 'Indirect call');
    assert.sameValue(Object.getPrototypeOf(custom_rtf), CustomRelativeTimeFormat.prototype, 'Prototype');
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