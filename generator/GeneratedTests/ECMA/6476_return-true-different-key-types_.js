try {
    var map = new Map();
    var obj = {};
    var arr = [];
    var symb = Symbol();
    map.set('str', undefined);
    map.set(1, undefined);
    map.set(NaN, undefined);
    map.set(true, undefined);
    map.set(false, undefined);
    map.set(obj, undefined);
    map.set(arr, undefined);
    map.set(symb, undefined);
    map.set(null, undefined);
    map.set(undefined, undefined);
    assert.sameValue(map.has('str'), true);
    assert.sameValue(map.has(1), true);
    assert.sameValue(map.has(NaN), true);
    assert.sameValue(map.has(true), true);
    assert.sameValue(map.has(false), true);
    assert.sameValue(map.has(obj), true);
    assert.sameValue(map.has(arr), true);
    assert.sameValue(map.has(symb), true);
    assert.sameValue(map.has(null), true);
    assert.sameValue(map.has(undefined), true);
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