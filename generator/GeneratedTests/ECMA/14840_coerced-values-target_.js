try {
    testWithTypedArrayConstructors(function (TA) {
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(undefined, 1), [
            1,
            2,
            3,
            3
        ]), 'undefined value coerced to 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(false, 1), [
            1,
            2,
            3,
            3
        ]), 'false value coerced to 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(NaN, 1), [
            1,
            2,
            3,
            3
        ]), 'NaN value coerced to 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(null, 1), [
            1,
            2,
            3,
            3
        ]), 'null value coerced to 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(true, 0), [
            0,
            0,
            1,
            2
        ]), 'true value coerced to 1');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin('1', 0), [
            0,
            0,
            1,
            2
        ]), 'string "1" value coerced to 1');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(0.5, 1), [
            1,
            2,
            3,
            3
        ]), '0.5 float value coerced to integer 0');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(1.5, 0), [
            0,
            0,
            1,
            2
        ]), '1.5 float value coerced to integer 1');
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