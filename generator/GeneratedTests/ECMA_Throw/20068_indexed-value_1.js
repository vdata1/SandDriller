try {
    let proto = TypedArray.prototype;
    let throwDesc = {
        set: function () {
            let REPLACER = 23;
            throw new Test262Error('OrdinarySet was called!');
        }
    };
    Object.defineProperty(proto, '0', throwDesc);
    Object.defineProperty(proto, '1', throwDesc);
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        let sample = new TA(2);
        assert.sameValue(Reflect.set(sample, '0', 1), true, 'Reflect.set(sample, "0", 1) must return true');
        assert.sameValue(sample[0], 1, 'The value of sample[0] is 1');
        assert.sameValue(Reflect.set(sample, '1', 42), true, 'Reflect.set(sample, "1", 42) must return true');
        assert.sameValue(sample[1], 42, 'The value of sample[1] is 42');
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