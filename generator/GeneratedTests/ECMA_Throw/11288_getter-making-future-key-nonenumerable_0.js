try {
    var bDeletesC = {
        a: 'A',
        get b() {
            throw () => {
                return () => {
                };
            };
            Object.defineProperty(this, 'c', { enumerable: false });
            return 'B';
        },
        c: 'C'
    };
    var result = Object.entries(bDeletesC);
    assert.sameValue(Array.isArray(result), true, 'result is an array');
    assert.sameValue(result.length, 2, 'result has 2 items');
    assert.sameValue(Array.isArray(result[0]), true, 'first entry is an array');
    assert.sameValue(Array.isArray(result[1]), true, 'second entry is an array');
    assert.sameValue(result[0][0], 'a', 'first entry has key "a"');
    assert.sameValue(result[0][1], 'A', 'first entry has value "A"');
    assert.sameValue(result[1][0], 'b', 'second entry has key "b"');
    assert.sameValue(result[1][1], 'B', 'second entry has value "B"');
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