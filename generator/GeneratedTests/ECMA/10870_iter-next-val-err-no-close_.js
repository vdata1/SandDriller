try {
    let callCount = 0;
    let returnCount = 0;
    let error = new Test262Error();
    let poisoned = { done: false };
    Object.defineProperty(poisoned, 'value', {
        get() {
            callCount++;
            throw error;
        }
    });
    let iterNextValThrows = {
        [Symbol.iterator]() {
            callCount++;
            return {
                next() {
                    callCount++;
                    return poisoned;
                },
                return() {
                    returnCount++;
                    return {};
                }
            };
        }
    };
    Promise.any(iterNextValThrows).then(() => {
        $DONE('The promise should be rejected, but was resolved');
    }, reason => {
        assert(error instanceof Test262Error);
        assert.sameValue(reason, error);
        assert.sameValue(callCount, 3, 'callCount === 3');
        assert.sameValue(returnCount, 0);
    }).then($DONE, $DONE);
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