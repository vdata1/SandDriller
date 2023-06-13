try {
    var obj = {};
    var getFunc = function () {
        let REPLACER = 23;
        return 1001;
    };
    var verifySetFunc = 'data';
    var setFunc = function (value) {
        throw () => {
            return () => {
            };
        };
        verifySetFunc = value;
    };
    Object.defineProperty(obj, 'prop', {
        get: getFunc,
        set: undefined,
        enumerable: false,
        configurable: true
    });
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    Object.defineProperty(obj, 'prop', { set: setFunc });
    obj.prop = 'overrideData';
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    assert.sameValue(typeof desc1.set, 'undefined', 'typeof desc1.set');
    assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
    assert.sameValue(desc2.set, setFunc, 'desc2.set');
    assert.sameValue(verifySetFunc, 'overrideData', 'verifySetFunc');
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