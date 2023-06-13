try {
    if (+new Number() !== 0) {
        $ERROR('#1: +(new Number()) === 0. Actual: ' + +new Number());
    }
    if (+new Number(0) !== 0) {
        $ERROR('#2: +(new Number(0)) === 0. Actual: ' + +new Number(0));
    }
    if (isNaN(+new Number(Number.NaN) !== true)) {
        $ERROR('#3: +(new Number(Number.NaN)) === Not-a-Number. Actual: ' + +new Number(Number.NaN));
    }
    if (+new Number(null) !== 0) {
        $ERROR('#4.1: +(new Number(null)) === 0. Actual: ' + +new Number(null));
    } else {
        if (1 / +new Number(null) !== Number.POSITIVE_INFINITY) {
            $ERROR('#4.2: +(new Number(null)) === +0. Actual: -0');
        }
    }
    if (isNaN(+new Number(void 0) !== true)) {
        $ERROR('#5: +(new Number(void 0)) === Not-a-Number. Actual: ' + +new Number(void 0));
    }
    if (+new Number(true) !== 1) {
        $ERROR('#6: +(new Number(true)) === 1. Actual: ' + +new Number(true));
    }
    if (+new Number(false) !== +0) {
        $ERROR('#7.1: +(new Number(false)) === 0. Actual: ' + +new Number(false));
    } else {
        if (1 / +new Number(false) !== Number.POSITIVE_INFINITY) {
            $ERROR('#7.2: +(new Number(false)) === +0. Actual: -0');
        }
    }
    if (+new Boolean(true) !== 1) {
        $ERROR('#8: +(new Boolean(true)) === 1. Actual: ' + +new Boolean(true));
    }
    if (+new Boolean(false) !== +0) {
        $ERROR('#9.1: +(new Boolean(false)) === 0. Actual: ' + +new Boolean(false));
    } else {
        if (1 / +new Boolean(false) !== Number.POSITIVE_INFINITY) {
            $ERROR('#9.2: +(new Boolean(false)) === +0. Actual: -0');
        }
    }
    if (isNaN(+new Array(2, 4, 8, 16, 32)) !== true) {
        $ERROR('#10: +(new Array(2,4,8,16,32)) === Not-a-Number. Actual: ' + +new Array(2, 4, 8, 16, 32));
    }
    var myobj1 = {
        ToNumber: function () {
            return 12345;
        },
        toString: function () {
            return '67890';
        },
        valueOf: function () {
            return '[object MyObj]';
        }
    };
    if (isNaN(+myobj1) !== true) {
        $ERROR('#11: +(myobj1) calls ToPrimitive with hint +. Exptected: Not-a-Number. Actual: ' + +myobj1);
    }
    var myobj2 = {
        ToNumber: function () {
            return 12345;
        },
        toString: function () {
            return '67890';
        },
        valueOf: function () {
            return '9876543210';
        }
    };
    if (+myobj2 !== 9876543210) {
        $ERROR('#12: +(myobj2) calls ToPrimitive with hint +. Exptected: 9876543210. Actual: ' + +myobj2);
    }
    var myobj3 = {
        ToNumber: function () {
            return 12345;
        },
        toString: function () {
            return '[object MyObj]';
        }
    };
    if (isNaN(+myobj3) !== true) {
        $ERROR('#13: +(myobj3) calls ToPrimitive with hint +. Exptected: Not-a-Number. Actual: ' + +myobj3);
    }
    var myobj4 = {
        ToNumber: function () {
            return 12345;
        },
        toString: function () {
            return '67890';
        }
    };
    if (+myobj4 !== 67890) {
        $ERROR('#14: +(myobj4) calls ToPrimitive with hint +. Exptected: 67890. Actual: ' + +myobj4);
    }
    var myobj5 = {
        ToNumber: function () {
            return 12345;
        }
    };
    if (isNaN(+myobj5) !== true) {
        $ERROR('#15: +(myobj5) calls ToPrimitive with hint +. Exptected: 12345. Actual: ' + +myobj5);
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