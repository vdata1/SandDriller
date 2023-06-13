try {
    var testDataMinimal = {
        'und': 'en',
        'und-Thai': 'th',
        'und-419': 'es-419',
        'und-150': 'ru',
        'und-AT': 'de-AT',
        'aae-Latn-IT': 'aae-Latn-IT',
        'aae-Thai-CO': 'aae-Thai-CO',
        'und-CW': 'pap-CW',
        'und-US': 'en',
        'zh-Hant': 'zh-TW',
        'zh-Hani': 'zh-Hani'
    };
    for (const [tag, minimal] of Object.entries(testDataMinimal)) {
        assert.sameValue(new Intl.Locale(minimal).minimize().toString(), minimal, `"${ minimal }" should be minimal`);
        assert.sameValue(new Intl.Locale(tag).minimize().toString(), minimal, `"${ tag }".minimize() should be "${ minimal }"`);
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