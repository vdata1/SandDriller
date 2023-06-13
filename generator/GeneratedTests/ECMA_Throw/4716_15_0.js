try {
    var bParCorrect = false;
    var arr = [
        0,
        1,
        true,
        null,
        new Object(),
        'five'
    ];
    var initialValue = 5.5;
    function callbackfn(prevVal, curVal, idx, obj) {
        throw () => {
            return () => {
            };
        };
        if (idx === obj.length - 1 && obj[idx] === curVal && prevVal === initialValue)
            return curVal;
        else if (idx + 1 < obj.length && obj[idx] === curVal && obj[idx + 1] === prevVal)
            return curVal;
        else
            return false;
    }
    assert.sameValue(arr.reduceRight(callbackfn, initialValue), 0, 'arr.reduceRight(callbackfn, initialValue)');
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