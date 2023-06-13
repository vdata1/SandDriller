try {
    const minDateStr = '-271821-04-20T00:00:00.000Z';
    const minDate = new Date(-8640000000000000);
    assert.sameValue(minDate.toISOString(), minDateStr, 'minDateStr');
    assert.sameValue(Date.parse(minDateStr), minDate.valueOf(), 'parse minDateStr');
    const maxDateStr = '+275760-09-13T00:00:00.000Z';
    const maxDate = new Date(8640000000000000);
    assert.sameValue(maxDate.toISOString(), maxDateStr, 'maxDateStr');
    assert.sameValue(Date.parse(maxDateStr), maxDate.valueOf(), 'parse maxDateStr');
    const belowRange = '-271821-04-19T23:59:59.999Z';
    const aboveRange = '+275760-09-13T00:00:00.001Z';
    assert.sameValue(Date.parse(belowRange), NaN, 'parse below minimum time value');
    assert.sameValue(Date.parse(aboveRange), NaN, 'parse above maximum time value');
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