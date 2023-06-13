try {
    for (var cu = 0; cu <= 65535; ++cu) {
        var Elimination = cu === 42 || cu === 47 || cu === 92 || cu === 43 || cu === 63 || cu === 40 || cu === 41 || cu === 91 || cu === 93 || cu === 123 || cu === 125;
        var LineTerminator = cu === 10 || cu === 13 || cu === 8232 || cu === 8233;
        if ((Elimination || LineTerminator) === false) {
            var xx = '\\' + String.fromCharCode(cu);
            try {
                var pattern = eval('/' + xx + '/');
            } catch (e) {
                var identifierPartNotUnicodeIDContinue = cu === 36 || cu === 8204 || cu === 8205;
                if (e instanceof SyntaxError && !identifierPartNotUnicodeIDContinue) {
                    try {
                        eval('var _' + String.fromCharCode(cu));
                        continue;
                    } catch (ignore) {
                    }
                }
                throw e;
            }
            assert.sameValue(pattern.source, xx, 'Code unit: ' + cu.toString(16));
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