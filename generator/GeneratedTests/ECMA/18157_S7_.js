try {
    var errorCount = 0;
    var count = 0;
    for (var indexI = 0; indexI <= 65535; indexI++) {
        try {
            var xx = 0;
            eval('/*var ' + String.fromCharCode(indexI) + 'xx = 1*/');
            var hex = decimalToHexString(indexI);
            if (xx !== 0) {
                $ERROR('#' + hex + ' ');
                errorCount++;
            }
        } catch (e) {
            $ERROR('#' + hex + ' ');
            errorCount++;
        }
        count++;
    }
    if (errorCount > 0) {
        $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count);
    }
    function decimalToHexString(n) {
        n = Number(n);
        var h = '';
        for (var i = 3; i >= 0; i--) {
            if (n >= Math.pow(16, i)) {
                var t = Math.floor(n / Math.pow(16, i));
                n -= t * Math.pow(16, i);
                if (t >= 10) {
                    if (t == 10) {
                        h += 'A';
                    }
                    if (t == 11) {
                        h += 'B';
                    }
                    if (t == 12) {
                        h += 'C';
                    }
                    if (t == 13) {
                        h += 'D';
                    }
                    if (t == 14) {
                        h += 'E';
                    }
                    if (t == 15) {
                        h += 'F';
                    }
                } else {
                    h += String(t);
                }
            } else {
                h += '0';
            }
        }
        return h;
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