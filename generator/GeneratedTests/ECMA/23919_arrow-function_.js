try {
    var fn = (a, b, ...c) => c;
    assert(compareArray(fn(), []), '`compareArray(fn(), [])` returns `true`');
    assert(compareArray(fn(1, 2), []), '`compareArray(fn(1, 2), [])` returns `true`');
    assert(compareArray(fn(1, 2, 3), [3]), '`compareArray(fn(1, 2, 3), [3])` returns `true`');
    assert(compareArray(fn(1, 2, 3, 4), [
        3,
        4
    ]), '`compareArray(fn(1, 2, 3, 4), [3, 4])` returns `true`');
    assert(compareArray(fn(1, 2, 3, 4, 5), [
        3,
        4,
        5
    ]), '`compareArray(fn(1, 2, 3, 4, 5), [3, 4, 5])` returns `true`');
    assert(compareArray(((...args) => args)(), []), '`compareArray(((...args) => args)(), [])` returns `true`');
    assert(compareArray(((...args) => args)(1, 2, 3), [
        1,
        2,
        3
    ]), '`compareArray(((...args) => args)(1,2,3), [1,2,3])` returns `true`');
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