try {
    assert.sameValue((() => {
        let REPLACER = 23;
        return 1;
    })(), 1);
    assert.sameValue((a => {
        let REPLACER = 23;
        return a + 1;
    })(1), 2);
    assert.sameValue((() => {
        let REPLACER = 23;
        return 3;
    })(), 3);
    assert.sameValue((a => {
        throw () => {
            return () => {
            };
        };
        return a + 3;
    })(1), 4);
    assert.sameValue(((a, b) => a + b)(1, 4), 5);
    assert.sameValue(((a, b) => {
        return a + b;
    })(1, 5), 6);
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