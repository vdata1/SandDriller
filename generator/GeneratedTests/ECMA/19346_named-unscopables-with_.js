try {
    let count = 0;
    var v = 1;
    globalThis[Symbol.unscopables] = { v: true };
    {
        count++;
        var callCount = 0;
        var ref;
        ref = async function ref(x) {
            count++;
            with (globalThis) {
                count++;
                assert.sameValue(v, undefined, 'The value of `v` is expected to equal `undefined`');
            }
            count++;
            var v = x;
            with (globalThis) {
                count++;
                assert.sameValue(v, 10, 'The value of `v` is 10');
                v = 20;
            }
            assert.sameValue(v, 20, 'The value of `v` is 20');
            assert.sameValue(globalThis.v, 1, 'The value of globalThis.v is 1');
            callCount = callCount + 1;
        };
        ref(10).then(() => {
            assert.sameValue(callCount, 1, 'function invoked exactly once');
        }).then($DONE, $DONE);
        count++;
    }
    assert.sameValue(count, 6, 'The value of `count` is 6');
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