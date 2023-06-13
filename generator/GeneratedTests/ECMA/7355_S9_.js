try {
    if (Object(0).valueOf() !== 0) {
        $ERROR('#1: Object(0).valueOf() === 0. Actual: ' + Object(0).valueOf());
    }
    if (typeof Object(0) !== 'object') {
        $ERROR('#2: typeof Object(0) === "object". Actual: ' + typeof Object(0));
    }
    if (Object(0).constructor.prototype !== Number.prototype) {
        $ERROR('#3: Object(0).constructor.prototype === Number.prototype. Actual: ' + Object(0).constructor.prototype);
    }
    if (Object(-0).valueOf() !== -0) {
        $ERROR('#4.1: Object(-0).valueOf() === 0. Actual: ' + Object(-0).valueOf());
    } else if (1 / Object(-0).valueOf() !== Number.NEGATIVE_INFINITY) {
        $ERROR('#4.2: Object(-0).valueOf() === -0. Actual: +0');
    }
    if (typeof Object(-0) !== 'object') {
        $ERROR('#5: typeof Object(-0) === "object". Actual: ' + typeof Object(-0));
    }
    if (Object(-0).constructor.prototype !== Number.prototype) {
        $ERROR('#6: Object(-0).constructor.prototype === Number.prototype. Actual: ' + Object(-0).constructor.prototype);
    }
    if (Object(1).valueOf() !== 1) {
        $ERROR('#7: Object(1).valueOf() === 1. Actual: ' + Object(1).valueOf());
    }
    if (typeof Object(1) !== 'object') {
        $ERROR('#8: typeof Object(1) === "object". Actual: ' + typeof Object(1));
    }
    if (Object(1).constructor.prototype !== Number.prototype) {
        $ERROR('#9: Object(1).constructor.prototype === Number.prototype. Actual: ' + Object(1).constructor.prototype);
    }
    if (Object(-1).valueOf() !== -1) {
        $ERROR('#10: Object(-1).valueOf() === -1. Actual: ' + Object(-1).valueOf());
    }
    if (typeof Object(-1) !== 'object') {
        $ERROR('#11: typeof Object(-1) === "object". Actual: ' + typeof Object(-1));
    }
    if (Object(-1).constructor.prototype !== Number.prototype) {
        $ERROR('#12: Object(-1).constructor.prototype === Number.prototype. Actual: ' + Object(-1).constructor.prototype);
    }
    if (Object(Number.MIN_VALUE).valueOf() !== Number.MIN_VALUE) {
        $ERROR('#13: Object(Number.MIN_VALUE).valueOf() === Number.MIN_VALUE. Actual: ' + Object(Number.MIN_VALUE).valueOf());
    }
    if (typeof Object(Number.MIN_VALUE) !== 'object') {
        $ERROR('#14: typeof Object(Number.MIN_VALUE) === "object". Actual: ' + typeof Object(Number.MIN_VALUE));
    }
    if (Object(Number.MIN_VALUE).constructor.prototype !== Number.prototype) {
        $ERROR('#15: Object(Number.MIN_VALUE).constructor.prototype === Number.prototype. Actual: ' + Object(Number.MIN_VALUE).constructor.prototype);
    }
    if (Object(Number.MAX_VALUE).valueOf() !== Number.MAX_VALUE) {
        $ERROR('#16: Object(Number.MAX_VALUE).valueOf() === Number.MAX_VALUE. Actual: ' + Object(Number.MAX_VALUE).valueOf());
    }
    if (typeof Object(Number.MAX_VALUE) !== 'object') {
        $ERROR('#17: typeof Object(Number.MAX_VALUE) === "object". Actual: ' + typeof Object(Number.MAX_VALUE));
    }
    if (Object(Number.MAX_VALUE).constructor.prototype !== Number.prototype) {
        $ERROR('#18: Object(Number.MAX_VALUE).constructor.prototype === Number.prototype. Actual: ' + Object(Number.MAX_VALUE).constructor.prototype);
    }
    if (Object(Number.POSITIVE_INFINITY).valueOf() !== Number.POSITIVE_INFINITY) {
        $ERROR('#19: Object(Number.POSITIVE_INFINITY).valueOf() === Number.POSITIVE_INFINITY. Actual: ' + Object(Number.POSITIVE_INFINITY).valueOf());
    }
    if (typeof Object(Number.POSITIVE_INFINITY) !== 'object') {
        $ERROR('#20: typeof Object(Number.POSITIVE_INFINITY) === "object". Actual: ' + typeof Object(Number.POSITIVE_INFINITY));
    }
    if (Object(Number.POSITIVE_INFINITY).constructor.prototype !== Number.prototype) {
        $ERROR('#21: Object(Number.POSITIVE_INFINITY).constructor.prototype === Number.prototype. Actual: ' + Object(Number.POSITIVE_INFINITY).constructor.prototype);
    }
    if (Object(Number.NEGATIVE_INFINITY).valueOf() !== Number.NEGATIVE_INFINITY) {
        $ERROR('#22: Object(Number.NEGATIVE_INFINITY).valueOf() === Number.NEGATIVE_INFINITY. Actual: ' + Object(Number.NEGATIVE_INFINITY).valueOf());
    }
    if (typeof Object(Number.NEGATIVE_INFINITY) !== 'object') {
        $ERROR('#23: typeof Object(Number.NEGATIVE_INFINITY) === "object". Actual: ' + typeof Object(Number.NEGATIVE_INFINITY));
    }
    if (Object(Number.NEGATIVE_INFINITY).constructor.prototype !== Number.prototype) {
        $ERROR('#24: Object(Number.NEGATIVE_INFINITY).constructor.prototype === Number.prototype. Actual: ' + Object(Number.NEGATIVE_INFINITY).constructor.prototype);
    }
    assert.sameValue(Object(NaN).valueOf(), NaN, 'Object(NaN).valueOf()');
    if (typeof Object(Number.NaN) !== 'object') {
        $ERROR('#26: typeof Object(Number.NaN) === "object". Actual: ' + typeof Object(Number.NaN));
    }
    if (Object(Number.NaN).constructor.prototype !== Number.prototype) {
        $ERROR('#27: Object(Number.NaN).constructor.prototype === Number.prototype. Actual: ' + Object(Number.NaN).constructor.prototype);
    }
    if (Object(1.2345).valueOf() !== 1.2345) {
        $ERROR('#28: Object(1.2345).valueOf() === 1.2345. Actual: ' + Object(1.2345).valueOf());
    }
    if (typeof Object(1.2345) !== 'object') {
        $ERROR('#29: typeof Object(1.2345) === "object". Actual: ' + typeof Object(1.2345));
    }
    if (Object(1.2345).constructor.prototype !== Number.prototype) {
        $ERROR('#30: Object(1.2345).constructor.prototype === Number.prototype. Actual: ' + Object(1.2345).constructor.prototype);
    }
    if (Object(-1.2345).valueOf() !== -1.2345) {
        $ERROR('#31: Object(-1.2345).valueOf() === -1.2345. Actual: ' + Object(-1.2345).valueOf());
    }
    if (typeof Object(-1.2345) !== 'object') {
        $ERROR('#32: typeof Object(-1.2345) === "object". Actual: ' + typeof Object(-1.2345));
    }
    if (Object(-1.2345).constructor.prototype !== Number.prototype) {
        $ERROR('#33: Object(-1.2345).constructor.prototype === Number.prototype. Actual: ' + Object(-1.2345).constructor.prototype);
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