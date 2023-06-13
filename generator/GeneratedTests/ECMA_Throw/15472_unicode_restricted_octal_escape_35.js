try {
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\1', 'u');
    }, 'RegExp("\\1", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\2', 'u');
    }, 'RegExp("\\2", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\3', 'u');
    }, 'RegExp("\\3", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\4', 'u');
    }, 'RegExp("\\4", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\5', 'u');
    }, 'RegExp("\\5", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\6', 'u');
    }, 'RegExp("\\6", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\7', 'u');
    }, 'RegExp("\\7", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\8', 'u');
    }, 'RegExp("\\8", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\9', 'u');
    }, 'RegExp("\\9", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\1]', 'u');
    }, 'RegExp("[\\1]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\2]', 'u');
    }, 'RegExp("[\\2]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\3]', 'u');
    }, 'RegExp("[\\3]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\4]', 'u');
    }, 'RegExp("[\\4]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\5]', 'u');
    }, 'RegExp("[\\5]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\6]', 'u');
    }, 'RegExp("[\\6]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\7]', 'u');
    }, 'RegExp("[\\7]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\8]', 'u');
    }, 'RegExp("[\\8]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\9]', 'u');
    }, 'RegExp("[\\9]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\00', 'u');
    }, 'RegExp("\\00", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\01', 'u');
    }, 'RegExp("\\01", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\02', 'u');
    }, 'RegExp("\\02", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\03', 'u');
    }, 'RegExp("\\03", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\04', 'u');
    }, 'RegExp("\\04", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\05', 'u');
    }, 'RegExp("\\05", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\06', 'u');
    }, 'RegExp("\\06", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\07', 'u');
    }, 'RegExp("\\07", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\08', 'u');
    }, 'RegExp("\\08", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('\\09', 'u');
    }, 'RegExp("\\09", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\00]', 'u');
    }, 'RegExp("[\\00]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\01]', 'u');
    }, 'RegExp("[\\01]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\02]', 'u');
    }, 'RegExp("[\\02]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\03]', 'u');
    }, 'RegExp("[\\03]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\04]', 'u');
    }, 'RegExp("[\\04]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\05]', 'u');
    }, 'RegExp("[\\05]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\06]', 'u');
    }, 'RegExp("[\\06]", "u"): ');
    assert.throws(SyntaxError, function () {
        throw () => {
            return () => {
            };
        };
        RegExp('[\\07]', 'u');
    }, 'RegExp("[\\07]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\08]', 'u');
    }, 'RegExp("[\\08]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\09]', 'u');
    }, 'RegExp("[\\09]", "u"): ');
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