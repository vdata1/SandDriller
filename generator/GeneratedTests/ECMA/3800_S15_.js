try {
    Array.prototype[0] = -1;
    var x = [1];
    x.length = 1;
    var unshift = x.unshift(0);
    if (unshift !== 2) {
        $ERROR('#1: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0) === 2. Actual: ' + unshift);
    }
    if (x[0] !== 0) {
        $ERROR('#2: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0); x[0] === 0. Actual: ' + x[0]);
    }
    if (x[1] !== 1) {
        $ERROR('#3: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0); x[1] === 1. Actual: ' + x[1]);
    }
    delete x[0];
    if (x[0] !== -1) {
        $ERROR('#4: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0); delete x[0]; x[0] === -1. Actual: ' + x[0]);
    }
    Object.prototype[0] = -1;
    Object.prototype.length = 1;
    Object.prototype.unshift = Array.prototype.unshift;
    x = { 0: 1 };
    var unshift = x.unshift(0);
    if (unshift !== 2) {
        $ERROR('#5: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0) === 2. Actual: ' + unshift);
    }
    if (x[0] !== 0) {
        $ERROR('#6: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); x[0] === 0. Actual: ' + x[0]);
    }
    if (x[1] !== 1) {
        $ERROR('#7: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); x[1] === 1. Actual: ' + x[1]);
    }
    delete x[0];
    if (x[0] !== -1) {
        $ERROR('#8: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); delete x[0]; x[0] === -1. Actual: ' + x[0]);
    }
    if (x.length !== 2) {
        $ERROR('#9: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); x.length === 1. Actual: ' + x.length);
    }
    delete x.length;
    if (x.length !== 1) {
        $ERROR('#10: Object.prototype[1] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); delete x; x.length === 1. Actual: ' + x.length);
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