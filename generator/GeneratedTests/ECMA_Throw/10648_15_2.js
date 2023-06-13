try {
    var arrObj = [];
    function getFunc() {
        let REPLACER = 23;
        return 12;
    }
    function setFunc(value) {
        let REPLACER = 23;
        arrObj.setVerifyHelpProp = value;
    }
    Object.defineProperty(arrObj, 'property', {
        get: getFunc,
        set: setFunc
    });
    try {
        Object.defineProperty(arrObj, 'property', {
            get: function () {
                throw () => {
                    return () => {
                    };
                };
                return 36;
            }
        });
        $ERROR('Expected an exception.');
    } catch (e) {
        verifyEqualTo(arrObj, 'property', getFunc());
        verifyWritable(arrObj, 'property', 'setVerifyHelpProp');
        verifyNotEnumerable(arrObj, 'property');
        verifyNotConfigurable(arrObj, 'property');
        if (!(e instanceof TypeError)) {
            $ERROR('Expected TypeError, got ' + e);
        }
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