try {
    if (new Number() + '' !== '0') {
        $ERROR('#1: new Number() + "" === "0". Actual: ' + (new Number() + ''));
    }
    if (new Number(0) + '' !== '0') {
        $ERROR('#2: new Number(0) + "" === "0". Actual: ' + (new Number(0) + ''));
    }
    if (new Number(Number.NaN) + '' !== 'NaN') {
        $ERROR('#3: new Number(Number.NaN) + "" === "NaN". Actual: ' + (new Number(Number.NaN) + ''));
    }
    if (new Number(null) + '' !== '0') {
        $ERROR('#4: new Number(null) + "" === "0". Actual: ' + (new Number(null) + ''));
    }
    if (new Number(void 0) + '' !== 'NaN') {
        $ERROR('#5: new Number(void 0) + "" === "NaN. Actual: ' + (new Number(void 0) + ''));
    }
    if (new Number(true) + '' !== '1') {
        $ERROR('#6: new Number(true) + "" === "1". Actual: ' + (new Number(true) + ''));
    }
    if (new Number(false) + '' !== '0') {
        $ERROR('#7: new Number(false) + "" === "0". Actual: ' + (new Number(false) + ''));
    }
    if (new Boolean(true) + '' !== 'true') {
        $ERROR('#8: new Boolean(true) + "" === "true". Actual: ' + (new Boolean(true) + ''));
    }
    if (new Boolean(false) + '' !== 'false') {
        $ERROR('#9: Number(new Boolean(false)) === "false". Actual: ' + Number(new Boolean(false)));
    }
    if (new Array(2, 4, 8, 16, 32) + '' !== '2,4,8,16,32') {
        $ERROR('#10: new Array(2,4,8,16,32) + "" === "2,4,8,16,32". Actual: ' + (new Array(2, 4, 8, 16, 32) + ''));
    }
    var myobj1 = {
        toNumber: function () {
            return 12345;
        },
        toString: function () {
            return 67890;
        },
        valueOf: function () {
            return '[object MyObj]';
        }
    };
    if (myobj1 + '' !== '[object MyObj]') {
        $ERROR('#11: myobj1 + "" calls ToPrimitive with hint Number. Exptected: "[object MyObj]". Actual: ' + (myobj1 + ''));
    }
    var myobj2 = {
        toNumber: function () {
            return 12345;
        },
        toString: function () {
            return 67890;
        },
        valueOf: function () {
            return {};
        }
    };
    if (myobj2 + '' !== '67890') {
        $ERROR('#12: myobj2 + "" calls ToPrimitive with hint Number. Exptected: "67890". Actual: ' + (myobj2 + ''));
    }
    var myobj3 = {
        toNumber: function () {
            return 12345;
        }
    };
    if (myobj3 + '' !== '[object Object]') {
        $ERROR('#13: myobj3 + "" calls ToPrimitive with hint Number.  Exptected: "[object Object]". Actual: ' + (myobj3 + ''));
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