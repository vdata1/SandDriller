try {
    let callCount = 0;
    let error;
    function Constructor(executor) {
        function reject(result) {
            callCount += 1;
            error = result;
        }
        executor(() => {
            throw new Test262Error();
        }, reject);
    }
    Constructor.resolve = function (v) {
        return v;
    };
    let p1OnRejected, p2OnRejected, p3OnRejected;
    let p1 = {
        then(_, onRejected) {
            p1OnRejected = onRejected;
        }
    };
    let p2 = {
        then(_, onRejected) {
            p2OnRejected = onRejected;
        }
    };
    let p3 = {
        then(_, onRejected) {
            p3OnRejected = onRejected;
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to any()');
    Promise.any.call(Constructor, [
        p1,
        p2,
        p3
    ]);
    assert.sameValue(callCount, 0, 'callCount after call to any()');
    p1OnRejected('p1-rejection');
    p1OnRejected('p1-rejection-unexpected-1');
    p1OnRejected('p1-rejection-unexpected-2');
    assert.sameValue(callCount, 0, 'callCount after resolving p1');
    p2OnRejected('p2-rejection');
    p3OnRejected('p3-rejection');
    assert.sameValue(callCount, 1, 'callCount after resolving all elements');
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