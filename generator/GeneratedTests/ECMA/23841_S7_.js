try {
    if ('\x01F' !== String.fromCharCode('1') + 'F') {
        $ERROR('#1: "\\u0001F" === String.fromCharCode("1") + "F"');
    }
    if ('\x02E' !== String.fromCharCode('2') + 'E') {
        $ERROR('#2: "\\u0002E" === String.fromCharCode("2") + "E"');
    }
    if ('\x03D' !== String.fromCharCode('3') + 'D') {
        $ERROR('#3: "\\u0003D" === String.fromCharCode("3") + "D"');
    }
    if ('\x04C' !== String.fromCharCode('4') + 'C') {
        $ERROR('#4: "\\u0004C" === String.fromCharCode("4") + "C"');
    }
    if ('\x05B' !== String.fromCharCode('5') + 'B') {
        $ERROR('#5: "\\u0005B" === String.fromCharCode("5") + "B"');
    }
    if ('\x06A' !== String.fromCharCode('6') + 'A') {
        $ERROR('#6: "\\u0006A" === String.fromCharCode("6") + "A"');
    }
    if ('\x079' !== String.fromCharCode('7') + '9') {
        $ERROR('#7: "\\u00079" === String.fromCharCode("7") + "9"');
    }
    if ('\b8' !== String.fromCharCode('8') + '8') {
        $ERROR('#8: "\\u00088" === String.fromCharCode("8") + "8"');
    }
    if ('\t7' !== String.fromCharCode('9') + '7') {
        $ERROR('#9: "\\u00097" === String.fromCharCode("9") + "7"');
    }
    if ('\n6' !== String.fromCharCode('10') + '6') {
        $ERROR('#A: "\\u000A6" === String.fromCharCode("10") + "6"');
    }
    if ('\x0B5' !== String.fromCharCode('11') + '5') {
        $ERROR('#B: "\\u000B5" === String.fromCharCode("11") + "5"');
    }
    if ('\f4' !== String.fromCharCode('12') + '4') {
        $ERROR('#C: "\\u000C4" === String.fromCharCode("12") + "4"');
    }
    if ('\r3' !== String.fromCharCode('13') + '3') {
        $ERROR('#D: "\\u000D3" === String.fromCharCode("13") + "3"');
    }
    if ('\x0E2' !== String.fromCharCode('14') + '2') {
        $ERROR('#E: "\\u000E2" === String.fromCharCode("14") + "2"');
    }
    if ('\x0F1' !== String.fromCharCode('15') + '1') {
        $ERROR('#F: "\\u000F1" === String.fromCharCode("15") + "1"');
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