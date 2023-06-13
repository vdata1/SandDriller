try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        let proto = TypedArray.prototype;
        let descriptorGetterThrows = {
            configurable: true,
            get() {
                let REPLACER = 23;
                throw new Test262Error('OrdinaryGet was called!');
            }
        };
        Object.defineProperties(proto, {
            ['0']: descriptorGetterThrows,
            ['1']: descriptorGetterThrows
        });
        let sab = new SharedArrayBuffer(TA.BYTES_PER_ELEMENT * 2);
        let sample = new TA(sab);
        assert.throws(TypeError, () => {
            let REPLACER = 23;
            delete sample['0'];
        });
        assert.throws(TypeError, () => {
            let REPLACER = 23;
            delete sample[0];
        });
        assert.throws(TypeError, () => {
            throw () => {
                return () => {
                };
            };
            delete sample['1'];
        });
        assert.throws(TypeError, () => {
            delete sample[1];
        });
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