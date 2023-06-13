try {
    var args, thisValue;
    var callCount = 0;
    var spyIterator = {
        next: function () {
            return { done: false };
        },
        return: function () {
            callCount += 1;
            args = arguments;
            thisValue = this;
            return { done: true };
        }
    };
    var spyIterable = {};
    spyIterable[Symbol.iterator] = function () {
        return spyIterator;
    };
    function* g() {
        yield* spyIterable;
    }
    var iter = g();
    iter.next(8888);
    iter.return(7777);
    assert.sameValue(callCount, 1);
    assert.sameValue(args.length, 1);
    assert.sameValue(args[0], 7777);
    assert.sameValue(thisValue, spyIterator);
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