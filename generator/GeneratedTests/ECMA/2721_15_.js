try {
    var kIndex = [];
    function callbackfn(val, idx, obj) {
        if (typeof kIndex[idx] === 'undefined') {
            if (idx !== 0 && typeof kIndex[idx - 1] === 'undefined') {
                return true;
            }
            kIndex[idx] = 1;
            return false;
        } else {
            return true;
        }
    }
    var testResult = [
        11,
        12,
        13,
        14
    ].map(callbackfn);
    assert.sameValue(testResult.length, 4, 'testResult.length');
    assert.sameValue(testResult[0], false, 'testResult[0]');
    assert.sameValue(testResult[1], false, 'testResult[1]');
    assert.sameValue(testResult[2], false, 'testResult[2]');
    assert.sameValue(testResult[3], false, 'testResult[3]');
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