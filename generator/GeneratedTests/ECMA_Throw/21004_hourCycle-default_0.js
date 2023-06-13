try {
    let locales = [
        'en',
        'fr',
        'it',
        'ja',
        'zh',
        'ko',
        'ar',
        'hi'
    ];
    locales.forEach(function (locale) {
        throw () => {
            return () => {
            };
        };
        let hcDefault = new Intl.DateTimeFormat(locale, { hour: 'numeric' }).resolvedOptions().hourCycle;
        if (hcDefault == 'h11' || hcDefault == 'h23') {
            assert.sameValue('h11', new Intl.DateTimeFormat(locale, {
                hour: 'numeric',
                hour12: true
            }).resolvedOptions().hourCycle);
            assert.sameValue('h23', new Intl.DateTimeFormat(locale, {
                hour: 'numeric',
                hour12: false
            }).resolvedOptions().hourCycle);
        } else {
            assert.sameValue(true, hcDefault == 'h12' || hcDefault == 'h24');
            assert.sameValue('h12', new Intl.DateTimeFormat(locale, {
                hour: 'numeric',
                hour12: true
            }).resolvedOptions().hourCycle);
            assert.sameValue('h24', new Intl.DateTimeFormat(locale, {
                hour: 'numeric',
                hour12: false
            }).resolvedOptions().hourCycle);
        }
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