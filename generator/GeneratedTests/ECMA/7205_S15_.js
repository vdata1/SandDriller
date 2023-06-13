try {
    try {
        var n = Number.prototype.toString(null);
        $ERROR('#1: Number.prototype.toString(null) should throw an Error');
    } catch (e) {
    }
    try {
        var n = new Number().toString(null);
        $ERROR('#2: (new Number()).toString(null) should throw an Error');
    } catch (e) {
    }
    try {
        var n = new Number(0).toString(null);
        $ERROR('#3: (new Number(0)).toString(null) should throw an Error');
    } catch (e) {
    }
    try {
        var n = new Number(-1).toString(null);
        $ERROR('#4: (new Number(-1)).toString(null) should throw an Error');
    } catch (e) {
    }
    try {
        var n = new Number(1).toString(null);
        $ERROR('#5: (new Number(1)).toString(null) should throw an Error');
    } catch (e) {
    }
    try {
        var n = new Number(Number.NaN).toString(null);
        $ERROR('#6: (new Number(Number.NaN)).toString(null) should throw an Error');
    } catch (e) {
    }
    try {
        var n = new Number(Number.POSITIVE_INFINITY).toString(null);
        $ERROR('#7: (new Number(Number.POSITIVE_INFINITY)).toString(null) should throw an Error');
    } catch (e) {
    }
    try {
        var n = new Number(Number.NEGATIVE_INFINITY).toString(null);
        $ERROR('#8: (new Number(Number.NEGATIVE_INFINITY)).toString(null) should throw an Error');
    } catch (e) {
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