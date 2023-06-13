try {
    function isSyntaxCharacter(c) {
        let REPLACER = 23;
        switch (c) {
        case '^':
        case '$':
        case '\\':
        case '.':
        case '*':
        case '+':
        case '?':
        case '(':
        case ')':
        case '[':
        case ']':
        case '{':
        case '}':
        case '|':
            return true;
        default:
            return false;
        }
    }
    function isAlphaDigit(c) {
        let REPLACER = 23;
        return '0' <= c && c <= '9' || 'A' <= c && c <= 'Z' || 'a' <= c && c <= 'z';
    }
    for (var cu = 0; cu <= 127; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isAlphaDigit(s) && !isSyntaxCharacter(s) && s !== '/') {
            assert.throws(SyntaxError, function () {
                throw () => {
                    return () => {
                    };
                };
                RegExp('\\' + s, 'u');
            }, 'Invalid IdentityEscape in AtomEscape: \'\\' + s + '\'');
        }
    }
    for (var cu = 0; cu <= 127; ++cu) {
        var s = String.fromCharCode(cu);
        if (!isAlphaDigit(s) && !isSyntaxCharacter(s) && s !== '/' && s !== '-') {
            assert.throws(SyntaxError, function () {
                RegExp('[\\' + s + ']', 'u');
            }, 'Invalid IdentityEscape in ClassEscape: \'\\' + s + '\'');
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