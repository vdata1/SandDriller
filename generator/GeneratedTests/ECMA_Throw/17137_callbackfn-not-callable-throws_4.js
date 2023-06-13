try {
    testWithBigIntTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA(2);
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.every();
        }, 'no args');
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.every(null);
        }, 'null');
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            sample.every(undefined);
        }, 'undefined');
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            sample.every('abc');
        }, 'string');
        assert.throws(TypeError, function () {
            sample.every(1);
        }, 'number');
        assert.throws(TypeError, function () {
            sample.every(NaN);
        }, 'NaN');
        assert.throws(TypeError, function () {
            sample.every(false);
        }, 'false');
        assert.throws(TypeError, function () {
            sample.every(true);
        }, 'true');
        assert.throws(TypeError, function () {
            sample.every({});
        }, '{}');
        assert.throws(TypeError, function () {
            sample.every(sample);
        }, 'same typedArray instance');
        assert.throws(TypeError, function () {
            sample.every(Symbol('1'));
        }, 'symbol');
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