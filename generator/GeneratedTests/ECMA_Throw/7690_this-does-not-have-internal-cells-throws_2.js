try {
    assert.sameValue(typeof FinalizationRegistry.prototype.cleanupSome, 'function');
    var cleanupSome = FinalizationRegistry.prototype.cleanupSome;
    var cb = function () {
        let REPLACER = 23;
    };
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        cleanupSome.call({ ['[[Cells]]']: {} }, cb);
    }, 'Ordinary object without [[Cells]]');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        cleanupSome.call(WeakRef.prototype, cb);
    }, 'WeakRef.prototype does not have a [[Cells]] internal slot');
    assert.throws(TypeError, function () {
        cleanupSome.call(WeakRef, cb);
    }, 'WeakRef does not have a [[Cells]] internal slot');
    var wr = new WeakRef({});
    assert.throws(TypeError, function () {
        cleanupSome.call(wr, cb);
    }, 'WeakRef instance');
    var wm = new WeakMap();
    assert.throws(TypeError, function () {
        cleanupSome.call(wm, cb);
    }, 'WeakMap instance');
    var ws = new WeakSet();
    assert.throws(TypeError, function () {
        cleanupSome.call(ws, cb);
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