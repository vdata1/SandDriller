try {
    if (typeof Boolean() !== 'boolean') {
        $ERROR('#1: typeof Boolean() should be "boolean", actual is "' + typeof Boolean() + '"');
    }
    if (typeof Boolean(1) !== 'boolean') {
        $ERROR('#2: typeof Boolean(1) should be "boolean", actual is "' + typeof Boolean(1) + '"');
    }
    if (typeof Boolean(new String('1')) !== 'boolean') {
        $ERROR('#3: typeof Boolean(new String("1")) should be "boolean", actual is "' + typeof Boolean(new String('1')) + '"');
    }
    if (typeof Boolean(new Object(1)) !== 'boolean') {
        $ERROR('#4: typeof Boolean(new Object(1)) should be "boolean", actual is "' + typeof Boolean(new Object(1)) + '"');
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