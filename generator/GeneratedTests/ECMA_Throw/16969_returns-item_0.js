try {
    assert.sameValue(typeof TypedArray.prototype.at, 'function', 'The value of `typeof TypedArray.prototype.at` is "function"');
    testWithTypedArrayConstructors(TA => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(typeof TA.prototype.at, 'function', 'The value of `typeof TA.prototype.at` is "function"');
        let a = new TA([
            1,
            2,
            3,
            4
        ]);
        assert.sameValue(a.at(0), 1, 'a.at(0) must return 1');
        assert.sameValue(a.at(1), 2, 'a.at(1) must return 2');
        assert.sameValue(a.at(2), 3, 'a.at(2) must return 3');
        assert.sameValue(a.at(3), 4, 'a.at(3) must return 4');
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