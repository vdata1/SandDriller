try {
    if (Number('1234567890.1234567890') !== 1234567890.1234567) {
        $ERROR('#1: Number("1234567890.1234567890") === 1234567890.1234567890. Actual: ' + Number('1234567890.1234567890'));
    }
    if (Number('1234567890.1234567890') !== 1234567890.1234567) {
        $ERROR('#2: Number("1234567890.1234567890") === 1234567890.1234567000. Actual: ' + Number('1234567890.1234567890'));
    }
    if (+'1234567890.1234567890' === 1234567890.123456) {
        $ERROR('#3: +("1234567890.1234567890") !== 1234567890.123456');
    }
    if (Number('0.12345678901234567890') !== 0.12345678901234568) {
        $ERROR('#4: Number("0.12345678901234567890") === 0.123456789012345678. Actual: ' + Number('0.12345678901234567890'));
    }
    if (Number('00.12345678901234567890') !== 0.12345678901234568) {
        $ERROR('#4: Number("00.12345678901234567890") === 0.123456789012345678. Actual: ' + Number('00.12345678901234567890'));
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