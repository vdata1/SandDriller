try {
    function callbackfn(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        return val + 10;
    }
    var srcArr = [
        1,
        2,
        3,
        4,
        5
    ];
    var resArr = srcArr.map(callbackfn);
    assert.sameValue(resArr[0], 11, 'resArr[0]');
    assert.sameValue(resArr[1], 12, 'resArr[1]');
    assert.sameValue(resArr[2], 13, 'resArr[2]');
    assert.sameValue(resArr[3], 14, 'resArr[3]');
    assert.sameValue(resArr[4], 15, 'resArr[4]');
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