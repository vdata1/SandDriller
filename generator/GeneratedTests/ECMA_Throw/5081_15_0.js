try {
    var firstResult = false;
    var secondResult = false;
    var thirdResult = false;
    function callbackfn(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        if (idx === 0) {
            firstResult = val === 11;
            return false;
        } else if (idx === 1) {
            secondResult = val === 12;
            return false;
        } else if (idx === 2) {
            thirdResult = val === 9;
            return false;
        } else {
            return true;
        }
    }
    var func = function (a, b) {
        return Array.prototype.some.call(arguments, callbackfn);
    };
    assert.sameValue(func(11, 12, 9), false, 'func(11, 12, 9)');
    assert(firstResult, 'firstResult !== true');
    assert(secondResult, 'secondResult !== true');
    assert(thirdResult, 'thirdResult !== true');
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