try {
    if (Boolean(new Object()) !== true) {
        $ERROR('#1: Boolean(new Object()) === true. Actual: ' + Boolean(new Object()));
    }
    if (Boolean(new String('')) !== true) {
        $ERROR('#2: Boolean(new String("")) === true. Actual: ' + Boolean(new String('')));
    }
    if (Boolean(new String()) !== true) {
        $ERROR('#3: Boolean(new String()) === true. Actual: ' + Boolean(new String()));
    }
    if (Boolean(new Boolean(true)) !== true) {
        $ERROR('#4: Boolean(new Boolean(true)) === true. Actual: ' + Boolean(new Boolean(true)));
    }
    if (Boolean(new Boolean(false)) !== true) {
        $ERROR('#5: Boolean(new Boolean(false)) === true. Actual: ' + Boolean(new Boolean(false)));
    }
    if (Boolean(new Boolean()) !== true) {
        $ERROR('#6: Boolean(new Boolean()) === true. Actual: ' + Boolean(new Boolean()));
    }
    if (Boolean(new Array()) !== true) {
        $ERROR('#7: Boolean(new Array()) === true. Actual: ' + Boolean(new Array()));
    }
    if (Boolean(new Number()) !== true) {
        $ERROR('#8: Boolean(new Number()) === true. Actual: ' + Boolean(new Number()));
    }
    if (Boolean(new Number(-0)) !== true) {
        $ERROR('#9: Boolean(new Number(-0)) === true. Actual: ' + Boolean(new Number(-0)));
    }
    if (Boolean(new Number(0)) !== true) {
        $ERROR('#10: Boolean(new Number(0)) === true. Actual: ' + Boolean(new Number(0)));
    }
    if (Boolean(new Number()) !== true) {
        $ERROR('#11: Boolean(new Number()) === true. Actual: ' + Boolean(new Number()));
    }
    if (Boolean(new Number(Number.NaN)) !== true) {
        $ERROR('#12: Boolean(new Number(Number.NaN)) === true. Actual: ' + Boolean(new Number(Number.NaN)));
    }
    if (Boolean(new Number(-1)) !== true) {
        $ERROR('#13: Boolean(new Number(-1)) === true. Actual: ' + Boolean(new Number(-1)));
    }
    if (Boolean(new Number(1)) !== true) {
        $ERROR('#14: Boolean(new Number(1)) === true. Actual: ' + Boolean(new Number(1)));
    }
    if (Boolean(new Number(Number.POSITIVE_INFINITY)) !== true) {
        $ERROR('#15: Boolean(new Number(Number.POSITIVE_INFINITY)) === true. Actual: ' + Boolean(new Number(Number.POSITIVE_INFINITY)));
    }
    if (Boolean(new Number(Number.NEGATIVE_INFINITY)) !== true) {
        $ERROR('#16: Boolean(new Number(Number.NEGATIVE_INFINITY)) === true. Actual: ' + Boolean(new Number(Number.NEGATIVE_INFINITY)));
    }
    if (Boolean(new Function()) !== true) {
        $ERROR('#17: Boolean(new Function()) === true. Actual: ' + Boolean(new Function()));
    }
    if (Boolean(new Date()) !== true) {
        $ERROR('#18: Boolean(new Date()) === true. Actual: ' + Boolean(new Date()));
    }
    if (Boolean(new Date(0)) !== true) {
        $ERROR('#19: Boolean(new Date(0)) === true. Actual: ' + Boolean(new Date(0)));
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