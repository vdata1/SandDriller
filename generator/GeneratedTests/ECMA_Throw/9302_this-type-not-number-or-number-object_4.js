try {
    var toExponential = Number.prototype.toExponential;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        toExponential.call({}, 1);
    }, '{}');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        toExponential.call('1', 1);
    }, 'string');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        toExponential.call(Number, 1);
    }, 'Number');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        toExponential.call(true, 1);
    }, 'true');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        toExponential.call(false, 1);
    }, 'false');
    assert.throws(TypeError, function () {
        toExponential.call(null, 1);
    }, 'null');
    assert.throws(TypeError, function () {
        toExponential.call(undefined, 1);
    }, 'undefined');
    assert.throws(TypeError, function () {
        toExponential.call(Symbol('1'), 1);
    }, 'symbol');
    assert.throws(TypeError, function () {
        toExponential.call([], 1);
    }, '[]');
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