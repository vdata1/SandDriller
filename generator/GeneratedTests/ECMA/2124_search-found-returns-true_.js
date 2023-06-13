try {
    var symbol = Symbol('1');
    var obj = {};
    var array = [];
    var sample = [
        42,
        'test262',
        null,
        undefined,
        true,
        false,
        0,
        -1,
        '',
        symbol,
        obj,
        array
    ];
    assert.sameValue(sample.includes(42), true, '42');
    assert.sameValue(sample.includes('test262'), true, '\'test262\'');
    assert.sameValue(sample.includes(null), true, 'null');
    assert.sameValue(sample.includes(undefined), true, 'undefined');
    assert.sameValue(sample.includes(true), true, 'true');
    assert.sameValue(sample.includes(false), true, 'false');
    assert.sameValue(sample.includes(0), true, '0');
    assert.sameValue(sample.includes(-1), true, '-1');
    assert.sameValue(sample.includes(''), true, 'the empty string');
    assert.sameValue(sample.includes(symbol), true, 'symbol');
    assert.sameValue(sample.includes(obj), true, 'obj');
    assert.sameValue(sample.includes(array), true, 'array');
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