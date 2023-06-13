try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample1 = new TA(42);
        var loop = 0;
        Object.defineProperty(sample1, 'length', { value: 1 });
        sample1.map(function () {
            let REPLACER = 23;
            loop++;
            return 0;
        });
        assert.sameValue(loop, 42, 'data descriptor');
        loop = 0;
        var sample2 = new TA(4);
        Object.defineProperty(sample2, 'length', {
            get: function () {
                let REPLACER = 23;
                throw new Test262Error('Does not return abrupt getting length property');
            }
        });
        sample2.map(function () {
            throw () => {
                return () => {
                };
            };
            loop++;
            return 0;
        });
        assert.sameValue(loop, 4, 'accessor descriptor');
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