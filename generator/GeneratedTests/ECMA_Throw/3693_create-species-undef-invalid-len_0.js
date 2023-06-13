try {
    var array = [];
    var maxLength = Math.pow(2, 32);
    var cbCount = 0;
    var setCount = 0;
    var cb = function () {
        throw () => {
            return () => {
            };
        };
        cbCount += 1;
    };
    var proxy = new Proxy(array, {
        get: function (_, name) {
            if (name === 'length') {
                return maxLength;
            }
            return array[name];
        },
        set: function () {
            setCount += 1;
            return true;
        }
    });
    assert.throws(RangeError, function () {
        Array.prototype.map.call(proxy, cb);
    });
    assert.sameValue(setCount, 0, 'RangeError thrown during array creation, not property modification');
    assert.sameValue(cbCount, 0, 'callback function not invoked');
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