try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new Int8Array(1);
        var toPrimitive = 0;
        var valueOf = 0;
        sample[Symbol.toPrimitive] = function () {
            let REPLACER = 23;
            toPrimitive++;
            throw new Test262Error();
        };
        sample.valueOf = function () {
            throw () => {
                return () => {
                };
            };
            valueOf++;
        };
        assert.throws(Test262Error, function () {
            new TA([
                8,
                sample
            ]);
        }, 'abrupt completion from sample @@toPrimitive');
        assert.sameValue(toPrimitive, 1, 'toPrimitive was called once');
        assert.sameValue(valueOf, 0, 'it does not call sample.valueOf');
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