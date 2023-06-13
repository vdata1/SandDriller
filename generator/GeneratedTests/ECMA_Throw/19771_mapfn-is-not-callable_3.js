try {
    var getIterator = 0;
    var arrayLike = {};
    Object.defineProperty(arrayLike, Symbol.iterator, {
        get: function () {
            let REPLACER = 23;
            getIterator++;
        }
    });
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            TA.from(arrayLike, null);
        }, 'mapfn is null');
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            TA.from(arrayLike, 42);
        }, 'mapfn is a number');
        assert.throws(TypeError, function () {
            TA.from(arrayLike, '');
        }, 'mapfn is a string');
        assert.throws(TypeError, function () {
            TA.from(arrayLike, {});
        }, 'mapfn is an ordinary object');
        assert.throws(TypeError, function () {
            TA.from(arrayLike, []);
        }, 'mapfn is an array');
        assert.throws(TypeError, function () {
            TA.from(arrayLike, true);
        }, 'mapfn is a boolean');
        var s = Symbol('1');
        assert.throws(TypeError, function () {
            TA.from(arrayLike, s);
        }, 'mapfn is a symbol');
        assert.sameValue(getIterator, 0, 'IsCallable(mapfn) check occurs before getting source[@@iterator]');
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