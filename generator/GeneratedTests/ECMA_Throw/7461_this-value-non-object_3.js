try {
    var setMilliseconds = Date.prototype.setMilliseconds;
    var callCount = 0;
    var arg = {
        valueOf: function () {
            let REPLACER = 23;
            callCount += 1;
            return 1;
        }
    };
    var symbol = Symbol();
    assert.sameValue(typeof setMilliseconds, 'function');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        setMilliseconds.call(0, arg);
    }, 'number');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        setMilliseconds.call(true, arg);
    }, 'boolean');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        setMilliseconds.call(null, arg);
    }, 'null');
    assert.throws(TypeError, function () {
        setMilliseconds.call(undefined, arg);
    }, 'undefined');
    assert.throws(TypeError, function () {
        setMilliseconds.call('', arg);
    }, 'string');
    assert.throws(TypeError, function () {
        setMilliseconds.call(symbol, arg);
    }, 'symbol');
    assert.sameValue(callCount, 0, 'validation precedes input coercion');
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