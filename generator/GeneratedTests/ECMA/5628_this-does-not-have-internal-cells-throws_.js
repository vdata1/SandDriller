try {
    assert.sameValue(typeof FinalizationRegistry.prototype.unregister, 'function');
    var unregister = FinalizationRegistry.prototype.unregister;
    var token = {};
    assert.throws(TypeError, function () {
        unregister.call({ ['[[Cells]]']: {} }, token);
    }, 'Ordinary object without [[Cells]]');
    assert.throws(TypeError, function () {
        unregister.call(WeakRef.prototype, token);
    }, 'WeakRef.prototype does not have a [[Cells]] internal slot');
    assert.throws(TypeError, function () {
        unregister.call(WeakRef, token);
    }, 'WeakRef does not have a [[Cells]] internal slot');
    var wr = new WeakRef({});
    assert.throws(TypeError, function () {
        unregister.call(wr, token);
    }, 'WeakRef instance');
    var wm = new WeakMap();
    assert.throws(TypeError, function () {
        unregister.call(wm, token);
    }, 'WeakMap instance');
    var ws = new WeakSet();
    assert.throws(TypeError, function () {
        unregister.call(ws, token);
    }, 'WeakSet instance');
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