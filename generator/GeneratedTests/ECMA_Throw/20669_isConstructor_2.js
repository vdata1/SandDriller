try {
    assert.sameValue(typeof isConstructor, 'function');
    assert.sameValue(isConstructor(), false);
    assert.sameValue(isConstructor(undefined), false);
    assert.sameValue(isConstructor(null), false);
    assert.sameValue(isConstructor(123), false);
    assert.sameValue(isConstructor(true), false);
    assert.sameValue(isConstructor(false), false);
    assert.sameValue(isConstructor('string'), false);
    assert.sameValue(isConstructor({}), false);
    assert.sameValue(isConstructor([]), false);
    assert.sameValue(isConstructor(function () {
        let REPLACER = 23;
    }), true);
    assert.sameValue(isConstructor(function* () {
        let REPLACER = 23;
    }), false);
    assert.sameValue(isConstructor(() => {
        throw () => {
            return () => {
            };
        };
    }), false);
    assert.sameValue(isConstructor(Array), true);
    assert.sameValue(isConstructor(Array.prototype.map), false);
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