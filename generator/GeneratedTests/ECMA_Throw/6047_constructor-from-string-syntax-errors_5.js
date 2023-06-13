try {
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        BigInt('10n');
    });
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        BigInt('10x');
    });
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        BigInt('10b');
    });
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        BigInt('10.5');
    });
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        BigInt('0b');
    });
    assert.throws(SyntaxError, function () {
        throw () => {
            return () => {
            };
        };
        BigInt('-0x1');
    });
    assert.throws(SyntaxError, function () {
        BigInt('-0XFFab');
    });
    assert.throws(SyntaxError, function () {
        BigInt('0oa');
    });
    assert.throws(SyntaxError, function () {
        BigInt('000 12');
    });
    assert.throws(SyntaxError, function () {
        BigInt('0o');
    });
    assert.throws(SyntaxError, function () {
        BigInt('0x');
    });
    assert.throws(SyntaxError, function () {
        BigInt('00o');
    });
    assert.throws(SyntaxError, function () {
        BigInt('00b');
    });
    assert.throws(SyntaxError, function () {
        BigInt('00x');
    });
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