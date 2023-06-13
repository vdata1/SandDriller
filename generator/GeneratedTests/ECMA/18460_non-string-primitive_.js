try {
    var x = 1;
    if (eval(x) !== x) {
        $ERROR('#1: x = 1; eval(x) === x. Actual: ' + eval(x));
    }
    if (eval(1) !== 1) {
        $ERROR('#2: eval(1) === 1. Actual: ' + eval(1));
    }
    if (eval(true) !== true) {
        $ERROR('#3: eval(true) === true. Actual: ' + eval(true));
    }
    if (eval(null) !== null) {
        $ERROR('#4: eval(null) === null. Actual: ' + eval(null));
    }
    if (eval(undefined) !== undefined) {
        $ERROR('#5: eval(undefined) === undefined. Actual: ' + eval(undefined));
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