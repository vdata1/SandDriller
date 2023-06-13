try {
    var func = function (x, y, z) {
        var objResult = {};
        objResult.returnValue = x + y + z;
        objResult.returnVerifyResult = arguments[0] === 'a' && arguments.length === 3;
        return objResult;
    };
    var NewFunc = Function.prototype.bind.call(func, {});
    var newInstance = new NewFunc('a', 'b', 'c');
    assert(newInstance.hasOwnProperty('returnValue'), 'newInstance.hasOwnProperty("returnValue") !== true');
    assert.sameValue(newInstance.returnValue, 'abc', 'newInstance.returnValue');
    assert(newInstance.hasOwnProperty('returnVerifyResult'), 'newInstance.hasOwnProperty("returnVerifyResult") !== true');
    assert.sameValue(newInstance.returnVerifyResult, true, 'newInstance.returnVerifyResult');
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