try {
    var o1 = {
        12345678900: true,
        b: true,
        1: true,
        a: true,
        [Number.MAX_SAFE_INTEGER]: true,
        [Symbol.for('z')]: true,
        12345678901: true,
        4294967294: true,
        4294967295: true
    };
    var result = Reflect.ownKeys(o1);
    assert.sameValue(result.length, 9);
    assert.sameValue(result[0], '1');
    assert.sameValue(result[1], '4294967294');
    assert.sameValue(result[2], '12345678900');
    assert.sameValue(result[3], 'b');
    assert.sameValue(result[4], 'a');
    assert.sameValue(result[5], String(Number.MAX_SAFE_INTEGER));
    assert.sameValue(result[6], '12345678901');
    assert.sameValue(result[7], '4294967295');
    assert.sameValue(result[8], Symbol.for('z'));
    var o2 = {};
    o2[12345678900] = true;
    o2.b = true;
    o2[1] = true;
    o2.a = true;
    o2[Number.MAX_SAFE_INTEGER] = true;
    o2[Symbol.for('z')] = true;
    o2[12345678901] = true;
    o2[4294967294] = true;
    o2[4294967295] = true;
    result = Reflect.ownKeys(o2);
    assert.sameValue(result.length, 9);
    assert.sameValue(result[0], '1');
    assert.sameValue(result[1], '4294967294');
    assert.sameValue(result[2], '12345678900');
    assert.sameValue(result[3], 'b');
    assert.sameValue(result[4], 'a');
    assert.sameValue(result[5], String(Number.MAX_SAFE_INTEGER));
    assert.sameValue(result[6], '12345678901');
    assert.sameValue(result[7], '4294967295');
    assert.sameValue(result[8], Symbol.for('z'));
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