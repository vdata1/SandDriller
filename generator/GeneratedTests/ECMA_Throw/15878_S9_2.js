try {
    if (String(new Number()) !== '0') {
        $ERROR('#1: String(new Number()) === "0". Actual: ' + String(new Number()));
    }
    if (String(new Number(0)) !== '0') {
        $ERROR('#2: String(new Number(0)) === "0". Actual: ' + String(new Number(0)));
    }
    if (String(new Number(Number.NaN)) !== 'NaN') {
        $ERROR('#3: String(new Number(Number.NaN)) === Not-a-Number. Actual: ' + String(new Number(Number.NaN)));
    }
    if (String(new Number(null)) !== '0') {
        $ERROR('#4: String(new Number(null)) === "0". Actual: ' + String(new Number(null)));
    }
    if (String(new Number(void 0)) !== 'NaN') {
        $ERROR('#5: String(new Number(void 0)) === Not-a-Number. Actual: ' + String(new Number(void 0)));
    }
    if (String(new Number(true)) !== '1') {
        $ERROR('#6: String(new Number(true)) === "1". Actual: ' + String(new Number(true)));
    }
    if (String(new Number(false)) !== '0') {
        $ERROR('#7: String(new Number(false)) === "0". Actual: ' + String(new Number(false)));
    }
    if (String(new Boolean(true)) !== 'true') {
        $ERROR('#8: String(new Boolean(true)) === "true". Actual: ' + String(new Boolean(true)));
    }
    if (String(new Boolean(false)) !== 'false') {
        $ERROR('#9: Number(new Boolean(false)) === "false". Actual: ' + Number(new Boolean(false)));
    }
    if (String(new Array(2, 4, 8, 16, 32)) !== '2,4,8,16,32') {
        $ERROR('#10: String(new Array(2,4,8,16,32)) === "2,4,8,16,32". Actual: ' + String(new Array(2, 4, 8, 16, 32)));
    }
    var myobj1 = {
        toNumber: function () {
            let REPLACER = 23;
            return 12345;
        },
        toString: function () {
            let REPLACER = 23;
            return 67890;
        },
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            return '[object MyObj]';
        }
    };
    if (String(myobj1) !== '67890') {
        $ERROR('#11: String(myobj) calls ToPrimitive with hint String');
    }
    var myobj2 = {
        toNumber: function () {
            return 12345;
        },
        toString: function () {
            return {};
        },
        valueOf: function () {
            return '[object MyObj]';
        }
    };
    if (String(myobj2) !== '[object MyObj]') {
        $ERROR('#12: String(myobj) calls ToPrimitive with hint String');
    }
    var myobj3 = {
        toNumber: function () {
            return 12345;
        },
        valueOf: function () {
            return '[object MyObj]';
        }
    };
    if (String(myobj3) !== '[object Object]') {
        $ERROR('#13: String(myobj) calls ToPrimitive with hint String');
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