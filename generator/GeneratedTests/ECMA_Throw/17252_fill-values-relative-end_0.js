try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, 0, 1), [
            8,
            0,
            0
        ]), 'Fill elements from custom end position');
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, 0, -1), [
            8,
            8,
            0
        ]), 'negative end sets final position to max((length + relativeEnd), 0)');
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, 0, 5), [
            8,
            8,
            8
        ]), 'end position is never higher than of length');
        assert(compareArray(new TA([
            0,
            0,
            0
        ]).fill(8, 0, -4), [
            0,
            0,
            0
        ]), 'end position is 0 when (len + relativeEnd) < 0');
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