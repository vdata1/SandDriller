try {
    assert.sameValue(Date.UTC(-1, 0), -62198755200000, '-1 (no offset)');
    assert.sameValue(Date.UTC(0, 0), -2208988800000, '+0');
    assert.sameValue(Date.UTC(-0, 0), -2208988800000, '-0');
    assert.sameValue(Date.UTC(-0.999999, 0), -2208988800000, '-0.999999');
    assert.sameValue(Date.UTC(70, 0), 0, '70');
    assert.sameValue(Date.UTC(70, 0), 0, '70.999999');
    assert.sameValue(Date.UTC(99, 0), 915148800000, '99');
    assert.sameValue(Date.UTC(99.999999, 0), 915148800000, '99.999999');
    assert.sameValue(Date.UTC(100, 0), -59011459200000, '100 (no offset)');
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