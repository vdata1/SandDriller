try {
    assert.sameValue(typeof FinalizationRegistry.prototype.register, 'function');
    var register = FinalizationRegistry.prototype.register;
    var target = {};
    assert.throws(TypeError, function () {
        register.call({ ['[[Cells]]']: {} }, target);
    }, 'Ordinary object without [[Cells]]');
    assert.throws(TypeError, function () {
        register.call(WeakRef.prototype, target);
    }, 'WeakRef.prototype does not have a [[Cells]] internal slot');
    assert.throws(TypeError, function () {
        register.call(WeakRef, target);
    }, 'WeakRef does not have a [[Cells]] internal slot');
    var wr = new WeakRef({});
    assert.throws(TypeError, function () {
        register.call(wr, target);
    }, 'WeakRef instance');
    var wm = new WeakMap();
    assert.throws(TypeError, function () {
        register.call(wm, target);
    }, 'WeakMap instance');
    var ws = new WeakSet();
    assert.throws(TypeError, function () {
        register.call(ws, target);
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