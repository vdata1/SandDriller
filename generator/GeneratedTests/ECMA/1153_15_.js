try {
    var b_num = Array.isArray(42);
    var b_undef = Array.isArray(undefined);
    var b_bool = Array.isArray(true);
    var b_str = Array.isArray('abc');
    var b_obj = Array.isArray({});
    var b_null = Array.isArray(null);
    assert.sameValue(b_num, false, 'b_num');
    assert.sameValue(b_undef, false, 'b_undef');
    assert.sameValue(b_bool, false, 'b_bool');
    assert.sameValue(b_str, false, 'b_str');
    assert.sameValue(b_obj, false, 'b_obj');
    assert.sameValue(b_null, false, 'b_null');
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