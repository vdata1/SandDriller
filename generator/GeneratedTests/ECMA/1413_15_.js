try {
    var callbackfnAccessed = false;
    var toStringAccessed = false;
    var valueOfAccessed = false;
    function callbackfn(val, idx, obj) {
        callbackfnAccessed = true;
        return val > 10;
    }
    var obj = {
        0: 11,
        1: 12,
        length: {
            valueOf: function () {
                valueOfAccessed = true;
                return {};
            },
            toString: function () {
                toStringAccessed = true;
                return {};
            }
        }
    };
    assert.throws(TypeError, function () {
        Array.prototype.every.call(obj, callbackfn);
    });
    assert(toStringAccessed, 'toStringAccessed !== true');
    assert(valueOfAccessed, 'valueOfAccessed !== true');
    assert.sameValue(callbackfnAccessed, false, 'callbackfnAccessed');
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