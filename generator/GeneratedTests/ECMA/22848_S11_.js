try {
    if (eval('Number\t.\tPOSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#1: Number\\u0009.\\u0009POSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\x0B.\x0BPOSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#2: Number\\u000B.\\u000BPOSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\f.\fPOSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#3: Number\\u000C.\\u000CPOSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number . POSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#4: Number\\u0020.\\u0020POSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\xA0.\xA0POSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#5: Number\\u00A0.\\u00A0POSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\n.\nPOSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#6: Number\\u000A.\\u000APOSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\r.\rPOSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#7: Number\\u000D.\\u000DPOSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\u2028.\u2028POSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#8: Number\\u2028.\\u2028POSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\u2029.\u2029POSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#9: Number\\u2029.\\u2029POSITIVE_INFINITY === Number.POSITIVE_INFINITY');
    }
    if (eval('Number\t\x0B\f \xA0\n\r\u2028\u2029.\t\x0B\f \xA0\n\r\u2028\u2029POSITIVE_INFINITY') !== Number.POSITIVE_INFINITY) {
        $ERROR('#10: Number\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029.\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029POSITIVE_INFINITY === Number.POSITIVE_INFINITY');
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