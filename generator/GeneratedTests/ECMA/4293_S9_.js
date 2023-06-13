try {
    if (Boolean(Number.POSITIVE_INFINITY) !== true) {
        $ERROR('#1: Boolean(+Infinity) === true. Actual: ' + Boolean(+Infinity));
    }
    if (Boolean(Number.NEGATIVE_INFINITY) !== true) {
        $ERROR('#2: Boolean(-Infinity) === true. Actual: ' + Boolean(-Infinity));
    }
    if (Boolean(Number.MAX_VALUE) !== true) {
        $ERROR('#3: Boolean(Number.MAX_VALUE) === true. Actual: ' + Boolean(Number.MAX_VALUE));
    }
    if (Boolean(Number.MIN_VALUE) !== true) {
        $ERROR('#4: Boolean(Number.MIN_VALUE) === true. Actual: ' + Boolean(Number.MIN_VALUE));
    }
    if (Boolean(13) !== true) {
        $ERROR('#5: Boolean(13) === true. Actual: ' + Boolean(13));
    }
    if (Boolean(-13) !== true) {
        $ERROR('#6: Boolean(-13) === true. Actual: ' + Boolean(-13));
    }
    if (Boolean(1.3) !== true) {
        $ERROR('#7: Boolean(1.3) === true. Actual: ' + Boolean(1.3));
    }
    if (Boolean(-1.3) !== true) {
        $ERROR('#8: Boolean(-1.3) === true. Actual: ' + Boolean(-1.3));
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