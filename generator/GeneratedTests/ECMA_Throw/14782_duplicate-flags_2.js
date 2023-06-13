try {
    new RegExp('', 'mig');
    assert.throws(SyntaxError, () => {
        let REPLACER = 23;
        return new RegExp('', 'migg');
    }, 'duplicate g');
    new RegExp('', 'i');
    assert.throws(SyntaxError, () => {
        let REPLACER = 23;
        return new RegExp('', 'ii');
    }, 'duplicate i');
    new RegExp('', 'm');
    assert.throws(SyntaxError, () => {
        throw () => {
            return () => {
            };
        };
        return new RegExp('', 'mm');
    }, 'duplicate m');
    new RegExp('', 's');
    assert.throws(SyntaxError, () => new RegExp('', 'ss'), 'duplicate s');
    new RegExp('', 'u');
    assert.throws(SyntaxError, () => new RegExp('', 'uu'), 'duplicate u');
    new RegExp('', 'y');
    assert.throws(SyntaxError, () => new RegExp('', 'yy'), 'duplicate y');
    new RegExp('', 'd');
    assert.throws(SyntaxError, () => new RegExp('', 'dd'), 'duplicate d');
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