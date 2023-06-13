try {
    assert.sameValue(Object.keys(Object.getOwnPropertyDescriptors(0)).length, 0, '0 has zero descriptors');
    assert.sameValue(Object.keys(Object.getOwnPropertyDescriptors(-0)).length, 0, '-0 has zero descriptors');
    assert.sameValue(Object.keys(Object.getOwnPropertyDescriptors(Infinity)).length, 0, 'Infinity has zero descriptors');
    assert.sameValue(Object.keys(Object.getOwnPropertyDescriptors(-Infinity)).length, 0, '-Infinity has zero descriptors');
    assert.sameValue(Object.keys(Object.getOwnPropertyDescriptors(NaN)).length, 0, 'NaN has zero descriptors');
    assert.sameValue(Object.keys(Object.getOwnPropertyDescriptors(Math.PI)).length, 0, 'Math.PI has zero descriptors');
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