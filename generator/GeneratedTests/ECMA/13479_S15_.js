try {
    var __str = String(0.12345);
    if (typeof __str !== 'string') {
        $ERROR('#1: __str = String(.12345); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '0.12345') {
        $ERROR('#2: __str = String(.12345); __str === "0.12345". Actual: __str ===' + __str);
    }
    __str = String(0.012345);
    if (typeof __str !== 'string') {
        $ERROR('#3: __str = String(.012345); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '0.012345') {
        $ERROR('#4: __str = String(.012345); __str === "0.012345". Actual: __str ===' + __str);
    }
    __str = String(0.0012345);
    if (typeof __str !== 'string') {
        $ERROR('#5: __str = String(.0012345); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '0.0012345') {
        $ERROR('#6: __str = String(.0012345); __str === "0.0012345". Actual: __str ===' + __str);
    }
    __str = String(1.2345e-7);
    if (typeof __str !== 'string') {
        $ERROR('#7: __str = String(.00000012345); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
    }
    if (__str !== '1.2345e-7') {
        $ERROR('#8: __str = String(.00000012345); __str === "1.2345e-7". Actual: __str ===' + __str);
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