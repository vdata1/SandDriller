try {
    if (Number.prototype.toString(undefined) !== '0') {
        $ERROR('#1: Number.prototype.toString(undefined) === "0"');
    }
    if (new Number().toString(undefined) !== '0') {
        $ERROR('#2: (new Number()).toString(undefined) === "0"');
    }
    if (new Number(0).toString(undefined) !== '0') {
        $ERROR('#3: (new Number(0)).toString(undefined) === "0"');
    }
    if (new Number(-1).toString(undefined) !== '-1') {
        $ERROR('#4: (new Number(-1)).toString(undefined) === "-1"');
    }
    if (new Number(1).toString(undefined) !== '1') {
        $ERROR('#5: (new Number(1)).toString(undefined) === "1"');
    }
    if (new Number(Number.NaN).toString(undefined) !== 'NaN') {
        $ERROR('#6: (new Number(Number.NaN)).toString(undefined) === "NaN"');
    }
    if (new Number(Number.POSITIVE_INFINITY).toString(undefined) !== 'Infinity') {
        $ERROR('#7: (new Number(Number.POSITIVE_INFINITY)).toString(undefined) === "Infinity"');
    }
    if (new Number(Number.NEGATIVE_INFINITY).toString(undefined) !== '-Infinity') {
        $ERROR('#8: (new Number(Number.NEGATIVE_INFINITY)).toString(undefined) === "-Infinity"');
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