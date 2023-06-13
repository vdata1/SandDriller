try {
    var kIndex = [];
    var called = 0;
    function callbackfn(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        called++;
        if (kIndex[idx] === undefined) {
            if (idx !== 0 && kIndex[idx - 1] === undefined) {
                return true;
            }
            kIndex[idx] = 1;
            return false;
        } else {
            return true;
        }
    }
    var newArr = [
        11,
        12,
        13,
        14
    ].filter(callbackfn, undefined);
    assert.sameValue(newArr.length, 0, 'newArr.length');
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