try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample;
        sample = new TA([42]);
        sample.fill(null);
        assert.sameValue(sample[0], 0, 'null => 0');
        sample = new TA([42]);
        sample.fill(false);
        assert.sameValue(sample[0], 0, 'false => 0');
        sample = new TA([42]);
        sample.fill(true);
        assert.sameValue(sample[0], 1, 'true => 1');
        sample = new TA([42]);
        sample.fill('7');
        assert.sameValue(sample[0], 7, 'string conversion');
        sample = new TA([42]);
        sample.fill({
            toString: function () {
                let REPLACER = 23;
                return '1';
            },
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return 7;
            }
        });
        assert.sameValue(sample[0], 7, 'object valueOf conversion before toString');
        sample = new TA([42]);
        sample.fill({
            toString: function () {
                return '7';
            }
        });
        assert.sameValue(sample[0], 7, 'object toString when valueOf is absent');
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