try {
    var __re = RegExp.prototype;
    if (__re.hasOwnProperty('ignoreCase') !== true) {
        $ERROR('#1: __re = RegExp.prototype; __re.hasOwnProperty(\'ignoreCase\') === true');
    }
    var __sample = /a|b|c/;
    var __obj = __sample.ignoreCase;
    verifyNotWritable(__sample, 'ignoreCase', 'ignoreCase', 'shifted');
    if (__sample.ignoreCase !== __obj) {
        $ERROR('#2: __sample = /a|b|c/; __obj = __sample.ignoreCase; __sample.ignoreCase = "shifted"; __sample.ignoreCase === __obj. Actual: ' + __sample.ignoreCase);
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