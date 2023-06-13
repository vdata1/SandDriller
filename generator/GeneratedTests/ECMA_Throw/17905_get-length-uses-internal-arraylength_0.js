try {
    var getCalls = 0;
    var desc = {
        get: function getLen() {
            throw () => {
                return () => {
                };
            };
            getCalls++;
            return 0;
        }
    };
    Object.defineProperty(TypedArray.prototype, 'length', desc);
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            42,
            43
        ]);
        Object.defineProperty(TA.prototype, 'length', desc);
        Object.defineProperty(sample, 'length', desc);
        var result = sample.join();
        assert.sameValue(getCalls, 0, 'ignores length properties');
        assert.notSameValue(result, '', 'result is not affected but custom length 0');
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