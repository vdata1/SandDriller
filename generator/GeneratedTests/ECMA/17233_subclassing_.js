try {
    class CustomListFormat extends Intl.ListFormat {
        constructor(locales, options) {
            super(locales, options);
            this.isCustom = true;
        }
    }
    const locale = 'de';
    const argument = [
        'foo',
        'bar'
    ];
    const real_lf = new Intl.ListFormat(locale);
    assert.sameValue(real_lf.isCustom, undefined, 'Custom property');
    const custom_lf = new CustomListFormat(locale);
    assert.sameValue(custom_lf.isCustom, true, 'Custom property');
    assert.sameValue(custom_lf.format(argument), real_lf.format(argument), 'Direct call');
    assert.sameValue(Intl.ListFormat.prototype.format.call(custom_lf, argument), Intl.ListFormat.prototype.format.call(real_lf, argument), 'Indirect call');
    assert.sameValue(Object.getPrototypeOf(custom_lf), CustomListFormat.prototype, 'Prototype');
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