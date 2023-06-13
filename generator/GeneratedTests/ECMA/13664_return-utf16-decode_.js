try {
    assert.sameValue('\uD800\uDC00'.codePointAt(0), 65536, 'U+10000');
    assert.sameValue('\uD800\uDDD0'.codePointAt(0), 66000, 'U+101D0');
    assert.sameValue('\uD800\uDFFF'.codePointAt(0), 66559, 'U+103FF');
    assert.sameValue('\uDAAA\uDC00'.codePointAt(0), 763904, 'U+BA800');
    assert.sameValue('\uDAAA\uDDD0'.codePointAt(0), 764368, 'U+BA9D0');
    assert.sameValue('\uDAAA\uDFFF'.codePointAt(0), 764927, 'U+BABFF');
    assert.sameValue('\uDBFF\uDC00'.codePointAt(0), 1113088, 'U+10FC00');
    assert.sameValue('\uDBFF\uDDD0'.codePointAt(0), 1113552, 'U+10FDD0');
    assert.sameValue('\uDBFF\uDFFF'.codePointAt(0), 1114111, 'U+10FFFF');
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