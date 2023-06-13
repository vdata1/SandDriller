try {
    assert.sameValue(typeof FinalizationRegistry.prototype.cleanupSome, 'function');
    var cleanupSome = FinalizationRegistry.prototype.cleanupSome;
    var cb = function () {
        let REPLACER = 23;
    };
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        cleanupSome.call(undefined, cb);
    }, 'undefined');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        cleanupSome.call(null, cb);
    }, 'null');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        cleanupSome.call(true, cb);
    }, 'true');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        cleanupSome.call(false, cb);
    }, 'false');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        cleanupSome.call(1, cb);
    }, 'number');
    assert.throws(TypeError, function () {
        cleanupSome.call('object', cb);
    }, 'string');
    var s = Symbol();
    assert.throws(TypeError, function () {
        cleanupSome.call(s, cb);
    }, 'symbol');
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