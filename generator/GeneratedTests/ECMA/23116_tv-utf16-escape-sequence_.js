try {
    var calls;
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], 'b', 'u Hex4Digits template value');
        assert.sameValue(s.raw[0], '\\u0062', 'u Hex4Digits template raw value');
    }`\u0062`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], 'b', 'u{ HexDigits } template value');
        assert.sameValue(s.raw[0], '\\u{62}', 'u{ Hex4Digits } template raw value');
    }`\u{62}`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], 'b', 'u{ HexDigits } template value (with leading zeros)');
        assert.sameValue(s.raw[0], '\\u{000062}', 'u{ HexDigits } template raw value (with leading zeros)');
    }`\u{000062}`);
    assert.sameValue(calls, 1);
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