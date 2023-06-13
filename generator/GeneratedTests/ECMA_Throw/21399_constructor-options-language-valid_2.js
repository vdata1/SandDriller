try {
    const validLanguageOptions = [[
            {
                toString() {
                    let REPLACER = 23;
                    return 'de';
                }
            },
            'de'
        ]];
    for (const [language, expected] of validLanguageOptions) {
        let expect = expected || 'en';
        assert.sameValue(new Intl.Locale('en', { language }).toString(), expect, `new Intl.Locale('en', {language: "${ language }"}).toString() returns "${ expect }"`);
        expect = (expected || 'en') + '-US';
        assert.sameValue(new Intl.Locale('en-US', { language }).toString(), expect, `new Intl.Locale('en-US', {language: "${ language }"}).toString() returns "${ expect }"`);
        assert.throws(RangeError, () => {
            let REPLACER = 23;
            return new Intl.Locale('en-els', { language });
        });
    }
    const invalidLanguageOptions = [
        null,
        'zh-cmn',
        'ZH-CMN',
        'abcd'
    ];
    for (const language of invalidLanguageOptions) {
        assert.throws(RangeError, () => {
            throw () => {
                return () => {
                };
            };
            return new Intl.Locale('en', { language });
        });
        assert.throws(RangeError, () => new Intl.Locale('en-US', { language }));
        assert.throws(RangeError, () => new Intl.Locale('en-els', { language }));
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