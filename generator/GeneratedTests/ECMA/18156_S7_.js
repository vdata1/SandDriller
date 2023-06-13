try {
    var errorCount = 0;
    var count = 0;
    var hex = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ];
    for (var i1 = 0; i1 < 16; i1++) {
        for (var i2 = 0; i2 < 16; i2++) {
            for (var i3 = 0; i3 < 16; i3++) {
                for (var i4 = 0; i4 < 16; i4++) {
                    try {
                        var uu = hex[i1] + hex[i2] + hex[i3] + hex[i4];
                        var xx = String.fromCharCode('0x' + uu);
                        var LineTerminators = uu === '000A' || uu === '000D' || uu === '2028' || uu === '2029';
                        var yy = 0;
                        eval('//var ' + xx + 'yy = -1');
                        if (LineTerminators !== true) {
                            if (yy !== 0) {
                                $ERROR('#' + uu + ' ');
                                errorCount++;
                            }
                        } else {
                            if (yy !== -1) {
                                $ERROR('#' + uu + ' ');
                                errorCount++;
                            }
                        }
                    } catch (e) {
                        $ERROR('#' + uu + ' ');
                        errorCount++;
                    }
                    count++;
                }
            }
        }
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