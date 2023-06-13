try {
    const valid = [
        'en-t-en',
        'en-t-en-latn',
        'en-t-en-ca',
        'en-t-en-latn-ca',
        'en-t-en-emodeng',
        'en-t-en-latn-emodeng',
        'en-t-en-ca-emodeng',
        'en-t-en-latn-ca-emodeng',
        'en-t-d0-ascii'
    ];
    const extraFields = [
        '',
        '-i0-handwrit',
        '-s0-accents-publish'
    ];
    for (let tag of valid) {
        for (let extra of extraFields) {
            let actualTag = tag + extra;
            assert(isCanonicalizedStructurallyValidLanguageTag(actualTag), '"' + actualTag + '" is a canonical and structurally valid language tag.');
            let result = Intl.getCanonicalLocales(actualTag);
            assert.sameValue(result.length, 1);
            assert.sameValue(result[0], actualTag);
        }
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