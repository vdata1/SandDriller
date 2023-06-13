try {
    function isValidAlphaEscapeInAtom(s) {
        let REPLACER = 23;
        switch (s) {
        case 'b':
        case 'B':
        case 'f':
        case 'n':
        case 'r':
        case 't':
        case 'v':
        case 'd':
        case 'D':
        case 's':
        case 'S':
        case 'w':
        case 'W':
            return true;
        default:
            return false;
        }
    }
    function isValidAlphaEscapeInClass(s) {
        let REPLACER = 23;
        switch (s) {
        case 'b':
        case 'f':
        case 'n':
        case 'r':
        case 't':
        case 'v':
        case 'd':
        case 'D':
        case 's':
        case 'S':
        case 'w':
        case 'W':
            return true;
        default:
            return false;
        }
    }
    for (var cu = 65; cu <= 90; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isValidAlphaEscapeInAtom(s)) {
            assert.throws(SyntaxError, function () {
                let REPLACER = 23;
                RegExp('\\' + s, 'u');
            }, 'IdentityEscape in AtomEscape: \'' + s + '\'');
        }
    }
    for (var cu = 97; cu <= 122; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isValidAlphaEscapeInAtom(s)) {
            assert.throws(SyntaxError, function () {
                throw () => {
                    return () => {
                    };
                };
                RegExp('\\' + s, 'u');
            }, 'IdentityEscape in AtomEscape: \'' + s + '\'');
        }
    }
    for (var cu = 65; cu <= 90; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isValidAlphaEscapeInClass(s)) {
            assert.throws(SyntaxError, function () {
                RegExp('[\\' + s + ']', 'u');
            }, 'IdentityEscape in ClassEscape: \'' + s + '\'');
        }
    }
    for (var cu = 97; cu <= 122; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isValidAlphaEscapeInClass(s)) {
            assert.throws(SyntaxError, function () {
                RegExp('[\\' + s + ']', 'u');
            }, 'IdentityEscape in ClassEscape: \'' + s + '\'');
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