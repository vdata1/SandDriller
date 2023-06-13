try {
    var alphabetR = [
        'z',
        'y',
        'x',
        'w',
        'v',
        'u',
        't',
        's',
        'r',
        'q',
        'p',
        'o',
        'n',
        'M',
        'L',
        'K',
        'J',
        'I',
        'H',
        'G',
        'F',
        'E',
        'D',
        'C',
        'B',
        'A'
    ];
    var alphabet = [
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
    var myComparefn = function (x, y) {
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
        $ERROR('#1: CHECK ENGLISH ALPHABET');
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