try {
    var o = {};
    o.p1 = 42;
    o.p2 = 43;
    var s1 = Symbol('1');
    var s2 = Symbol('a');
    o[s1] = 44;
    o[s2] = 45;
    o[2] = 46;
    o[0] = 47;
    o[1] = 48;
    var result = Reflect.ownKeys(o);
    assert.sameValue(result.length, 7);
    assert.sameValue(result[0], '0');
    assert.sameValue(result[1], '1');
    assert.sameValue(result[2], '2');
    assert.sameValue(result[3], 'p1');
    assert.sameValue(result[4], 'p2');
    assert.sameValue(result[5], s1);
    assert.sameValue(result[6], s2);
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