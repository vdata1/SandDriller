try {
    var arrObj = [];
    function setFunc(value) {
        arrObj.setVerifyHelpProp = value;
    }
    function getFunc() {
        return 12;
    }
    Object.defineProperty(arrObj, '1', {
        get: function () {
            return 6;
        },
        set: setFunc,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arrObj, '1', {
        get: getFunc,
        enumerable: false,
        configurable: false
    });
    verifyEqualTo(arrObj, '1', getFunc());
    verifyWritable(arrObj, '1', 'setVerifyHelpProp');
    verifyNotEnumerable(arrObj, '1');
    verifyNotConfigurable(arrObj, '1');
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