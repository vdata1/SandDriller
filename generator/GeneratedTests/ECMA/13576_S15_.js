try {
    if (!String.hasOwnProperty('prototype')) {
        $ERROR('#1: String.hasOwnProperty(\'prototype\') return true. Actual: ' + String.hasOwnProperty('prototype'));
    }
    verifyNotConfigurable(String, 'prototype');
    try {
        if (delete String.prototype !== false) {
            $ERROR('#2: String.prototype has the attribute DontDelete');
        }
    } catch (e) {
        if (e instanceof Test262Error)
            throw e;
        assert(e instanceof TypeError);
    }
    if (!String.hasOwnProperty('prototype')) {
        $ERROR('#3: delete String.prototype; String.hasOwnProperty(\'prototype\') return true. Actual: ' + String.hasOwnProperty('prototype'));
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