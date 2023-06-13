try {
    var maxMs = 8640000000000000;
    var date = new Date(maxMs);
    var returnValue;
    assert.notSameValue(date.getTime(), NaN);
    returnValue = date.setHours(24);
    assert.sameValue(returnValue, NaN, 'overflow due to hours');
    date = new Date(maxMs);
    returnValue = date.setHours(0, 24 * 60);
    assert.sameValue(returnValue, NaN, 'overflow due to minutes');
    date = new Date(maxMs);
    returnValue = date.setHours(0, 0, 24 * 60 * 60);
    assert.sameValue(returnValue, NaN, 'overflow due to seconds');
    date = new Date(maxMs);
    returnValue = date.setHours(0, 0, 0, 24 * 60 * 60 * 1000);
    assert.sameValue(returnValue, NaN, 'overflow due to milliseconds');
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