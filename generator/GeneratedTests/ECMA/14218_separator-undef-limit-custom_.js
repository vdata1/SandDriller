try {
    var str = 'undefined is not a function';
    var result = str.split(undefined, 1);
    assert.sameValue(Array.isArray(result), true, '1, result is array');
    assert.sameValue(result.length, 1, '1, result.length');
    assert.sameValue(result[0], str, '1, [0] is the same string');
    result = str.split(undefined, 2);
    assert.sameValue(Array.isArray(result), true, '2, result is array');
    assert.sameValue(result.length, 1, '2, result.length');
    assert.sameValue(result[0], str, '2, [0] is the same string');
    result = str.split(undefined, undefined);
    assert.sameValue(Array.isArray(result), true, 'undefined, result is array');
    assert.sameValue(result.length, 1, 'undefined, result.length');
    assert.sameValue(result[0], str, 'undefined, [0] is the same string');
    result = str.split(undefined, true);
    assert.sameValue(Array.isArray(result), true, 'boolean, result is array');
    assert.sameValue(result.length, 1, 'boolean, result.length');
    assert.sameValue(result[0], str, 'boolean, [0] is the same string');
    result = str.split(undefined, 2 ** 32 + 1);
    assert.sameValue(Array.isArray(result), true, 'ToUint32 2 ** 32 + 1, result is array');
    assert.sameValue(result.length, 1, 'ToUint32 2 ** 32 + 1, result.length');
    assert.sameValue(result[0], str, 'ToUint32 2 ** 32 + 1, [0] is the same string');
    result = str.split(undefined, 2 ** 31);
    assert.sameValue(Array.isArray(result), true, 'ToUint32 2 ** 31, result is array');
    assert.sameValue(result.length, 1, 'ToUint32 2 ** 31, result.length');
    assert.sameValue(result[0], str, 'ToUint32 2 ** 31, [0] is the same string');
    result = str.split(undefined, 2 ** 16);
    assert.sameValue(Array.isArray(result), true, 'ToUint32 2 ** 16, result is array');
    assert.sameValue(result.length, 1, 'ToUint32 2 ** 16, result.length');
    assert.sameValue(result[0], str, 'ToUint32 2 ** 16, [0] is the same string');
    result = str.split(undefined, {
        valueOf() {
            return 1;
        }
    });
    assert.sameValue(Array.isArray(result), true, 'boolean, result is array');
    assert.sameValue(result.length, 1, 'boolean, result.length');
    assert.sameValue(result[0], str, 'boolean, [0] is the same string');
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