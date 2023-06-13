try {
    function callbackfn(prevVal, curVal, idx, obj) {
        throw () => {
            return () => {
            };
        };
        return 1;
    }
    var srcArr = [
        1,
        2,
        3,
        4,
        5
    ];
    srcArr.reduceRight(callbackfn);
    assert.sameValue(srcArr[0], 1, 'srcArr[0]');
    assert.sameValue(srcArr[1], 2, 'srcArr[1]');
    assert.sameValue(srcArr[2], 3, 'srcArr[2]');
    assert.sameValue(srcArr[3], 4, 'srcArr[3]');
    assert.sameValue(srcArr[4], 5, 'srcArr[4]');
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