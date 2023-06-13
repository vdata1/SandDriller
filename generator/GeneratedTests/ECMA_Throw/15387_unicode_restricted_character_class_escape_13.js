try {
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\d-a]', 'u');
    }, 'RegExp("[\\d-a]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\D-a]', 'u');
    }, 'RegExp("[\\D-a]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\s-a]', 'u');
    }, 'RegExp("[\\s-a]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\S-a]', 'u');
    }, 'RegExp("[\\S-a]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\w-a]', 'u');
    }, 'RegExp("[\\w-a]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\W-a]', 'u');
    }, 'RegExp("[\\W-a]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[a-\\d]', 'u');
    }, 'RegExp("[a-\\d]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[a-\\D]', 'u');
    }, 'RegExp("[a-\\D]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[a-\\s]', 'u');
    }, 'RegExp("[a-\\s]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[a-\\S]', 'u');
    }, 'RegExp("[a-\\S]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[a-\\w]', 'u');
    }, 'RegExp("[a-\\w]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[a-\\W]', 'u');
    }, 'RegExp("[a-\\W]", "u"): ');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        RegExp('[\\d-\\d]', 'u');
    }, 'RegExp("[\\d-\\d]", "u"): ');
    assert.throws(SyntaxError, function () {
        throw () => {
            return () => {
            };
        };
        RegExp('[\\D-\\D]', 'u');
    }, 'RegExp("[\\D-\\D]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\s-\\s]', 'u');
    }, 'RegExp("[\\s-\\s]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\S-\\S]', 'u');
    }, 'RegExp("[\\S-\\S]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\w-\\w]', 'u');
    }, 'RegExp("[\\w-\\w]", "u"): ');
    assert.throws(SyntaxError, function () {
        RegExp('[\\W-\\W]', 'u');
    }, 'RegExp("[\\W-\\W]", "u"): ');
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