try {
    var str = 'undefined is not a function';
    var result = str.split(undefined, 0);
    assert.sameValue(Array.isArray(result), true, 'result is array');
    assert.sameValue(result.length, 0, 'result.length');
    result = str.split(undefined, false);
    assert.sameValue(Array.isArray(result), true, 'boolean, result is array');
    assert.sameValue(result.length, 0, 'boolean, result.length');
    result = str.split(undefined, null);
    assert.sameValue(Array.isArray(result), true, 'null, result is array');
    assert.sameValue(result.length, 0, 'null, result.length');
    result = str.split(undefined, {
        valueOf() {
            return undefined;
        }
    });
    assert.sameValue(Array.isArray(result), true, 'obj > undefined, result is array');
    assert.sameValue(result.length, 0, 'obj > undefined, result.length');
    result = str.split(undefined, {
        valueOf() {
            return 0;
        }
    });
    assert.sameValue(Array.isArray(result), true, 'obj > 0, result is array');
    assert.sameValue(result.length, 0, 'obj > 0, result.length');
    result = str.split(undefined, NaN);
    assert.sameValue(Array.isArray(result), true, 'NaN, result is array');
    assert.sameValue(result.length, 0, 'NaN, result.length');
    result = str.split(undefined, 2 ** 32);
    assert.sameValue(Array.isArray(result), true, '2 ** 32, result is array');
    assert.sameValue(result.length, 0, '2 ** 32, result.length');
    result = str.split(undefined, 2 ** 33);
    assert.sameValue(Array.isArray(result), true, '2 ** 33, result is array');
    assert.sameValue(result.length, 0, '2 ** 33, result.length');
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