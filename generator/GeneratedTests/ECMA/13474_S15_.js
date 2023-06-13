try {
    var __str = String(1 / 0);
    if (typeof __str !== 'string') {
        $ERROR('#1: __str = String(1/0); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== 'Infinity') {
        $ERROR('#2: __str = String(1/0); __str === "Infinity". Actual: __str ===' + __str);
    }
    __str = String(-1 / 0);
    if (typeof __str !== 'string') {
        $ERROR('#3: __str = String(-1/0); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '-Infinity') {
        $ERROR('#4: __str = String(-1/0); __str === "-Infinity". Actual: __str ===' + __str);
    }
    __str = String(Infinity);
    if (typeof __str !== 'string') {
        $ERROR('#5: __str = String(Infinity); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== 'Infinity') {
        $ERROR('#6: __str = String(Infinity); __str === "Infinity". Actual: __str ===' + __str);
    }
    __str = String(-Infinity);
    if (typeof __str !== 'string') {
        $ERROR('#7: __str = String(-Infinity); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '-Infinity') {
        $ERROR('#8: __str = String(-Infinity); __str === "-Infinity". Actual: __str ===' + __str);
    }
    __str = String(Number.POSITIVE_INFINITY);
    if (typeof __str !== 'string') {
        $ERROR('#9: __str = String(Number.POSITIVE_INFINITY); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== 'Infinity') {
        $ERROR('#10: __str = String(Number.POSITIVE_INFINITY); __str === "Infinity". Actual: __str ===' + __str);
    }
    __str = String(Number.NEGATIVE_INFINITY);
    if (typeof __str !== 'string') {
        $ERROR('#11: __str = String(Number.NEGATIVE_INFINITY); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '-Infinity') {
        $ERROR('#12: __str = String(Number.NEGATIVE_INFINITY); __str === "-Infinity". Actual: __str ===' + __str);
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