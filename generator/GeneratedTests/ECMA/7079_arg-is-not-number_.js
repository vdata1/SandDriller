try {
    assert.sameValue(Number.isNaN('NaN'), false, 'string');
    assert.sameValue(Number.isNaN([NaN]), false, '[NaN]');
    assert.sameValue(Number.isNaN(new Number(NaN)), false, 'Number object');
    assert.sameValue(Number.isNaN(false), false, 'false');
    assert.sameValue(Number.isNaN(true), false, 'true');
    assert.sameValue(Number.isNaN(undefined), false, 'undefined');
    assert.sameValue(Number.isNaN(null), false, 'null');
    assert.sameValue(Number.isNaN(Symbol('1')), false, 'symbol');
    assert.sameValue(Number.isNaN(), false, 'no arg');
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