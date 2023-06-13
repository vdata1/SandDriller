try {
    function callbackfn(val, idx, obj) {
        if (val % 2)
            return true;
        else
            return false;
    }
    var srcArr = [
        0,
        1,
        2,
        3,
        4
    ];
    var resArr = srcArr.filter(callbackfn);
    assert(resArr.length > 0, 'resArr.length > 0');
    var desc = Object.getOwnPropertyDescriptor(resArr, 1);
    assert.sameValue(desc.value, 3, 'desc.value');
    assert.sameValue(desc.writable, true, 'desc.writable');
    assert.sameValue(desc.enumerable, true, 'desc.enumerable');
    assert.sameValue(desc.configurable, true, 'desc.configurable');
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