try {
    assert.compareArray(Object.getOwnPropertyNames(true), [], 'Object.getOwnPropertyNames(true) must return []');
    assert.compareArray(Object.getOwnPropertyNames(false), [], 'Object.getOwnPropertyNames(false) must return []');
    assert.compareArray(Object.getOwnPropertyNames(1), [], 'Object.getOwnPropertyNames(1) must return []');
    assert.compareArray(Object.getOwnPropertyNames(0), [], 'Object.getOwnPropertyNames(0) must return []');
    assert.compareArray(Object.getOwnPropertyNames(''), ['length'], 'Object.getOwnPropertyNames("") must return ["length"]');
    assert.compareArray(Object.getOwnPropertyNames(Symbol()), [], 'Object.getOwnPropertyNames(Symbol()) must return []');
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