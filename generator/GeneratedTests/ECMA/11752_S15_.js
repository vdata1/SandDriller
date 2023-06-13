try {
    var hex = [
        '\\x41',
        '\\x42',
        '\\x43',
        '\\x44',
        '\\x45',
        '\\x46',
        '\\x47',
        '\\x48',
        '\\x49',
        '\\x4A',
        '\\x4B',
        '\\x4C',
        '\\x4D',
        '\\x4E',
        '\\x4F',
        '\\x50',
        '\\x51',
        '\\x52',
        '\\x53',
        '\\x54',
        '\\x55',
        '\\x56',
        '\\x57',
        '\\x58',
        '\\x59',
        '\\x5A'
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
        '\\x61',
        '\\x62',
        '\\x63',
        '\\x64',
        '\\x65',
        '\\x66',
        '\\x67',
        '\\x68',
        '\\x69',
        '\\x6A',
        '\\x6B',
        '\\x6C',
        '\\x6D',
        '\\x6E',
        '\\x6F',
        '\\x70',
        '\\x71',
        '\\x72',
        '\\x73',
        '\\x74',
        '\\x75',
        '\\x76',
        '\\x77',
        '\\x78',
        '\\x79',
        '\\x7A'
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