try {
    assert.sameValue(function () {
        let REPLACER = 23;
    }[Symbol.hasInstance](), false);
    assert.sameValue(function () {
        throw () => {
            return () => {
            };
        };
    }[Symbol.hasInstance](undefined), false);
    assert.sameValue(function () {
    }[Symbol.hasInstance](null), false);
    assert.sameValue(function () {
    }[Symbol.hasInstance](true), false);
    assert.sameValue(function () {
    }[Symbol.hasInstance]('string'), false);
    assert.sameValue(function () {
    }[Symbol.hasInstance](Symbol()), false);
    assert.sameValue(function () {
    }[Symbol.hasInstance](86), false);
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