try {
    Array.prototype[1] = -1;
    var x = [
        1,
        0
    ];
    x.length = 2;
    x.sort();
    if (x[0] !== 0) {
        $ERROR('#1: Array.prototype[1] = -1; x = [1,0]; x.length = 2; x.sort(); x[0] === 0. Actual: ' + x[0]);
    }
    if (x[1] !== 1) {
        $ERROR('#2: Array.prototype[1] = -1; x = [1,0]; x.length = 2; x.sort(); x[1] === 1. Actual: ' + x[1]);
    }
    x.length = 0;
    if (x[0] !== undefined) {
        $ERROR('#3: Array.prototype[1] = -1; x = [1,0]; x.length = 2; x.sort(); x.length = 0; x[0] === undefined. Actual: ' + x[0]);
    }
    if (x[1] !== -1) {
        $ERROR('#4: Array.prototype[1] = -1; x = [1,0]; x.length = 2; x.sort(); x.length = 0; x[1] === -1. Actual: ' + x[1]);
    }
    Object.prototype[1] = -1;
    Object.prototype.length = 2;
    Object.prototype.sort = Array.prototype.sort;
    x = {
        0: 1,
        1: 0
    };
    x.sort();
    if (x[0] !== 0) {
        $ERROR('#5: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.sort = Array.prototype.sort; x = {0:1,1:0}; x.sort(); x[0] === 0. Actual: ' + x[0]);
    }
    if (x[1] !== 1) {
        $ERROR('#6: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.sort = Array.prototype.sort; x = {0:1,1:0}; x.sort(); x[1] === 1. Actual: ' + x[1]);
    }
    delete x[0];
    delete x[1];
    if (x[0] !== undefined) {
        $ERROR('#7: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.sort = Array.prototype.sort; x = {0:1,1:0}; x.sort(); delete x[0]; delete x[1]; x[0] === undefined. Actual: ' + x[0]);
    }
    if (x[1] !== -1) {
        $ERROR('#8: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.sort = Array.prototype.sort; x = {0:1,1:0}; x.sort(); delete x[0]; delete x[1]; x[1] === -1. Actual: ' + x[1]);
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