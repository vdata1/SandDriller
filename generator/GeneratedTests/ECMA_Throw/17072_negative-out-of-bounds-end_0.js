try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(0, 1, -10), [
            0,
            1,
            2,
            3
        ]), '[0, 1, 2, 3].copyWithin(0, 1, -10) -> [0, 1, 2, 3]');
        assert(compareArray(new TA([
            1,
            2,
            3,
            4,
            5
        ]).copyWithin(0, 1, -Infinity), [
            1,
            2,
            3,
            4,
            5
        ]), '[1, 2, 3, 4, 5].copyWithin(0, 1, -Infinity) -> [1, 2, 3, 4, 5]');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(0, -2, -10), [
            0,
            1,
            2,
            3
        ]), '[0, 1, 2, 3].copyWithin(0, -2, -10) -> [0, 1, 2, 3]');
        assert(compareArray(new TA([
            1,
            2,
            3,
            4,
            5
        ]).copyWithin(0, -2, -Infinity), [
            1,
            2,
            3,
            4,
            5
        ]), '[1, 2, 3, 4, 5].copyWithin(0, -2, -Infinity) -> [1, 2, 3, 4, 5]');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(0, -9, -10), [
            0,
            1,
            2,
            3
        ]), '[0, 1, 2, 3].copyWithin(0, -9, -10) -> [0, 1, 2, 3]');
        assert(compareArray(new TA([
            1,
            2,
            3,
            4,
            5
        ]).copyWithin(0, -9, -Infinity), [
            1,
            2,
            3,
            4,
            5
        ]), '[1, 2, 3, 4, 5].copyWithin(0, -9, -Infinity) -> [1, 2, 3, 4, 5]');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(-3, -2, -10), [
            0,
            1,
            2,
            3
        ]), '[0, 1, 2, 3].copyWithin(-3, -2, -10) -> [0, 1, 2, 3]');
        assert(compareArray(new TA([
            1,
            2,
            3,
            4,
            5
        ]).copyWithin(-3, -2, -Infinity), [
            1,
            2,
            3,
            4,
            5
        ]), '[1, 2, 3, 4, 5].copyWithin(-3, -2, -Infinity) -> [1, 2, 3, 4, 5]');
        assert(compareArray(new TA([
            0,
            1,
            2,
            3
        ]).copyWithin(-7, -8, -9), [
            0,
            1,
            2,
            3
        ]), '[0, 1, 2, 3].copyWithin(-7, -8, -9) -> [0, 1, 2, 3]');
        assert(compareArray(new TA([
            1,
            2,
            3,
            4,
            5
        ]).copyWithin(-7, -8, -Infinity), [
            1,
            2,
            3,
            4,
            5
        ]), '[1, 2, 3, 4, 5].copyWithin(-7, -8, -Infinity) -> [1, 2, 3, 4, 5]');
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