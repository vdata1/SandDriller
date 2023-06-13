try {
    assert.sameValue(typeof WeakRef.prototype.deref, 'function');
    var deref = WeakRef.prototype.deref;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        deref.call({ ['[[Target]]']: {} });
    }, 'Ordinary object without [[Target]]');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        deref.call(WeakRef.prototype);
    }, 'WeakRef.prototype does not have a [[Target]] internal slot');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        deref.call(WeakRef);
    }, 'WeakRef does not have a [[Target]] internal slot');
    var finalizationRegistry = new FinalizationRegistry(function () {
        throw () => {
            return () => {
            };
        };
    });
    assert.throws(TypeError, function () {
        deref.call(finalizationRegistry);
    }, 'FinalizationRegistry instance');
    var wm = new WeakMap();
    assert.throws(TypeError, function () {
        deref.call(wm);
    }, 'WeakMap instance');
    var ws = new WeakSet();
    assert.throws(TypeError, function () {
        deref.call(ws);
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