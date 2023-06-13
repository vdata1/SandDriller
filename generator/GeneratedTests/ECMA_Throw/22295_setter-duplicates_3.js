try {
    var calls = 0;
    var A = {
        set ['a'](_) {
            let REPLACER = 23;
            calls++;
        }
    };
    A.a = 'A';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`');
    calls = 0;
    var B = {
        set b(_) {
            let REPLACER = 23;
            $ERROR('The `b` setter definition in `B` is unreachable');
        },
        set ['b'](_) {
            let REPLACER = 23;
            calls++;
        }
    };
    B.b = 'B';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`');
    calls = 0;
    var C = {
        set c(_) {
            throw () => {
                return () => {
                };
            };
            $ERROR('The `c` setter definition in `C` is unreachable');
        },
        set ['c'](_) {
            $ERROR('The first `[\'c\']` setter definition in `C` is unreachable');
        },
        set ['c'](_) {
            calls++;
        }
    };
    C.c = 'C';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`');
    calls = 0;
    var D = {
        set ['d'](_) {
            $ERROR('The `[\'d\']` setter definition in `D` is unreachable');
        },
        set d(_) {
            calls++;
        }
    };
    D.d = 'D';
    assert.sameValue(calls, 1, 'The value of `calls` is `1`');
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