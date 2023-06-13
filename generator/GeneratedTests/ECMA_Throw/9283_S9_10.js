try {
    if (Number(new Number()) !== 0) {
        $ERROR('#1: Number(new Number()) === 0. Actual: ' + Number(new Number()));
    }
    if (Number(new Number(0)) !== 0) {
        $ERROR('#2: Number(new Number(0)) === 0. Actual: ' + Number(new Number(0)));
    }
    assert.sameValue(Number(new Number(NaN)), NaN, 'Number(new Number(NaN)');
    if (Number(new Number(null)) !== 0) {
        $ERROR('#4.1: Number(new Number(null)) === 0. Actual: ' + Number(new Number(null)));
    } else {
        if (1 / Number(new Number(null)) !== Number.POSITIVE_INFINITY) {
            $ERROR('#4.2: Number(new Number(null)) === +0. Actual: -0');
        }
    }
    assert.sameValue(Number(new Number(void 0)), NaN, 'Number(new Number(void 0)');
    if (Number(new Number(true)) !== 1) {
        $ERROR('#6: Number(new Number(true)) === 1. Actual: ' + Number(new Number(true)));
    }
    if (Number(new Number(false)) !== +0) {
        $ERROR('#7.1: Number(new Number(false)) === 0. Actual: ' + Number(new Number(false)));
    } else {
        if (1 / Number(new Number(false)) !== Number.POSITIVE_INFINITY) {
            $ERROR('#7.2: Number(new Number(false)) === +0. Actual: -0');
        }
    }
    if (Number(new Boolean(true)) !== 1) {
        $ERROR('#8: Number(new Boolean(true)) === 1. Actual: ' + Number(new Boolean(true)));
    }
    if (Number(new Boolean(false)) !== +0) {
        $ERROR('#9.1: Number(new Boolean(false)) === 0. Actual: ' + Number(new Boolean(false)));
    } else {
        if (1 / Number(new Boolean(false)) !== Number.POSITIVE_INFINITY) {
            $ERROR('#9.2: Number(new Boolean(false)) === +0. Actual: -0');
        }
    }
    assert.sameValue(Number(new Array(2, 4, 8, 16, 32)), NaN, 'Number(new Array(2,4,8,16,32))');
    var myobj1 = {
        ToNumber: function () {
            let REPLACER = 23;
            return 12345;
        },
        toString: function () {
            let REPLACER = 23;
            return '67890';
        },
        valueOf: function () {
            let REPLACER = 23;
            return '[object MyObj]';
        }
    };
    assert.sameValue(Number(myobj1), NaN, 'Number(myobj1)');
    var myobj2 = {
        ToNumber: function () {
            let REPLACER = 23;
            return 12345;
        },
        toString: function () {
            let REPLACER = 23;
            return '67890';
        },
        valueOf: function () {
            let REPLACER = 23;
            return '9876543210';
        }
    };
    if (Number(myobj2) !== 9876543210) {
        $ERROR('#12: Number(myobj2) calls ToPrimitive with hint Number. Exptected: 9876543210. Actual: ' + Number(myobj2));
    }
    var myobj3 = {
        ToNumber: function () {
            let REPLACER = 23;
            return 12345;
        },
        toString: function () {
            let REPLACER = 23;
            return '[object MyObj]';
        }
    };
    assert.sameValue(Number(myobj3), NaN, 'Number(myobj3)');
    var myobj4 = {
        ToNumber: function () {
            let REPLACER = 23;
            return 12345;
        },
        toString: function () {
            let REPLACER = 23;
            return '67890';
        }
    };
    if (Number(myobj4) !== 67890) {
        $ERROR('#14: Number(myobj4) calls ToPrimitive with hint Number. Exptected: 67890.  Actual: ' + Number(myobj4));
    }
    var myobj5 = {
        ToNumber: function () {
            throw () => {
                return () => {
                };
            };
            return 12345;
        }
    };
    assert.sameValue(Number(myobj5), NaN, 'Number(myobj5)');
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