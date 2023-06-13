try {
    if (eval('true\t&&\ttrue') !== true) {
        $ERROR('#1: (true\\u0009&&\\u0009true) === true');
    }
    if (eval('true\x0B&&\x0Btrue') !== true) {
        $ERROR('#2: (true\\u000B&&\\u000Btrue) === true');
    }
    if (eval('true\f&&\ftrue') !== true) {
        $ERROR('#3: (true\\u000C&&\\u000Ctrue) === true');
    }
    if (eval('true && true') !== true) {
        $ERROR('#4: (true\\u0020&&\\u0020true) === true');
    }
    if (eval('true\xA0&&\xA0true') !== true) {
        $ERROR('#5: (true\\u00A0&&\\u00A0true) === true');
    }
    if (eval('true\n&&\ntrue') !== true) {
        $ERROR('#6: (true\\u000A&&\\u000Atrue) === true');
    }
    if (eval('true\r&&\rtrue') !== true) {
        $ERROR('#7: (true\\u000D&&\\u000Dtrue) === true');
    }
    if (eval('true\u2028&&\u2028true') !== true) {
        $ERROR('#8: (true\\u2028&&\\u2028true) === true');
    }
    if (eval('true\u2029&&\u2029true') !== true) {
        $ERROR('#9: (true\\u2029&&\\u2029true) === true');
    }
    if (eval('true\t\x0B\f \xA0\n\r\u2028\u2029&&\t\x0B\f \xA0\n\r\u2028\u2029true') !== true) {
        $ERROR('#10: (true\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029&&\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029true) === true');
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