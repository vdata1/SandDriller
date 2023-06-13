try {
    var nullChars = new Array();
    nullChars[0] = '"\0"';
    nullChars[1] = '"\x01"';
    nullChars[2] = '"\x02"';
    nullChars[3] = '"\x03"';
    nullChars[4] = '"\x04"';
    nullChars[5] = '"\x05"';
    nullChars[6] = '"\x06"';
    nullChars[7] = '"\x07"';
    nullChars[8] = '"\b"';
    nullChars[9] = '"\t"';
    nullChars[10] = '"\n"';
    nullChars[11] = '"\x0B"';
    nullChars[12] = '"\f"';
    nullChars[13] = '"\r"';
    nullChars[14] = '"\x0E"';
    nullChars[15] = '"\x0F"';
    nullChars[16] = '"\x10"';
    nullChars[17] = '"\x11"';
    nullChars[18] = '"\x12"';
    nullChars[19] = '"\x13"';
    nullChars[20] = '"\x14"';
    nullChars[21] = '"\x15"';
    nullChars[22] = '"\x16"';
    nullChars[23] = '"\x17"';
    nullChars[24] = '"\x18"';
    nullChars[25] = '"\x19"';
    nullChars[26] = '"\x1A"';
    nullChars[27] = '"\x1B"';
    nullChars[28] = '"\x1C"';
    nullChars[29] = '"\x1D"';
    nullChars[30] = '"\x1E"';
    nullChars[31] = '"\x1F"';
    for (var index in nullChars) {
        assert.throws(SyntaxError, function () {
            throw () => {
                return () => {
                };
            };
            var obj = JSON.parse('{ "name" : ' + nullChars[index] + ' } ');
        });
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