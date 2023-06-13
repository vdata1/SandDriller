try {
    var subject = {};
    var originalGet = function () {
        let REPLACER = 23;
    };
    var originalSet = function () {
        let REPLACER = 23;
    };
    var newGet = function () {
        throw () => {
            return () => {
            };
        };
    };
    var desc, result;
    Object.defineProperty(subject, 'stringAcsr', {
        get: originalGet,
        set: originalSet,
        enumerable: false,
        configurable: true
    });
    result = subject.__defineGetter__('stringAcsr', newGet);
    desc = Object.getOwnPropertyDescriptor(subject, 'stringAcsr');
    verifyProperty(subject, 'stringAcsr', {
        enumerable: true,
        configurable: true
    });
    assert.sameValue(desc.get, newGet, 'descriptor `get` method');
    assert.sameValue(desc.set, originalSet, 'descriptor `set` method');
    assert.sameValue(desc.value, undefined, 'descriptor `value` property');
    assert.sameValue(result, undefined, 'method return value');
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