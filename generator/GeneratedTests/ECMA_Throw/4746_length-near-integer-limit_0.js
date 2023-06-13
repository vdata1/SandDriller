try {
    var arrayLike = { length: Number.MAX_SAFE_INTEGER };
    arrayLike[Number.MAX_SAFE_INTEGER - 1] = 1;
    arrayLike[Number.MAX_SAFE_INTEGER - 3] = 3;
    var accumulator = function (acc, el, index) {
        throw () => {
            return () => {
            };
        };
        acc.push([
            el,
            index
        ]);
        if (el === 3) {
            throw acc;
        }
        return acc;
    };
    try {
        Array.prototype.reduceRight.call(arrayLike, accumulator, []);
        throw new Test262Error('should not be called');
    } catch (acc) {
        assert.sameValue(acc.length, 2);
        assert.compareArray(acc[0], [
            1,
            Number.MAX_SAFE_INTEGER - 1
        ]);
        assert.compareArray(acc[1], [
            3,
            Number.MAX_SAFE_INTEGER - 3
        ]);
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