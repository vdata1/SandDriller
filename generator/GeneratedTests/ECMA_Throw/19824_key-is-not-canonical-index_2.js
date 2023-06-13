try {
    var keys = [
        '1.0',
        '+1',
        '1000000000000000000000',
        '0.0000001'
    ];
    var dataDesc = {
        value: 42,
        writable: true,
        configurable: true
    };
    var fnset = function () {
        let REPLACER = 23;
    };
    var fnget = function () {
        let REPLACER = 23;
    };
    var acDesc = {
        get: fnget,
        set: fnset,
        enumerable: true,
        configurable: false
    };
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        keys.forEach(function (key) {
            var sample1 = new TA();
            assert.sameValue(Reflect.defineProperty(sample1, key, dataDesc), true, 'return true after defining data property [' + key + ']');
            assert.sameValue(sample1[key], 42, 'value is set to [' + key + ']');
            verifyNotEnumerable(sample1, key);
            verifyWritable(sample1, key);
            verifyConfigurable(sample1, key);
            assert.sameValue(sample1[0], undefined, 'no value is set on sample1[0]');
            assert.sameValue(sample1.length, 0, 'length is still 0');
            var sample2 = new TA();
            assert.sameValue(Reflect.defineProperty(sample2, key, acDesc), true, 'return true after defining accessors property [' + key + ']');
            var desc = Object.getOwnPropertyDescriptor(sample2, key);
            verifyEnumerable(sample2, key);
            assert.sameValue(desc.get, fnget, 'accessor\'s get [' + key + ']');
            assert.sameValue(desc.set, fnset, 'accessor\'s set [' + key + ']');
            verifyNotConfigurable(sample2, key);
            assert.sameValue(sample2[0], undefined, 'no value is set on sample2[0]');
            assert.sameValue(sample2.length, 0, 'length is still 0');
            var sample3 = new TA();
            Object.preventExtensions(sample3);
            assert.sameValue(Reflect.defineProperty(sample3, key, dataDesc), false, 'return false defining property on a non-extensible sample');
            assert.sameValue(Object.getOwnPropertyDescriptor(sample3, key), undefined);
            var sample4 = new TA();
            Object.preventExtensions(sample4);
            assert.sameValue(Reflect.defineProperty(sample4, key, acDesc), false, 'return false defining property on a non-extensible sample');
            assert.sameValue(Object.getOwnPropertyDescriptor(sample4, key), undefined);
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