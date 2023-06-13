try {
    var quickIter = {};
    var exprValue, nextReceived, done, iter;
    quickIter[Symbol.iterator] = function () {
        return {
            next: function (x) {
                nextReceived = x;
                return {
                    done: done,
                    value: 3333
                };
            }
        };
    };
    function* g() {
        exprValue = yield* quickIter;
    }
    done = true;
    iter = g();
    iter.next(4444);
    assert.sameValue(nextReceived, undefined, 'received value (previously-exhausted iterator)');
    assert.sameValue(exprValue, 3333, 'expression value (previously-exhausted iterator)');
    done = false;
    exprValue = null;
    iter = g();
    iter.next(2222);
    done = true;
    iter.next(5555);
    assert.sameValue(nextReceived, 5555, 'received value');
    assert.sameValue(exprValue, 3333, 'expression value');
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