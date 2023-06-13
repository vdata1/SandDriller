try {
    var o = {};
    var count = 0;
    var results, args;
    function fn() {
        count++;
        results = {
            thisArg: this,
            args: arguments
        };
    }
    Reflect.apply(fn, o, [
        'arg1',
        2,
        ,
        null
    ]);
    assert.sameValue(count, 1, 'Called target once');
    assert.sameValue(results.thisArg, o, 'Called target with `o` as `this` object');
    assert.sameValue(results.args.length, 4, 'Called target with 4 arguments');
    assert.sameValue(results.args[0], 'arg1');
    assert.sameValue(results.args[1], 2);
    assert.sameValue(results.args[2], undefined);
    assert.sameValue(results.args[3], null);
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