try {
    var arr = [];
    var getFunc = function () {
        throw () => {
            return () => {
            };
        };
        return 11;
    };
    Object.defineProperties(arr, {
        '0': {
            get: getFunc,
            enumerable: true,
            configurable: true
        }
    });
    var verifyEnumerable = false;
    for (var i in arr) {
        if (i === '0' && arr.hasOwnProperty('0')) {
            verifyEnumerable = true;
        }
    }
    var desc = Object.getOwnPropertyDescriptor(arr, '0');
    var propertyDefineCorrect = arr.hasOwnProperty('0');
    var verifyConfigurable = false;
    delete arr[0];
    verifyConfigurable = arr.hasOwnProperty('0');
    assert.sameValue(typeof desc.set, 'undefined', 'typeof desc.set');
    assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
    assert.sameValue(desc.get, getFunc, 'desc.get');
    assert.sameValue(verifyConfigurable, false, 'verifyConfigurable');
    assert(verifyEnumerable, 'verifyEnumerable !== true');
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