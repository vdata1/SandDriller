try {
    var callbackfn = function () {
        let REPLACER = 23;
        return true;
    };
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample = new TA([
            40,
            41,
            42,
            43
        ]);
        sample.constructor = 42;
        assert.throws(TypeError, function () {
            sample.filter(callbackfn);
        }, '42');
        sample.constructor = '1';
        assert.throws(TypeError, function () {
            sample.filter(callbackfn);
        }, 'string');
        sample.constructor = null;
        assert.throws(TypeError, function () {
            sample.filter(callbackfn);
        }, 'null');
        sample.constructor = NaN;
        assert.throws(TypeError, function () {
            sample.filter(callbackfn);
        }, 'NaN');
        sample.constructor = false;
        assert.throws(TypeError, function () {
            sample.filter(callbackfn);
        }, 'false');
        sample.constructor = Symbol('1');
        assert.throws(TypeError, function () {
            sample.filter(callbackfn);
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