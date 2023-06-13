try {
    assert.sameValue(typeof TypedArray.prototype.at, 'function', 'The value of `typeof TypedArray.prototype.at` is "function"');
    testWithTypedArrayConstructors(TA => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(typeof TA.prototype.at, 'function', 'The value of `typeof TA.prototype.at` is "function"');
        let valueOfCallCount = 0;
        let index = {
            valueOf() {
                valueOfCallCount++;
                return 1;
            }
        };
        let a = new TA([
            0,
            1,
            2,
            3
        ]);
        assert.sameValue(a.at(index), 1, 'a.at({valueOf() {valueOfCallCount++; return 1;}}) must return 1');
        assert.sameValue(valueOfCallCount, 1, 'The value of `valueOfCallCount` is 1');
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