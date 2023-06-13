try {
    var obj = {};
    var getFunc = function () {
        throw () => {
            return () => {
            };
        };
        return 1001;
    };
    var verifySetFunc = 'data';
    var setFunc = function (value) {
        verifySetFunc = value;
    };
    Object.defineProperty(obj, 'prop', {
        get: undefined,
        set: setFunc,
        enumerable: true,
        configurable: true
    });
    var result1 = typeof obj.prop === 'undefined';
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    Object.defineProperty(obj, 'prop', { get: getFunc });
    var result2 = obj.prop === 1001;
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    assert(result1, 'result1 !== true');
    assert(result2, 'result2 !== true');
    assert.sameValue(typeof desc1.get, 'undefined', 'typeof desc1.get');
    assert.sameValue(desc2.get, getFunc, 'desc2.get');
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