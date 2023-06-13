try {
    if (typeof Boolean(undefined) !== 'boolean') {
        $ERROR('#1.1: typeof Boolean(undefined) should be "boolean", actual is "' + typeof Boolean(undefined) + '"');
    }
    if (Boolean(undefined) !== false) {
        $ERROR('#1.2: Boolean(undefined) should be false');
    }
    if (typeof Boolean(void 0) !== 'boolean') {
        $ERROR('#2.1: typeof Boolean(void 0) should be "boolean", actual is "' + typeof Boolean(void 0) + '"');
    }
    if (Boolean(void 0) !== false) {
        $ERROR('#2.2: Boolean(void 0) should be false');
    }
    if (typeof Boolean(function () {
        }()) !== 'boolean') {
        $ERROR('#3.1: typeof Boolean(function(){}()) should be "boolean", actual is "' + typeof Boolean(function () {
        }()) + '"');
    }
    if (Boolean(function () {
        }()) !== false) {
        $ERROR('#3.2: Boolean(function(){}()) should be false');
    }
    if (typeof Boolean(null) !== 'boolean') {
        $ERROR('#4.1: typeof Boolean(null) should be "boolean", actual is "' + typeof Boolean(null) + '"');
    }
    if (Boolean(null) !== false) {
        $ERROR('#4.2: Boolean(null) should be false');
    }
    if (typeof Boolean(x) !== 'boolean') {
        $ERROR('#5.1: var x; typeof Boolean(x) should be "boolean", actual is "' + typeof Boolean(x) + '"');
    }
    if (Boolean(x) !== false) {
        $ERROR('#5.2: var x; Boolean(x) should be false');
    }
    var x;
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