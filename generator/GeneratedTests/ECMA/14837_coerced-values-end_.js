try {
    testWithTypedArrayConstructors(function (TA) {
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(1, 0, null), [
            0,
            1,
            2,
            3
        ]), 'null value coerced to 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(1, 0, NaN), [
            0,
            1,
            2,
            3
        ]), 'NaN value coerced to 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(1, 0, false), [
            0,
            1,
            2,
            3
        ]), 'false value coerced to 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(1, 0, true), [
            0,
            0,
            2,
            3
        ]), 'true value coerced to 1');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(1, 0, '-2'), [
            0,
            0,
            1,
            3
        ]), 'string "-2" value coerced to integer -2');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(1, 0, -2.5), [
            0,
            0,
            1,
            3
        ]), 'float -2.5 value coerced to integer -2');
    });
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