try {
    var g = 'outside';
    var probeBefore = function () {
        return g;
    };
    var setBefore = function () {
        g = null;
    };
    var probeParams, setParams, probeBody, setBody;
    var func = function* g(_ = (probeParams = function () {
        return g;
    }, setParams = function () {
        g = null;
    })) {
        probeBody = function () {
            return g;
        };
        setBody = function () {
            g = null;
        };
    };
    func().next();
    assert.sameValue(probeBefore(), 'outside');
    setBefore();
    assert.sameValue(probeBefore(), null);
    assert.sameValue(probeParams(), func, 'inner binding value (from parameters)');
    assert.throws(TypeError, setParams, 'inner binding rejects modification (from parameters)');
    assert.sameValue(probeParams(), func, 'inner binding is immutable (from parameters)');
    assert.sameValue(probeBody(), func, 'inner binding value (from body)');
    assert.throws(TypeError, setBody, 'inner binding rejects modification (from body)');
    assert.sameValue(probeBody(), func, 'inner binding is immutable (from body)');
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