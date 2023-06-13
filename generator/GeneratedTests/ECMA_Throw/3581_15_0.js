try {
    function callbackfn(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        if (idx === 0) {
            return val === 9;
        } else if (idx === 1) {
            return val === 11;
        } else if (idx === 2) {
            return val === 12;
        } else {
            return false;
        }
    }
    var func = function (a, b) {
        return Array.prototype.map.call(arguments, callbackfn);
    };
    var testResult = func(9, 11, 12);
    assert.sameValue(testResult[0], true, 'testResult[0]');
    assert.sameValue(testResult[1], true, 'testResult[1]');
    assert.sameValue(testResult[2], true, 'testResult[2]');
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