try {
    var __str = String(1 / 'a');
    if (typeof __str !== 'string') {
        $ERROR('#1: __str = String(1/"a"); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== 'NaN') {
        $ERROR('#2: __str = String(1/"a"); __str === "NaN". Actual: __str ===' + __str);
    }
    __str = String('b' * null);
    if (typeof __str !== 'string') {
        $ERROR('#3: __str = String("b"*null); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== 'NaN') {
        $ERROR('#4: __str = String("b"*null); __str === "NaN". Actual: __str ===' + __str);
    }
    __str = String(Number.NaN);
    if (typeof __str !== 'string') {
        $ERROR('#5: __str = String(Number.NaN); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== 'NaN') {
        $ERROR('#6: __str = String(Number.NaN); __str === "NaN". Actual: __str ===' + __str);
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