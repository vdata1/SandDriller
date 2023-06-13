try {
    if (eval('({})\tinstanceof\tObject') !== true) {
        $ERROR('#1: ({})\\u0009instanceof\\u0009Object === true');
    }
    if (eval('({})\x0Binstanceof\x0BObject') !== true) {
        $ERROR('#2: ({})\\u000Binstanceof\\u000BObject === true');
    }
    if (eval('({})\finstanceof\fObject') !== true) {
        $ERROR('#3: ({})\\u000Cinstanceof\\u000CObject === true');
    }
    if (eval('({}) instanceof Object') !== true) {
        $ERROR('#4: ({})\\u0020instanceof\\u0020Object === true');
    }
    if (eval('({})\xA0instanceof\xA0Object') !== true) {
        $ERROR('#5: ({})\\u00A0instanceof\\u00A0Object === true');
    }
    if (eval('({})\ninstanceof\nObject') !== true) {
        $ERROR('#6: ({})\\u000Ainstanceof\\u000AObject === true');
    }
    if (eval('({})\rinstanceof\rObject') !== true) {
        $ERROR('#7: ({})\\u000Dinstanceof\\u000DObject === true');
    }
    if (eval('({})\u2028instanceof\u2028Object') !== true) {
        $ERROR('#8: ({})\\u2028instanceof\\u2028Object === true');
    }
    if (eval('({})\u2029instanceof\u2029Object') !== true) {
        $ERROR('#9: ({})\\u2029instanceof\\u2029Object === true');
    }
    if (eval('({})\t\x0B\f \xA0\n\r\u2028\u2029instanceof\t\x0B\f \xA0\n\r\u2028\u2029Object') !== true) {
        $ERROR('#10: ({})\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029instanceof\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029Object === true');
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