try {
    var hex = [
        '\\u0041',
        '\\u0042',
        '\\u0043',
        '\\u0044',
        '\\u0045',
        '\\u0046',
        '\\u0047',
        '\\u0048',
        '\\u0049',
        '\\u004A',
        '\\u004B',
        '\\u004C',
        '\\u004D',
        '\\u004E',
        '\\u004F',
        '\\u0050',
        '\\u0051',
        '\\u0052',
        '\\u0053',
        '\\u0054',
        '\\u0055',
        '\\u0056',
        '\\u0057',
        '\\u0058',
        '\\u0059',
        '\\u005A'
    ];
    var character = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
    ];
    var result = true;
    for (var index = 0; index < hex.length; index++) {
        var arr = new RegExp(hex[index]).exec(character[index]);
        if (arr === null || arr[0] !== character[index]) {
            result = false;
        }
    }
    if (result !== true) {
        $ERROR('#1: ENGLISH CAPITAL ALPHABET');
    }
    hex = [
        '\\u0061',
        '\\u0062',
        '\\u0063',
        '\\u0064',
        '\\u0065',
        '\\u0066',
        '\\u0067',
        '\\u0068',
        '\\u0069',
        '\\u006A',
        '\\u006B',
        '\\u006C',
        '\\u006D',
        '\\u006E',
        '\\u006F',
        '\\u0070',
        '\\u0071',
        '\\u0072',
        '\\u0073',
        '\\u0074',
        '\\u0075',
        '\\u0076',
        '\\u0077',
        '\\u0078',
        '\\u0079',
        '\\u007A'
    ];
    character = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    var result = true;
    for (index = 0; index < hex.length; index++) {
        arr = new RegExp(hex[index]).exec(character[index]);
        if (arr === null || arr[0] !== character[index]) {
            result = false;
        }
    }
    if (result !== true) {
        $ERROR('#1: english small alphabet');
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