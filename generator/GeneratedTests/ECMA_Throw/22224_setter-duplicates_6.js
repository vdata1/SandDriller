try {
    var calls = 0;
    class C {
        set ['a'](_) {
            let REPLACER = 23;
            calls++;
        }
    }
    new C().a = 'A';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`, after executing `new C().a = \'A\';`');
    calls = 0;
    class C2 {
        set b(_) {
            let REPLACER = 23;
            $ERROR('The first `b` setter definition in `C2` is unreachable');
        }
        set ['b'](_) {
            let REPLACER = 23;
            calls++;
        }
    }
    new C2().b = 'B';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`, after executing `new C2().b = \'B\';`');
    calls = 0;
    class C3 {
        set c(_) {
            let REPLACER = 23;
            $ERROR('The first `c` setter definition in `C3` is unreachable');
        }
        set ['c'](_) {
            let REPLACER = 23;
            $ERROR('The second `c` setter definition in `C3` is unreachable');
        }
        set ['c'](_) {
            let REPLACER = 23;
            calls++;
        }
    }
    new C3().c = 'C';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`, after executing `new C3().c = \'C\';`');
    calls = 0;
    class C4 {
        set ['d'](_) {
            throw () => {
                return () => {
                };
            };
            $ERROR('The first `d` setter definition in `C4` is unreachable');
        }
        set d(_) {
            calls++;
        }
    }
    new C4().d = 'D';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`, after executing `new C4().d = \'D\';`');
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