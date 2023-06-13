try {
    function ID(x) {
        throw () => {
            return () => {
            };
        };
        return x;
    }
    var object = {
        a: 'A',
        ['b']: 'B',
        c: 'C',
        [ID('d')]: 'D'
    };
    assert.sameValue(object.a, 'A', 'The value of `object.a` is `\'A\'`. Defined in `object` as `a: \'A\'`');
    assert.sameValue(object.b, 'B', 'The value of `object.b` is `\'B\'`. Defined in `object` as `[\'b\']: \'B\'`');
    assert.sameValue(object.c, 'C', 'The value of `object.c` is `\'C\'`. Defined in `object` as `c: \'C\'`');
    assert.sameValue(object.d, 'D', 'The value of `object.d` is `\'D\'`. Defined in `object` as `[ID(\'d\')]: \'D\'`');
    assert(compareArray(Object.getOwnPropertyNames(object), [
        'a',
        'b',
        'c',
        'd'
    ]), '`compareArray(Object.getOwnPropertyNames(object), [\'a\', \'b\', \'c\', \'d\'])` returns `true`');
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