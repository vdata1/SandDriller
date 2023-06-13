try {
    var set = TypedArray.prototype.set;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call({}, []);
    }, 'this is an Object');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        set.call([], []);
    }, 'this is an Array');
    var ab1 = new ArrayBuffer(8);
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        set.call(ab1, []);
    }, 'this is an ArrayBuffer instance');
    var dv1 = new DataView(new ArrayBuffer(8), 0, 1);
    assert.throws(TypeError, function () {
        set.call(dv1, []);
    }, 'this is a DataView instance');
    assert.throws(TypeError, function () {
        set.call({}, new Int8Array());
    }, 'this is an Object');
    assert.throws(TypeError, function () {
        set.call([], new Int8Array());
    }, 'this is an Array');
    var ab2 = new ArrayBuffer(8);
    assert.throws(TypeError, function () {
        set.call(ab2, new Int8Array());
    }, 'this is an ArrayBuffer instance');
    var dv2 = new DataView(new ArrayBuffer(8), 0, 1);
    assert.throws(TypeError, function () {
        set.call(dv2, new Int8Array());
    }, 'this is a DataView instance');
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