try {
    assert.sameValue('Ì'.toLocaleLowerCase('lt'), 'i̇̀', 'LATIN CAPITAL LETTER I followed by COMBINING GRAVE ACCENT');
    assert.sameValue('J̀'.toLocaleLowerCase('lt'), 'j̇̀', 'LATIN CAPITAL LETTER J followed by COMBINING GRAVE ACCENT');
    assert.sameValue('Į̀'.toLocaleLowerCase('lt'), 'į̇̀', 'LATIN CAPITAL LETTER I WITH OGONEK followed by COMBINING GRAVE ACCENT');
    assert.sameValue('I\uD834\uDD85'.toLocaleLowerCase('lt'), 'i̇\uD834\uDD85', 'LATIN CAPITAL LETTER I followed by MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('J\uD834\uDD85'.toLocaleLowerCase('lt'), 'j̇\uD834\uDD85', 'LATIN CAPITAL LETTER J followed by MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('Į\uD834\uDD85'.toLocaleLowerCase('lt'), 'į̇\uD834\uDD85', 'LATIN CAPITAL LETTER I WITH OGONEK followed by MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('Ì̥'.toLocaleLowerCase('lt'), 'i̥̇̀', 'LATIN CAPITAL LETTER I followed by COMBINING RING BELOW, COMBINING GRAVE ACCENT');
    assert.sameValue('J̥̀'.toLocaleLowerCase('lt'), 'j̥̇̀', 'LATIN CAPITAL LETTER J followed by COMBINING RING BELOW, COMBINING GRAVE ACCENT');
    assert.sameValue('Į̥̀'.toLocaleLowerCase('lt'), 'į̥̇̀', 'LATIN CAPITAL LETTER I WITH OGONEK followed by COMBINING RING BELOW, COMBINING GRAVE ACCENT');
    assert.sameValue('I\uD800\uDDFD̀'.toLocaleLowerCase('lt'), 'i̇\uD800\uDDFD̀', 'LATIN CAPITAL LETTER I followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, COMBINING GRAVE ACCENT');
    assert.sameValue('J\uD800\uDDFD̀'.toLocaleLowerCase('lt'), 'j̇\uD800\uDDFD̀', 'LATIN CAPITAL LETTER J followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, COMBINING GRAVE ACCENT');
    assert.sameValue('Į\uD800\uDDFD̀'.toLocaleLowerCase('lt'), 'į̇\uD800\uDDFD̀', 'LATIN CAPITAL LETTER I WITH OGONEK followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, COMBINING GRAVE ACCENT');
    assert.sameValue('I̥\uD834\uDD85'.toLocaleLowerCase('lt'), 'i̥̇\uD834\uDD85', 'LATIN CAPITAL LETTER I followed by COMBINING RING BELOW, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('J̥\uD834\uDD85'.toLocaleLowerCase('lt'), 'j̥̇\uD834\uDD85', 'LATIN CAPITAL LETTER J followed by COMBINING RING BELOW, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('Į̥\uD834\uDD85'.toLocaleLowerCase('lt'), 'į̥̇\uD834\uDD85', 'LATIN CAPITAL LETTER I WITH OGONEK followed by COMBINING RING BELOW, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('I\uD800\uDDFD\uD834\uDD85'.toLocaleLowerCase('lt'), 'i̇\uD800\uDDFD\uD834\uDD85', 'LATIN CAPITAL LETTER I followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('J\uD800\uDDFD\uD834\uDD85'.toLocaleLowerCase('lt'), 'j̇\uD800\uDDFD\uD834\uDD85', 'LATIN CAPITAL LETTER J followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('Į\uD800\uDDFD\uD834\uDD85'.toLocaleLowerCase('lt'), 'į̇\uD800\uDDFD\uD834\uDD85', 'LATIN CAPITAL LETTER I WITH OGONEK followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('IÀ'.toLocaleLowerCase('lt'), 'ià', 'LATIN CAPITAL LETTER I followed by LATIN CAPITAL LETTER A, COMBINING GRAVE ACCENT');
    assert.sameValue('JÀ'.toLocaleLowerCase('lt'), 'jà', 'LATIN CAPITAL LETTER J followed by LATIN CAPITAL LETTER A, COMBINING GRAVE ACCENT');
    assert.sameValue('ĮÀ'.toLocaleLowerCase('lt'), 'įà', 'LATIN CAPITAL LETTER I WITH OGONEK followed by LATIN CAPITAL LETTER A, COMBINING GRAVE ACCENT');
    assert.sameValue('IA\uD834\uDD85'.toLocaleLowerCase('lt'), 'ia\uD834\uDD85', 'LATIN CAPITAL LETTER I followed by LATIN CAPITAL LETTER A, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('JA\uD834\uDD85'.toLocaleLowerCase('lt'), 'ja\uD834\uDD85', 'LATIN CAPITAL LETTER J followed by LATIN CAPITAL LETTER A, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('ĮA\uD834\uDD85'.toLocaleLowerCase('lt'), 'įa\uD834\uDD85', 'LATIN CAPITAL LETTER I WITH OGONEK (U+012E) followed by LATIN CAPITAL LETTER A, MUSICAL SYMBOL COMBINING DOIT');
    assert.sameValue('Ì'.toLocaleLowerCase('lt'), 'i̇̀', 'LATIN CAPITAL LETTER I WITH GRAVE');
    assert.sameValue('Í'.toLocaleLowerCase('lt'), 'i̇́', 'LATIN CAPITAL LETTER I WITH ACUTE');
    assert.sameValue('Ĩ'.toLocaleLowerCase('lt'), 'i̇̃', 'LATIN CAPITAL LETTER I WITH TILDE');
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