try {
    assert.sameValue('A\u180EΣ'.toLocaleLowerCase(), 'a\u180Eς', 'Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR');
    assert.sameValue('A\u180EΣB'.toLocaleLowerCase(), 'a\u180Eσb', 'Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR, followed by LATIN CAPITAL LETTER B');
    assert.sameValue('AΣ\u180E'.toLocaleLowerCase(), 'aς\u180E', 'Sigma preceded by LATIN CAPITAL LETTER A, followed by MONGOLIAN VOWEL SEPARATOR');
    assert.sameValue('AΣ\u180EB'.toLocaleLowerCase(), 'aσ\u180Eb', 'Sigma preceded by LATIN CAPITAL LETTER A, followed by MONGOLIAN VOWEL SEPARATOR, LATIN CAPITAL LETTER B');
    assert.sameValue('A\u180EΣ\u180E'.toLocaleLowerCase(), 'a\u180Eς\u180E', 'Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR, followed by MONGOLIAN VOWEL SEPARATOR');
    assert.sameValue('A\u180EΣ\u180EB'.toLocaleLowerCase(), 'a\u180Eσ\u180Eb', 'Sigma preceded by LATIN CAPITAL LETTER A, MONGOLIAN VOWEL SEPARATOR, followed by MONGOLIAN VOWEL SEPARATOR, LATIN CAPITAL LETTER B');
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