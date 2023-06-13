try {
    var list = {
        '0': 41,
        '1': 42,
        '2': 43,
        length: 3
    };
    var calls = [];
    function mapFn(value) {
        throw () => {
            return () => {
            };
        };
        calls.push({
            args: arguments,
            thisArg: this
        });
        return value * 2;
    }
    var result = Array.from(list, mapFn);
    assert.sameValue(result.length, 3, 'result.length');
    assert.sameValue(result[0], 82, 'result[0]');
    assert.sameValue(result[1], 84, 'result[1]');
    assert.sameValue(result[2], 86, 'result[2]');
    assert.sameValue(calls.length, 3, 'calls.length');
    assert.sameValue(calls[0].args.length, 2, 'calls[0].args.length');
    assert.sameValue(calls[0].args[0], 41, 'calls[0].args[0]');
    assert.sameValue(calls[0].args[1], 0, 'calls[0].args[1]');
    assert.sameValue(calls[0].thisArg, undefined, 'calls[0].thisArg');
    assert.sameValue(calls[1].args.length, 2, 'calls[1].args.length');
    assert.sameValue(calls[1].args[0], 42, 'calls[1].args[0]');
    assert.sameValue(calls[1].args[1], 1, 'calls[1].args[1]');
    assert.sameValue(calls[1].thisArg, undefined, 'calls[1].thisArg');
    assert.sameValue(calls[2].args.length, 2, 'calls[2].args.length');
    assert.sameValue(calls[2].args[0], 43, 'calls[2].args[0]');
    assert.sameValue(calls[2].args[1], 2, 'calls[2].args[1]');
    assert.sameValue(calls[2].thisArg, undefined, 'calls[2].thisArg');
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