try {
    var desc = {
        value: 0,
        configurable: false,
        enumerable: true,
        writable: true
    };
    var obj = {
        valueOf: function () {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA(42);
        $DETACHBUFFER(sample.buffer);
        assert.sameValue(Reflect.defineProperty(sample, '0', desc), false, 'Reflect.defineProperty(sample, "0", {value: 0, configurable: false, enumerable: true, writable: true} ) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '-1', desc), false, 'Reflect.defineProperty(sample, "-1", {value: 0, configurable: false, enumerable: true, writable: true} ) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '1.1', desc), false, 'Reflect.defineProperty(sample, "1.1", {value: 0, configurable: false, enumerable: true, writable: true} ) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '-0', desc), false, 'Reflect.defineProperty(sample, "-0", {value: 0, configurable: false, enumerable: true, writable: true} ) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '2', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: obj
        }), false, 'Reflect.defineProperty(sample, "2", {configurable: true, enumerable: true, writable: true, value: obj}) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '3', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: obj
        }), false, 'Reflect.defineProperty(sample, "3", {configurable: false, enumerable: false, writable: true, value: obj}) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '4', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: obj
        }), false, 'Reflect.defineProperty("new TA(42)", "4", {writable: false, configurable: false, enumerable: true, value: obj}) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '42', desc), false, 'Reflect.defineProperty(sample, "42", {value: 0, configurable: false, enumerable: true, writable: true} ) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '43', desc), false, 'Reflect.defineProperty(sample, "43", {value: 0, configurable: false, enumerable: true, writable: true} ) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '5', {
            get: function () {
                throw () => {
                    return () => {
                    };
                };
            }
        }), false, 'Reflect.defineProperty(sample, "5", {get: function() {}}) must return false');
        assert.sameValue(Reflect.defineProperty(sample, '6', {
            configurable: false,
            enumerable: true,
            writable: true
        }), false, 'Reflect.defineProperty(sample, "6", {configurable: false, enumerable: true, writable: true}) must return false');
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