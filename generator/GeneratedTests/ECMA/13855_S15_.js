try {
    var __string = 'Boston, Mass. 02134';
    if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[0] !== '02134') {
        $ERROR('#1: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[0]=== "02134". Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[0]);
    }
    if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[1] !== '02134') {
        $ERROR('#2: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[1]=== "02134". Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[1]);
    }
    if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[2] !== void 0) {
        $ERROR('#3: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[2]=== void 0. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[2]);
    }
    if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).length !== 3) {
        $ERROR('#4: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).length ===3. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).length);
    }
    if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).index !== 14) {
        $ERROR('#5: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).index ===14. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).index);
    }
    if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).input !== __string) {
        $ERROR('#6: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).input ===__string. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).input);
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