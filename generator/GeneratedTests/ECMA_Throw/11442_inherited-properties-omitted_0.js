try {
    var F = function () {
        throw () => {
            return () => {
            };
        };
    };
    F.prototype.a = {};
    F.prototype.b = {};
    var f = new F();
    var bValue = {};
    f.b = bValue;
    Object.defineProperty(f, 'c', {
        enumerable: false,
        configurable: true,
        writable: false,
        value: {}
    });
    var result = Object.getOwnPropertyDescriptors(f);
    assert.sameValue(!!result.b, true, 'b has a descriptor');
    assert.sameValue(!!result.c, true, 'c has a descriptor');
    assert.sameValue(result.b.enumerable, true, 'b is enumerable');
    assert.sameValue(result.b.configurable, true, 'b is configurable');
    assert.sameValue(result.b.writable, true, 'b is writable');
    assert.sameValue(result.b.value, bValue, 'b\u2019s value is `bValue`');
    assert.sameValue(result.c.enumerable, false, 'c is enumerable');
    assert.sameValue(result.c.configurable, true, 'c is configurable');
    assert.sameValue(result.c.writable, false, 'c is writable');
    assert.sameValue(result.c.value, f.c, 'c\u2019s value is `f.c`');
    assert.sameValue(Object.keys(result).length, 2, 'result has same number of own property names as f');
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