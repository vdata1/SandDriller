try {
    var set = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    var subject = {};
    assert.sameValue(set.call(subject, true), undefined, 'boolean');
    assert.sameValue(Object.getPrototypeOf(subject), Object.prototype, 'following boolean');
    assert.sameValue(set.call(subject, 1), undefined, 'number');
    assert.sameValue(Object.getPrototypeOf(subject), Object.prototype, 'following number');
    assert.sameValue(set.call(subject, 'string'), undefined, 'string');
    assert.sameValue(Object.getPrototypeOf(subject), Object.prototype, 'following string');
    assert.sameValue(set.call(subject, Symbol('')), undefined, 'symbol');
    assert.sameValue(Object.getPrototypeOf(subject), Object.prototype, 'following symbol');
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