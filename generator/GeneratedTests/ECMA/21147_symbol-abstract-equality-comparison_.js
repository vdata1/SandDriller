try {
    var symA = Symbol('66');
    var symB = Symbol('66');
    assert.sameValue(symA == symA, true, 'The result of `symA == symA` is `true`');
    assert.sameValue(symA == symA.valueOf(), true, 'The result of `symA == symA.valueOf()` is `true`');
    assert.sameValue(symA.valueOf() == symA, true, 'The result of `symA.valueOf() == symA` is `true`');
    assert.sameValue(symB == symB, true, 'The result of `symB == symB` is `true`');
    assert.sameValue(symB == symB.valueOf(), true, 'The result of `symB == symB.valueOf()` is `true`');
    assert.sameValue(symB.valueOf() == symB, true, 'The result of `symB.valueOf() == symB` is `true`');
    assert.sameValue(symA == symB, false, 'The result of `symA == symB` is `false`');
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