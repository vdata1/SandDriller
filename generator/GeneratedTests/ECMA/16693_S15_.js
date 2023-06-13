try {
    var n;
    var count = 0;
    var errorCount = 0;
    var uspU = [
        '\u1680',
        '\u2000',
        '\u2001',
        '\u2002',
        '\u2003',
        '\u2004',
        '\u2005',
        '\u2006',
        '\u2007',
        '\u2008',
        '\u2009',
        '\u200A',
        '\u202F',
        '\u205F',
        '\u3000'
    ];
    var uspS = [
        '1680',
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '200A',
        '202F',
        '205F',
        '3000'
    ];
    for (var index = 0; index < uspU.length; index++) {
        var result = true;
        n = false;
        if (parseFloat(uspU[index] + '1.1') !== parseFloat('1.1')) {
            $ERROR('#1.' + uspS[index] + ' ');
            result = false;
        }
        if (parseFloat(uspU[index] + uspU[index] + uspU[index] + '1.1') !== parseFloat('1.1')) {
            $ERROR('#2.' + uspS[index] + ' ');
            result = false;
        }
        n = parseFloat(uspU[index]);
        if (!(n !== n)) {
            $ERROR('#3.' + uspS[index] + ' ');
            result = false;
        }
        if (result !== true) {
            errorCount++;
        }
        count++;
    }
    if (errorCount > 0) {
        $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count);
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