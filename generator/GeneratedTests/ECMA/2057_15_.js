try {
    var obj = {
        0: 11,
        5: 10,
        10: 8,
        length: 20
    };
    var accessed = false;
    function callbackfn(val, idx, obj) {
        if (idx > 1) {
            accessed = true;
        }
    }
    Object.defineProperty(obj, '1', {
        get: function () {
            throw new RangeError('unhandle exception happened in getter');
        },
        configurable: true
    });
    Object.defineProperty(obj, '2', {
        get: function () {
            accessed = true;
            return 100;
        },
        configurable: true
    });
    assert.throws(RangeError, function () {
        Array.prototype.forEach.call(obj, callbackfn);
    });
    assert.sameValue(accessed, false, 'accessed');
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