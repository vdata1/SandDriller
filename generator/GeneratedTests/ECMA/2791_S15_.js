try {
    var x = [];
    if (x.length !== 0) {
        $ERROR('#1: x = []; x.length === 0. Actual: ' + x.length);
    }
    x[0] = 0;
    var push = x.push(true, Number.POSITIVE_INFINITY, 'NaN', '1', -1);
    if (push !== 6) {
        $ERROR('#2: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1) === 6. Actual: ' + push);
    }
    if (x[0] !== 0) {
        $ERROR('#3: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[0] === 0. Actual: ' + x[0]);
    }
    if (x[1] !== true) {
        $ERROR('#4: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[1] === true. Actual: ' + x[1]);
    }
    if (x[2] !== Number.POSITIVE_INFINITY) {
        $ERROR('#5: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[2] === Number.POSITIVE_INFINITY. Actual: ' + x[2]);
    }
    if (x[3] !== 'NaN') {
        $ERROR('#6: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[3] === "NaN". Actual: ' + x[3]);
    }
    if (x[4] !== '1') {
        $ERROR('#7: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[4] === "1". Actual: ' + x[4]);
    }
    if (x[5] !== -1) {
        $ERROR('#8: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[5] === -1. Actual: ' + x[5]);
    }
    if (x.length !== 6) {
        $ERROR('#9: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x.length === 6. Actual: ' + x.length);
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