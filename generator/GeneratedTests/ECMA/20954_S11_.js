try {
    if (eval('false\t?\ttrue\t:\ttrue') !== true) {
        $ERROR('#1: (false\\u0009?\\u0009true\\u0009:\\u0009true) === true');
    }
    if (eval('false\x0B?\x0Btrue\x0B:\x0Btrue') !== true) {
        $ERROR('#2: (false\\u000B?\\u000Btrue\\u000B:\\u000Btrue) === true');
    }
    if (eval('false\f?\ftrue\f:\ftrue') !== true) {
        $ERROR('#3: (false\\u000C?\\u000Ctrue\\u000C:\\u000Ctrue) === true');
    }
    if (eval('false ? true : true') !== true) {
        $ERROR('#4: (false\\u0020?\\u0020true\\u0020:\\u0020true) === true');
    }
    if (eval('false\xA0?\xA0true\xA0:\xA0true') !== true) {
        $ERROR('#5: (false\\u00A0?\\u00A0true\\u00A0:\\u00A0true) === true');
    }
    if (eval('false\n?\ntrue\n:\ntrue') !== true) {
        $ERROR('#6: (false\\u000A?\\u000Atrue\\u000A:\\u000Atrue) === true');
    }
    if (eval('false\r?\rtrue\r:\rtrue') !== true) {
        $ERROR('#7: (false\\u000D?\\u000Dtrue\\u000D:\\u000Dtrue) === true');
    }
    if (eval('false\u2028?\u2028true\u2028:\u2028true') !== true) {
        $ERROR('#8: (false\\u2028?\\u2028true\\u2028:\\u2028true) === true');
    }
    if (eval('false\u2029?\u2029true\u2029:\u2029true') !== true) {
        $ERROR('#9: (false\\u2029?\\u2029true\\u2029:\\u2029true) === true');
    }
    if (eval('false\t\x0B\f \xA0\n\r\u2028\u2029?\t\x0B\f \xA0\n\r\u2028\u2029true\t\x0B\f \xA0\n\r\u2028\u2029:\t\x0B\f \xA0\n\r\u2028\u2029true') !== true) {
        $ERROR('#10: (false\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029?\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029true\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029:\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029true) === true');
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