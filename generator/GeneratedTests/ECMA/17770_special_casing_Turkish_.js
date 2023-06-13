try {
    assert.sameValue('İ'.toLocaleLowerCase('tr'), 'i', 'LATIN CAPITAL LETTER I WITH DOT ABOVE');
    assert.sameValue('İ'.toLocaleLowerCase('tr'), 'i', 'LATIN CAPITAL LETTER I followed by COMBINING DOT ABOVE');
    assert.sameValue('Ị̇'.toLocaleLowerCase('tr'), 'ị', 'LATIN CAPITAL LETTER I followed by COMBINING DOT BELOW, COMBINING DOT ABOVE');
    assert.sameValue('I\uD800\uDDFḊ'.toLocaleLowerCase('tr'), 'i\uD800\uDDFD', 'LATIN CAPITAL LETTER I followed by PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE, COMBINING DOT ABOVE');
    assert.sameValue('IȦ'.toLocaleLowerCase('tr'), 'ıȧ', 'LATIN CAPITAL LETTER I followed by LATIN CAPITAL LETTER A, COMBINING DOT ABOVE');
    assert.sameValue('Ì̇'.toLocaleLowerCase('tr'), 'ı̀̇', 'LATIN CAPITAL LETTER I followed by COMBINING GRAVE ACCENT, COMBINING DOT ABOVE');
    assert.sameValue('I\uD834\uDD85̇'.toLocaleLowerCase('tr'), 'ı\uD834\uDD85̇', 'LATIN CAPITAL LETTER I followed by MUSICAL SYMBOL COMBINING DOIT, COMBINING DOT ABOVE');
    assert.sameValue('I'.toLocaleLowerCase('tr'), 'ı', 'LATIN CAPITAL LETTER I');
    assert.sameValue('i'.toLocaleLowerCase('tr'), 'i', 'LATIN SMALL LETTER I');
    assert.sameValue('ı'.toLocaleLowerCase('tr'), 'ı', 'LATIN SMALL LETTER DOTLESS I');
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