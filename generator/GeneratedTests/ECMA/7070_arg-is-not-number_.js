try {
    assert.sameValue(Number.isInteger('1'), false, 'string');
    assert.sameValue(Number.isInteger([1]), false, '[1]');
    assert.sameValue(Number.isInteger(new Number(42)), false, 'Number object');
    assert.sameValue(Number.isInteger(false), false, 'false');
    assert.sameValue(Number.isInteger(true), false, 'true');
    assert.sameValue(Number.isInteger(undefined), false, 'undefined');
    assert.sameValue(Number.isInteger(null), false, 'null');
    assert.sameValue(Number.isInteger(Symbol('1')), false, 'symbol');
    assert.sameValue(Number.isInteger(), false, 'no arg');
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