try {
    const validLanguageTags = {
        'eN': 'en',
        'en-gb': 'en-GB',
        'IT-LATN-iT': 'it-Latn-IT',
        'th-th-u-nu-thai': 'th-TH-u-nu-thai',
        'en-x-u-foo': 'en-x-u-foo',
        'en-a-bar-x-u-foo': 'en-a-bar-x-u-foo',
        'en-x-u-foo-a-bar': 'en-x-u-foo-a-bar',
        'en-u-baz-a-bar-x-u-foo': 'en-a-bar-u-baz-x-u-foo',
        'DE-1996': 'de-1996',
        'sl-ROZAJ-BISKE-1994': 'sl-1994-biske-rozaj',
        'zh-latn-pinyin-pinyin2': 'zh-Latn-pinyin-pinyin2'
    };
    for (const [langtag, canonical] of Object.entries(validLanguageTags)) {
        assert.sameValue(new Intl.Locale(canonical).toString(), canonical, `new Intl.Locale("${ canonical }").toString() returns "${ canonical }"`);
        assert.sameValue(new Intl.Locale(langtag).toString(), canonical, `new Intl.Locale("${ langtag }").toString() returns "${ canonical }"`);
    }
    const invalidLanguageTags = [
        'X-u-foo',
        'Flob',
        'ZORK',
        'Blah-latn',
        'QuuX-latn-us',
        'SPAM-gb-x-Sausages-BACON-eggs'
    ];
    for (const langtag of invalidLanguageTags) {
        assert.throws(RangeError, () => new Intl.Locale(langtag));
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