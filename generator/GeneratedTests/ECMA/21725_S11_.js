try {
    if (eval('(\t1\t)') !== 1) {
        $ERROR('#1: (\\u00091\\u0009) === 1');
    }
    if (eval('(\x0B1\x0B)') !== 1) {
        $ERROR('#2: (\\u000B1\\u000B) === 1');
    }
    if (eval('(\f1\f)') !== 1) {
        $ERROR('#3: (\\u000C1\\u000C) === 1');
    }
    if (eval('( 1 )') !== 1) {
        $ERROR('#4: (\\u00201\\u0020 === 1');
    }
    if (eval('(\xA01\xA0)') !== 1) {
        $ERROR('#5: (\\u00A01\\u00A0) === 1');
    }
    if (eval('(\n1\n)') !== 1) {
        $ERROR('#6: (\\u000A1\\u000A) === 1');
    }
    if (eval('(\r1\r)') !== 1) {
        $ERROR('#7: (\\u000D1\\u000D) === 1');
    }
    if (eval('(\u20281\u2028)') !== 1) {
        $ERROR('#8: (\\u20281\\u2028) === 1');
    }
    if (eval('(\u20291\u2029)') !== 1) {
        $ERROR('#9: (\\u20291\\u2029) === 1');
    }
    if (eval('(\t\x0B\f \xA0\n\r\u2028\u20291\t\x0B\f \xA0\n\r\u2028\u2029)') !== 1) {
        $ERROR('#10: (\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029) === 1');
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