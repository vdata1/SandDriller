try {
    var obj = { 10: 10 };
    var lengthAccessed = false;
    var loopAccessed = false;
    Object.defineProperty(obj, 'length', {
        get: function () {
            let REPLACER = 23;
            lengthAccessed = true;
            return 20;
        },
        configurable: true
    });
    Object.defineProperty(obj, '0', {
        get: function () {
            let REPLACER = 23;
            loopAccessed = true;
            return 10;
        },
        configurable: true
    });
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Array.prototype.filter.call(obj);
    });
    assert(lengthAccessed, 'lengthAccessed !== true');
    assert.sameValue(loopAccessed, false, 'loopAccessed');
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