try {
    if (eval('true\t!=\t1') !== false) {
        $ERROR('#1: (true\\u0009!=\\u00091) === false');
    }
    if (eval('true\x0B!=\x0B1') !== false) {
        $ERROR('#2: (true\\u000B!=\\u000B1) === false');
    }
    if (eval('true\f!=\f1') !== false) {
        $ERROR('#3: (true\\u000C!=\\u000C1) === false');
    }
    if (eval('true != 1') !== false) {
        $ERROR('#4: (true\\u0020!=\\u00201) === false');
    }
    if (eval('true\xA0!=\xA01') !== false) {
        $ERROR('#5: (true\\u00A0!=\\u00A01) === false');
    }
    if (eval('true\n!=\n1') !== false) {
        $ERROR('#6: (true\\u000A!=\\u000A1) === false');
    }
    if (eval('true\r!=\r1') !== false) {
        $ERROR('#7: (true\\u000D!=\\u000D1) === false');
    }
    if (eval('true\u2028!=\u20281') !== false) {
        $ERROR('#8: (true\\u2028!=\\u20281) === false');
    }
    if (eval('true\u2029!=\u20291') !== false) {
        $ERROR('#9: (true\\u2029!=\\u20291) === false');
    }
    if (eval('true\t\x0B\f \xA0\n\r\u2028\u2029!=\t\x0B\f \xA0\n\r\u2028\u20291') !== false) {
        $ERROR('#10: (true\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029!=\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291) === false');
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