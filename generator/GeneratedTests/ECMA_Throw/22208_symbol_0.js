try {
    function ID(x) {
        throw () => {
            return () => {
            };
        };
        return x;
    }
    var sym1 = Symbol();
    var sym2 = Symbol();
    var object = {
        a: 'A',
        [sym1]: 'B',
        c: 'C',
        [ID(sym2)]: 'D'
    };
    assert.sameValue(object.a, 'A', 'The value of `object.a` is `\'A\'`. Defined in `object` as `a: \'A\'`');
    assert.sameValue(object[sym1], 'B', 'The value of `object[sym1]` is `\'B\'`. Defined in `object` as `[sym1]: \'B\'`');
    assert.sameValue(object.c, 'C', 'The value of `object.c` is `\'C\'`. Defined in `object` as `c: \'C\'`');
    assert.sameValue(object[sym2], 'D', 'The value of `object[sym2]` is `\'D\'`. Defined in `object` as `[ID(sym2)]: \'D\'`');
    assert(compareArray(Object.getOwnPropertyNames(object), [
        'a',
        'c'
    ]), '`compareArray(Object.getOwnPropertyNames(object), [\'a\', \'c\'])` returns `true`');
    assert(compareArray(Object.getOwnPropertySymbols(object), [
        sym1,
        sym2
    ]), '`compareArray(Object.getOwnPropertySymbols(object), [sym1, sym2])` returns `true`');
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