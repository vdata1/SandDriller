try {
    assert.sameValue('Σ'.toLowerCase(), 'σ', 'Single GREEK CAPITAL LETTER SIGMA');
    assert.sameValue('AΣ'.toLowerCase(), 'aς', 'Sigma preceded by LATIN CAPITAL LETTER A');
    assert.sameValue('\uD835\uDCA2Σ'.toLowerCase(), '\uD835\uDCA2ς', 'Sigma preceded by MATHEMATICAL SCRIPT CAPITAL G (D835 DCA2 = 1D4A2)');
    assert.sameValue('A.Σ'.toLowerCase(), 'a.ς', 'Sigma preceded by FULL STOP');
    assert.sameValue('A\xADΣ'.toLowerCase(), 'a\xADς', 'Sigma preceded by SOFT HYPHEN (00AD)');
    assert.sameValue('A\uD834\uDE42Σ'.toLowerCase(), 'a\uD834\uDE42ς', 'Sigma preceded by COMBINING GREEK MUSICAL TRISEME (D834 DE42 = 1D242)');
    assert.sameValue('ͅΣ'.toLowerCase(), 'ͅσ', 'Sigma preceded by COMBINING GREEK YPOGEGRAMMENI (0345)');
    assert.sameValue('ᾼΣ'.toLowerCase(), 'ᾳς', 'Sigma preceded by GREEK CAPITAL LETTER ALPHA (0391), COMBINING GREEK YPOGEGRAMMENI (0345)');
    assert.sameValue('AΣB'.toLowerCase(), 'aσb', 'Sigma followed by LATIN CAPITAL LETTER B');
    assert.sameValue('AΣ\uD835\uDCA2'.toLowerCase(), 'aσ\uD835\uDCA2', 'Sigma followed by MATHEMATICAL SCRIPT CAPITAL G (D835 DCA2 = 1D4A2)');
    assert.sameValue('AΣ.b'.toLowerCase(), 'aσ.b', 'Sigma followed by FULL STOP');
    assert.sameValue('AΣ\xADB'.toLowerCase(), 'aσ\xADb', 'Sigma followed by SOFT HYPHEN (00AD)');
    assert.sameValue('AΣ\uD834\uDE42B'.toLowerCase(), 'aσ\uD834\uDE42b', 'Sigma followed by COMBINING GREEK MUSICAL TRISEME (D834 DE42 = 1D242)');
    assert.sameValue('AΣͅ'.toLowerCase(), 'aςͅ', 'Sigma followed by COMBINING GREEK YPOGEGRAMMENI (0345)');
    assert.sameValue('AΣͅΑ'.toLowerCase(), 'aσͅα', 'Sigma followed by COMBINING GREEK YPOGEGRAMMENI (0345), GREEK CAPITAL LETTER ALPHA (0391)');
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