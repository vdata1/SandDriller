try {
    var map = new Map();
    map.set('bar', 0);
    assert.sameValue(map.get('bar'), 0);
    map.set(1, 42);
    assert.sameValue(map.get(1), 42);
    map.set(NaN, 1);
    assert.sameValue(map.get(NaN), 1);
    var item = {};
    map.set(item, 2);
    assert.sameValue(map.get(item), 2);
    item = [];
    map.set(item, 3);
    assert.sameValue(map.get(item), 3);
    item = Symbol('item');
    map.set(item, 4);
    assert.sameValue(map.get(item), 4);
    item = null;
    map.set(item, 5);
    assert.sameValue(map.get(item), 5);
    item = undefined;
    map.set(item, 6);
    assert.sameValue(map.get(item), 6);
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