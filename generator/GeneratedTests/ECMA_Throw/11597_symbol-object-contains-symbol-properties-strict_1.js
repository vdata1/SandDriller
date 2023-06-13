try {
    var symA = Symbol('A');
    var symB = Symbol('B');
    var symC = Symbol('C');
    var obj = {};
    obj[symA] = 1;
    Object.preventExtensions(obj);
    obj[symA] = 2;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        obj[symB] = 1;
    });
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Object.defineProperty(obj, symC, { value: 1 });
    });
    assert.sameValue(obj[symA], 2, 'The value of `obj[symA]` is `2`');
    assert.sameValue(delete obj[symA], true, '`delete obj[symA]` is `true`');
    assert.sameValue(obj[symB], undefined, 'The value of `obj[symB]` is `undefined`');
    assert.sameValue(obj[symC], undefined, 'The value of `obj[symC]` is `undefined`');
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