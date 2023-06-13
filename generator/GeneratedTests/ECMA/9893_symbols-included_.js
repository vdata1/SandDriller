try {
    var value = {};
    var enumSym = Symbol('enum');
    var nonEnumSym = Symbol('nonenum');
    var symValue = Symbol('value');
    var obj = { key: symValue };
    obj[enumSym] = value;
    Object.defineProperty(obj, nonEnumSym, {
        writable: true,
        enumerable: false,
        configurable: true,
        value: value
    });
    var result = Object.getOwnPropertyDescriptors(obj);
    assert.sameValue(Object.keys(result).length, 1, 'obj has 1 string-keyed descriptor');
    assert.sameValue(Object.getOwnPropertySymbols(result).length, 2, 'obj has 2 symbol-keyed descriptors');
    assert.sameValue(result.key.configurable, true, 'result.key is configurable');
    assert.sameValue(result.key.enumerable, true, 'result.key is enumerable');
    assert.sameValue(result.key.writable, true, 'result.key is writable');
    assert.sameValue(result.key.value, symValue, 'result.key has value symValue');
    assert.sameValue(result[enumSym].configurable, true, 'result[enumSym] is configurable');
    assert.sameValue(result[enumSym].enumerable, true, 'result[enumSym] is enumerable');
    assert.sameValue(result[enumSym].writable, true, 'result[enumSym] is writable');
    assert.sameValue(result[enumSym].value, value, 'result[enumSym] has value `value`');
    assert.sameValue(result[nonEnumSym].configurable, true, 'result[nonEnumSym] is configurable');
    assert.sameValue(result[nonEnumSym].enumerable, false, 'result[nonEnumSym] is not enumerable');
    assert.sameValue(result[nonEnumSym].writable, true, 'result[nonEnumSym] is writable');
    assert.sameValue(result[nonEnumSym].value, value, 'result[nonEnumSym] has value `value`');
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