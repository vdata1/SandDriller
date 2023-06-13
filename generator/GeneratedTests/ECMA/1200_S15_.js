try {
    var x = [];
    x.length = true;
    if (x.length !== 1) {
        $ERROR('#1: x = []; x.length = true; x.length === 1. Actual: ' + x.length);
    }
    x = [0];
    x.length = null;
    if (x.length !== 0) {
        $ERROR('#2: x = [0]; x.length = null; x.length === 0. Actual: ' + x.length);
    }
    x = [0];
    x.length = new Boolean(false);
    if (x.length !== 0) {
        $ERROR('#3: x = [0]; x.length = new Boolean(false); x.length === 0. Actual: ' + x.length);
    }
    x = [];
    x.length = new Number(1);
    if (x.length !== 1) {
        $ERROR('#4: x = []; x.length = new Number(1); x.length === 1. Actual: ' + x.length);
    }
    x = [];
    x.length = '1';
    if (x.length !== 1) {
        $ERROR('#5: x = []; x.length = "1"; x.length === 1. Actual: ' + x.length);
    }
    x = [];
    x.length = new String('1');
    if (x.length !== 1) {
        $ERROR('#6: x = []; x.length = new String("1"); x.length === 1. Actual: ' + x.length);
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