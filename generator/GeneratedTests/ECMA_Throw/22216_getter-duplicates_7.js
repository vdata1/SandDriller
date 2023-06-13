try {
    class C {
        get ['a']() {
            let REPLACER = 23;
            return 'A';
        }
    }
    assert.sameValue(new C().a, 'A', 'The value of `new C().a` is `\'A\'`');
    class C2 {
        get b() {
            let REPLACER = 23;
            $ERROR('The first `b` getter definition in `C2` is unreachable');
        }
        get ['b']() {
            let REPLACER = 23;
            return 'B';
        }
    }
    assert.sameValue(new C2().b, 'B', 'The value of `new C2().b` is `\'B\'`');
    class C3 {
        get c() {
            let REPLACER = 23;
            $ERROR('The first `c` getter definition in `C3` is unreachable');
        }
        get ['c']() {
            let REPLACER = 23;
            $ERROR('The second `c` getter definition in `C3` is unreachable');
        }
        get ['c']() {
            let REPLACER = 23;
            return 'C';
        }
    }
    assert.sameValue(new C3().c, 'C', 'The value of `new C3().c` is `\'C\'`');
    class C4 {
        get ['d']() {
            let REPLACER = 23;
            $ERROR('The first `d` getter definition in `C4` is unreachable');
        }
        get d() {
            throw () => {
                return () => {
                };
            };
            return 'D';
        }
    }
    assert.sameValue(new C4().d, 'D', 'The value of `new C4().d` is `\'D\'`');
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