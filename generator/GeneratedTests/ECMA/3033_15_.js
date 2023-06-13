try {
    var accessed = false;
    var result1 = true;
    var result2 = true;
    function callbackfn(prevVal, curVal, idx, obj) {
        accessed = true;
        if (curVal === 8) {
            result1 = false;
        }
        if (prevVal === 8) {
            result2 = false;
        }
    }
    var obj = {
        0: 11,
        10: 12,
        non_index_property: 8,
        length: 20
    };
    Array.prototype.reduce.call(obj, callbackfn, 1);
    assert(result1, 'result1 !== true');
    assert(result2, 'result2 !== true');
    assert(accessed, 'accessed !== true');
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