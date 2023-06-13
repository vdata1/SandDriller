try {
    var result = Object.entries('abc');
    assert.sameValue(Array.isArray(result), true, 'result is an array');
    assert.sameValue(result.length, 3, 'result has 3 items');
    assert.sameValue(result[0][0], '0', 'first entry has key "0"');
    assert.sameValue(result[0][1], 'a', 'first entry has value "a"');
    assert.sameValue(result[1][0], '1', 'second entry has key "1"');
    assert.sameValue(result[1][1], 'b', 'second entry has value "b"');
    assert.sameValue(result[2][0], '2', 'third entry has key "2"');
    assert.sameValue(result[2][1], 'c', 'third entry has value "c"');
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