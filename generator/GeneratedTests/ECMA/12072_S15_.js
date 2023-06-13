try {
    var __re = new RegExp(true, 'm');
    if (__re.ignoreCase !== false) {
        $ERROR('#1: __re = new RegExp(true,"m"); __re.ignoreCase === false. Actual: ' + __re.ignoreCase);
    }
    if (__re.multiline !== true) {
        $ERROR('#2: __re = new RegExp(true,"m"); __re.multiline === true. Actual: ' + __re.multiline);
    }
    if (__re.global !== false) {
        $ERROR('#3: __re = new RegExp(true,"m"); __re.global === false. Actual: ' + __re.global);
    }
    if (__re.lastIndex !== 0) {
        $ERROR('#4: __re = new RegExp(true,"m"); __re.lastIndex === 0. Actual: ' + __re.lastIndex);
    }
    if (typeof __re.source === 'undefined') {
        $ERROR('#5: __re = new RegExp(true,"m"); typeof __re.source !== "undefined"');
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