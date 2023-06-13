try {
    function same(e) {
        return e;
    }
    var ta;
    var actual;
    ta = new Int32Array([
        1,
        0,
        42
    ]);
    Object.defineProperty(ta, 'constructor', {
        get() {
            throw 'it should not object the typedarray ctor';
        }
    });
    actual = [].flatMap.call(ta, same);
    assert.compareArray(actual, [
        1,
        0,
        42
    ], 'compare returned array');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype, 'returned object is an array #1');
    assert.sameValue(actual instanceof Int32Array, false, 'returned object is not an instance of Int32Array #1');
    ta = new Int32Array(0);
    Object.defineProperty(ta, 'constructor', {
        get() {
            throw 'it should not object the typedarray ctor';
        }
    });
    actual = [].flatMap.call(ta, same);
    assert.compareArray(actual, [], 'compare returned empty array');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype, 'returned object is an array #2');
    assert.sameValue(actual instanceof Int32Array, false, 'returned object is not an instance of Int32Array #2');
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