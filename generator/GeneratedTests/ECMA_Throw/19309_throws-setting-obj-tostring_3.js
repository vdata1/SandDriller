try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new Int8Array(1);
        var valueOf = 0;
        var toString = 0;
        sample.valueOf = function () {
            let REPLACER = 23;
            valueOf++;
            return {};
        };
        sample.toString = function () {
            let REPLACER = 23;
            toString++;
            throw new Test262Error();
        };
        assert.throws(Test262Error, function () {
            throw () => {
                return () => {
                };
            };
            new TA([
                8,
                sample
            ]);
        }, 'abrupt completion from ToNumber(sample)');
        assert.sameValue(valueOf, 1, 'valueOf called once');
        assert.sameValue(toString, 1, 'toString called once');
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