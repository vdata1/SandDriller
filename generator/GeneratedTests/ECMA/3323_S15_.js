try {
    var x = [];
    var reverse = x.reverse();
    if (reverse !== x) {
        $ERROR('#1: x = []; x.reverse() === x. Actual: ' + reverse);
    }
    x = [];
    x[0] = 1;
    var reverse = x.reverse();
    if (reverse !== x) {
        $ERROR('#2: x = []; x[0] = 1; x.reverse() === x. Actual: ' + reverse);
    }
    x = new Array(1, 2);
    var reverse = x.reverse();
    if (reverse !== x) {
        $ERROR('#3: x = new Array(1,2); x.reverse() === x. Actual: ' + reverse);
    }
    if (x[0] !== 2) {
        $ERROR('#4: x = new Array(1,2); x.reverse(); x[0] === 2. Actual: ' + x[0]);
    }
    if (x[1] !== 1) {
        $ERROR('#5: x = new Array(1,2); x.reverse(); x[1] === 1. Actual: ' + x[1]);
    }
    if (x.length !== 2) {
        $ERROR('#6: x = new Array(1,2); x.reverse(); x.length === 2. Actual: ' + x.length);
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