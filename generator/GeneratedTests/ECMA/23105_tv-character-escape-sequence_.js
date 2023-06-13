try {
    var calls;
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\'', 'TV of NonEscapeCharacter');
        assert.sameValue(s.raw[0], '\\\'', 'TRV of NonEscapeCharacter');
    }`\'`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '"', 'TV of SingleEscapeCharacter (double quote)');
        assert.sameValue(s.raw[0], '\\"', 'TRV of SingleEscapeCharacter (double quote)');
    }`\"`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\\', 'TV of SingleEscapeCharacter (backslash)');
        assert.sameValue(s.raw[0], '\\\\', 'TRV of SingleEscapeCharacter (backslash)');
    }`\\`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\b', 'TV of SingleEscapeCharacter (backspace)');
        assert.sameValue(s.raw[0], '\\b', 'TRV of SingleEscapeCharacter (backspace)');
    }`\b`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\f', 'TV of SingleEscapeCharacter (form feed)');
        assert.sameValue(s.raw[0], '\\f', 'TRV of SingleEscapeCharacter (form feed)');
    }`\f`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\n', 'TV of SingleEscapeCharacter (new line)');
        assert.sameValue(s.raw[0], '\\n', 'TRV of SingleEscapeCharacter (new line)');
    }`\n`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\r', 'TV of SingleEscapeCharacter (carriage return)');
        assert.sameValue(s.raw[0], '\\r', 'TRV of SingleEscapeCharacter (carriage return)');
    }`\r`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\t', 'TV of SingleEscapeCharacter (tab)');
        assert.sameValue(s.raw[0], '\\t', 'TRV of SingleEscapeCharacter (tab)');
    }`\t`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '\x0B', 'TV of SingleEscapeCharacter (line tabulation)');
        assert.sameValue(s.raw[0], '\\v', 'TRV of SingleEscapeCharacter (line tabulation)');
    }`\v`);
    assert.sameValue(calls, 1);
    calls = 0;
    (function (s) {
        calls++;
        assert.sameValue(s[0], '`', 'TV of SingleEscapeCharacter (backtick)');
        assert.sameValue(s.raw[0], '\\`', 'TRV of SingleEscapeCharacter (backtick)');
    }`\``);
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