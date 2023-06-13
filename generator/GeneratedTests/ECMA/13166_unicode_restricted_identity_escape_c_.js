try {
    function isAlpha(c) {
        return 'A' <= c && c <= 'Z' || 'a' <= c && c <= 'z';
    }
    assert.throws(SyntaxError, function () {
        RegExp('\\c', 'u');
    });
    for (var cu = 0; cu <= 127; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isAlpha(s)) {
            assert.throws(SyntaxError, function () {
                RegExp('\\c' + s, 'u');
            }, 'ControlLetter escape in AtomEscape: \'' + s + '\'');
        }
    }
    assert.throws(SyntaxError, function () {
        RegExp('[\\c]', 'u');
    });
    for (var cu = 0; cu <= 127; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isAlpha(s)) {
            assert.throws(SyntaxError, function () {
                RegExp('[\\c' + s + ']', 'u');
            }, 'ControlLetter escape in ClassEscape: \'' + s + '\'');
        }
    }
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