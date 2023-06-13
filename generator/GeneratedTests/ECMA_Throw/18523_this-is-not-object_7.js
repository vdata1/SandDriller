try {
    var set = TypedArray.prototype.set;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call(undefined, []);
    }, 'this is undefined');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call(null, []);
    }, 'this is null');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call(undefined, new Int8Array());
    }, 'this is undefined');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call(null, new Int8Array());
    }, 'this is null');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call(42, []);
    }, 'this is 42');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call('1', []);
    }, 'this is a string');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call(true, []);
    }, 'this is true');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        set.call(false, []);
    }, 'this is false');
    var s1 = Symbol('s');
    assert.throws(TypeError, function () {
        set.call(s1, []);
    }, 'this is a Symbol');
    assert.throws(TypeError, function () {
        set.call(42, new Int8Array(1));
    }, 'this is 42');
    assert.throws(TypeError, function () {
        set.call('1', new Int8Array(1));
    }, 'this is a string');
    assert.throws(TypeError, function () {
        set.call(true, new Int8Array(1));
    }, 'this is true');
    assert.throws(TypeError, function () {
        set.call(false, new Int8Array(1));
    }, 'this is false');
    var s2 = Symbol('s');
    assert.throws(TypeError, function () {
        set.call(s2, new Int8Array(1));
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