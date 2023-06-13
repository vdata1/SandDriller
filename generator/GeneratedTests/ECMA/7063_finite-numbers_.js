try {
    assert.sameValue(Number.isFinite(-10), true, '-10');
    assert.sameValue(Number.isFinite(-0), true, '-0');
    assert.sameValue(Number.isFinite(0), true, '0');
    assert.sameValue(Number.isFinite(10), true, '10');
    assert.sameValue(Number.isFinite(10000000000), true, '1e10');
    assert.sameValue(Number.isFinite(10.1), true, '10.10');
    assert.sameValue(Number.isFinite(9007199254740991), true, '9007199254740991');
    assert.sameValue(Number.isFinite(-9007199254740991), true, '-9007199254740991');
    assert.sameValue(Number.isFinite(Number.MAX_VALUE), true, 'Number.MAX_VALUE');
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