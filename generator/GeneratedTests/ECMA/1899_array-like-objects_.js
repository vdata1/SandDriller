try {
    function fn(e) {
        return [
            39,
            e * 2
        ];
    }
    var a;
    var actual;
    a = {
        length: 3,
        0: 1,
        2: 21,
        get 3() {
            throw 'it should not get this property';
        }
    };
    actual = [].flatMap.call(a, fn);
    assert.compareArray(actual, [
        39,
        2,
        39,
        42
    ], 'array-like flattened object, number length');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype, 'returned object is an array #1');
    a = {
        length: undefined,
        get 0() {
            throw 'it should not get this property';
        }
    };
    actual = [].flatMap.call(a, fn);
    assert.compareArray(actual, [], 'array-like objects; undefined length');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype, 'returned object is an array #2');
    var called = false;
    a = {
        get length() {
            if (!called) {
                called = true;
                return 2;
            } else {
                throw 'is should get the length only once';
            }
        },
        0: 21,
        1: 19.5,
        get 2() {
            throw 'it should not get this property';
        }
    };
    actual = [].flatMap.call(a, fn);
    assert.compareArray(actual, [
        39,
        42,
        39,
        39
    ], 'array-like flattened objects; custom get length');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype, 'returned object is an array #3');
    a = {
        length: 10001,
        [10000]: 7
    };
    actual = [].flatMap.call(a, fn);
    assert.compareArray(actual, [
        39,
        14
    ], 'array-like flattened object, long length simulating shallow array');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype, 'returned object is an array #4');
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