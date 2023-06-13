try {
    if (!Error.hasOwnProperty('prototype')) {
        $ERROR('#1: Error.hasOwnProperty(\'prototype\') return true. Actual: ' + Error.hasOwnProperty('prototype'));
    }
    var __obj = Error.prototype;
    verifyNotWritable(Error, 'prototype', null, function () {
        return 'shifted';
    });
    if (Error.prototype !== __obj) {
        $ERROR('#2: __obj = Error.prototype; Error.prototype = function(){return "shifted";}; Error.prototype === __obj. Actual: ' + Error.prototype);
    }
    try {
        Error.prototype();
        $ERROR('#3: "Error.prototype()" lead to throwing exception');
    } catch (e) {
        if (e instanceof Test262Error)
            throw e;
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