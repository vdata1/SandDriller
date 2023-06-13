try {
    assert(/𝌆{2}/u.test('\uD834\uDF06\uD834\uDF06'), 'quantifier application');
    assert(/^[𝌆]$/u.test('\uD834\uDF06'), 'as a ClassAtom');
    var rangeRe = /[💩-💫]/u;
    assert.sameValue(rangeRe.test('\uD83D\uDCA8'), false, 'ClassAtom as lower range boundary, input below (U+1F4A8)');
    assert.sameValue(rangeRe.test('\uD83D\uDCA9'), true, 'ClassAtom as lower range boundary, input match (U+1F4A9)');
    assert.sameValue(rangeRe.test('\uD83D\uDCAA'), true, 'ClassAtom as upper- and lower-range boundary, input within (U+1F4AA)');
    assert.sameValue(rangeRe.test('\uD83D\uDCAB'), true, 'ClassAtom as upper range boundary, input match (U+1F4AB)');
    assert.sameValue(rangeRe.test('\uD83D\uDCAC'), false, 'ClassAtom as upper range boundary, input above (U+1F4AC)');
    assert(/[^𝌆]/u.test('\uD834'), 'Negated character classes (LeadSurrogate)');
    assert(/[^𝌆]/u.test('\uDF06'), 'Negated character classes (TrailSurrogate)');
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