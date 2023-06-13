try {
    var hex = [
        '\\u0410',
        '\\u0411',
        '\\u0412',
        '\\u0413',
        '\\u0414',
        '\\u0415',
        '\\u0416',
        '\\u0417',
        '\\u0418',
        '\\u0419',
        '\\u041A',
        '\\u041B',
        '\\u041C',
        '\\u041D',
        '\\u041E',
        '\\u041F',
        '\\u0420',
        '\\u0421',
        '\\u0422',
        '\\u0423',
        '\\u0424',
        '\\u0425',
        '\\u0426',
        '\\u0427',
        '\\u0428',
        '\\u0429',
        '\\u042A',
        '\\u042B',
        '\\u042C',
        '\\u042D',
        '\\u042E',
        '\\u042F',
        '\\u0401'
    ];
    var character = [
        'А',
        'Б',
        'В',
        'Г',
        'Д',
        'Е',
        'Ж',
        'З',
        'И',
        'Й',
        'К',
        'Л',
        'М',
        'Н',
        'О',
        'П',
        'Р',
        'С',
        'Т',
        'У',
        'Ф',
        'Х',
        'Ц',
        'Ч',
        'Ш',
        'Щ',
        'Ъ',
        'Ы',
        'Ь',
        'Э',
        'Ю',
        'Я',
        'Ё'
    ];
    var result = true;
    for (var index = 0; index < hex.length; index++) {
        var arr = new RegExp(hex[index]).exec(character[index]);
        if (arr === null || arr[0] !== character[index]) {
            result = false;
        }
    }
    if (result !== true) {
        $ERROR('#1: RUSSIAN CAPITAL ALPHABET');
    }
    hex = [
        '\\u0430',
        '\\u0431',
        '\\u0432',
        '\\u0433',
        '\\u0434',
        '\\u0435',
        '\\u0436',
        '\\u0437',
        '\\u0438',
        '\\u0439',
        '\\u043A',
        '\\u043B',
        '\\u043C',
        '\\u043D',
        '\\u043E',
        '\\u043F',
        '\\u0440',
        '\\u0441',
        '\\u0442',
        '\\u0443',
        '\\u0444',
        '\\u0445',
        '\\u0446',
        '\\u0447',
        '\\u0448',
        '\\u0449',
        '\\u044A',
        '\\u044B',
        '\\u044C',
        '\\u044D',
        '\\u044E',
        '\\u044F',
        '\\u0451'
    ];
    character = [
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
    var result = true;
    for (index = 0; index < hex.length; index++) {
        arr = new RegExp(hex[index]).exec(character[index]);
        if (arr === null || arr[0] !== character[index]) {
            result = false;
        }
    }
    if (result !== true) {
        $ERROR('#1: russian small alphabet');
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