try {
    let length = 'outer';
    var callCount = 0;
    var f;
    f = ([...{
            0: v,
            1: w,
            2: x,
            3: y,
            length: z
        }] = [
        7,
        8,
        9
    ]) => {
        assert.sameValue(v, 7);
        assert.sameValue(w, 8);
        assert.sameValue(x, 9);
        assert.sameValue(y, undefined);
        assert.sameValue(z, 3);
        assert.sameValue(length, 'outer', 'the length prop is not set as a binding name');
        callCount = callCount + 1;
    };
    f();
    assert.sameValue(callCount, 1, 'arrow function invoked exactly once');
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