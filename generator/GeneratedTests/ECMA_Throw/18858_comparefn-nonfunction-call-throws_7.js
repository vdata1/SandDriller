try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            42,
            43,
            44,
            45,
            46
        ]);
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.sort(null);
        });
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.sort(true);
        });
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.sort(false);
        });
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.sort('');
        });
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.sort(/a/g);
        });
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.sort(42);
        });
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            sample.sort([]);
        });
        assert.throws(TypeError, function () {
            sample.sort({});
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