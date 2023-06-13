try {
    Array.prototype[1] = -1;
    var x = [
        0,
        1
    ];
    x.length = 2;
    var pop = x.pop();
    if (pop !== 1) {
        $ERROR('#1: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.pop() === 1. Actual: ' + pop);
    }
    if (x[1] !== -1) {
        $ERROR('#2: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.pop(); x[1] === -1. Actual: ' + x[1]);
    }
    Object.prototype[1] = -1;
    Object.prototype.length = 2;
    Object.prototype.pop = Array.prototype.pop;
    x = {
        0: 0,
        1: 1
    };
    var pop = x.pop();
    if (pop !== 1) {
        $ERROR('#3: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop() === 1. Actual: ' + pop);
    }
    if (x[1] !== -1) {
        $ERROR('#4: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop(); x[1] === -1. Actual: ' + x[1]);
    }
    if (x.length !== 1) {
        $ERROR('#6: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop(); x.length === 1. Actual: ' + x.length);
    }
    delete x.length;
    if (x.length !== 2) {
        $ERROR('#7: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop(); delete x; x.length === 2. Actual: ' + x.length);
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