try {
    Array.prototype[1] = -1;
    var x = [
        0,
        1
    ];
    var arr = x.splice(1, 1, 2);
    if (arr.length !== 1) {
        $ERROR('#1: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1,2); arr.length === 1. Actual: ' + arr.length);
    }
    if (arr[0] !== 1) {
        $ERROR('#2: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1,2); arr[0] === 1. Actual: ' + arr[0]);
    }
    if (arr[1] !== -1) {
        $ERROR('#3: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1,2); arr[1] === -1. Actual: ' + arr[1]);
    }
    if (x.length !== 2) {
        $ERROR('#4: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1,2); x.length === 2. Actual: ' + x.length);
    }
    if (x[0] !== 0) {
        $ERROR('#5: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1,2); x[0] === 0. Actual: ' + x[0]);
    }
    if (x[1] !== 2) {
        $ERROR('#6: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1,2); x[1] === 2. Actual: ' + x[1]);
    }
    Object.prototype[1] = -1;
    Object.prototype.length = 2;
    Object.prototype.splice = Array.prototype.splice;
    x = {
        0: 0,
        1: 1
    };
    var arr = x.splice(1, 1, 2);
    if (arr.length !== 1) {
        $ERROR('#7: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1,2); arr.length === 1. Actual: ' + arr.length);
    }
    if (arr[0] !== 1) {
        $ERROR('#8: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1,2); arr[0] === 1. Actual: ' + arr[0]);
    }
    if (arr[1] !== -1) {
        $ERROR('#9: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1,2); arr[1] === -1. Actual: ' + arr[1]);
    }
    if (x.length !== 2) {
        $ERROR('#10: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1,2); x.length === 2. Actual: ' + x.length);
    }
    if (x[0] !== 0) {
        $ERROR('#11: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1,2); x[0] === 0. Actual: ' + x[0]);
    }
    if (x[1] !== 2) {
        $ERROR('#12: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1,2); x[1] === 2. Actual: ' + x[1]);
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