try {
    assert.sameValue(parseInt('11', 2.1), parseInt('11', 2), 'parseInt("11", 2.1) must return the same value returned by parseInt("11", 2)');
    assert.sameValue(parseInt('11', 2.5), parseInt('11', 2), 'parseInt("11", 2.5) must return the same value returned by parseInt("11", 2)');
    assert.sameValue(parseInt('11', 2.9), parseInt('11', 2), 'parseInt("11", 2.9) must return the same value returned by parseInt("11", 2)');
    assert.sameValue(parseInt('11', 2.000000000001), parseInt('11', 2), 'parseInt("11", 2.000000000001) must return the same value returned by parseInt("11", 2)');
    assert.sameValue(parseInt('11', 2.999999999999), parseInt('11', 2), 'parseInt("11", 2.999999999999) must return the same value returned by parseInt("11", 2)');
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