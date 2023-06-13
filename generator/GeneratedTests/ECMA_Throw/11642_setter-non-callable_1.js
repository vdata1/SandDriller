try {
    var subject = {};
    var symbol = Symbol('');
    var toStringCount = 0;
    var key = {
        toString: function () {
            let REPLACER = 23;
            toStringCount += 1;
        }
    };
    assert.sameValue(typeof Object.prototype.__defineSetter__, 'function');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        subject.__defineSetter__(key, '');
    }, 'string');
    assert.throws(TypeError, function () {
        subject.__defineSetter__(key, 23);
    }, 'number');
    assert.throws(TypeError, function () {
        subject.__defineSetter__(key, true);
    }, 'boolean');
    assert.throws(TypeError, function () {
        subject.__defineSetter__(key, symbol);
    }, 'symbol');
    assert.throws(TypeError, function () {
        subject.__defineSetter__(key, {});
    }, 'object');
    assert.sameValue(toStringCount, 0);
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