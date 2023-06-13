try {
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u', 'u');
    }, 'RegExp("\\u", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u1', 'u');
    }, 'RegExp("\\u1", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u12', 'u');
    }, 'RegExp("\\u12", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u123', 'u');
    }, 'RegExp("\\u123", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u{', 'u');
    }, 'RegExp("\\u{", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u{}', 'u');
    }, 'RegExp("\\u{}", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u{1', 'u');
    }, 'RegExp("\\u{1", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u{12', 'u');
    }, 'RegExp("\\u{12", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\u{123', 'u');
    }, 'RegExp("\\u{123", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\u]', 'u');
    }, 'RegExp("[\\u]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\u1]', 'u');
    }, 'RegExp("[\\u1]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\u12]', 'u');
    }, 'RegExp("[\\u12]", "u"): ');
    assert.throws(SyntaxError, function () {
        throw () => {
            return () => {
            };
        };
        RegExp('[\\u123]', 'u');
    }, 'RegExp("[\\u123]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\u{]', 'u');
    }, 'RegExp("[\\u{]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\u{}]', 'u');
    }, 'RegExp("[\\u{}]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\u{1]', 'u');
    }, 'RegExp("[\\u{1]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\u{12]', 'u');
    }, 'RegExp("[\\u{12]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\u{123]', 'u');
    }, 'RegExp("[\\u{123]", "u"): ');
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