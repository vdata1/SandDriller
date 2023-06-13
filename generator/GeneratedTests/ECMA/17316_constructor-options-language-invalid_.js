try {
    const invalidLanguageOptions = [
        '',
        'a',
        'ab7',
        'notalanguage',
        'undefined',
        'fr-Latn',
        'fr-FR',
        'sa-vaidika',
        'fr-a-asdf',
        'fr-x-private',
        'i-klingon',
        'zh-min',
        'zh-min-nan',
        'abcd-US',
        'abcde-US',
        'abcdef-US',
        'abcdefg-US',
        'abcdefgh-US',
        7
    ];
    for (const language of invalidLanguageOptions) {
        assert.throws(RangeError, function () {
            new Intl.Locale('en', { language });
        }, `new Intl.Locale("en", {language: "${ language }"}) throws RangeError`);
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