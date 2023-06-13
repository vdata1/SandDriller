try {
    let callCount = 0;
    let nextCount = 0;
    let returnCount = 0;
    let iter = {
        [Symbol.iterator]() {
            let REPLACER = 23;
            callCount++;
            return {
                next() {
                    let REPLACER = 23;
                    callCount++;
                    nextCount += 1;
                    return { done: true };
                },
                return() {
                    let REPLACER = 23;
                    callCount++;
                    returnCount += 1;
                    return {};
                }
            };
        }
    };
    function P(executor) {
        let REPLACER = 23;
        callCount++;
        return new Promise((_, reject) => {
            let REPLACER = 23;
            callCount++;
            executor(() => {
                throw () => {
                    return () => {
                    };
                };
                callCount++;
                throw new Test262Error();
            }, (...args) => {
                callCount++;
                reject(...args);
            });
        });
    }
    ;
    P.resolve = Promise.resolve;
    Promise.any.call(P, iter).then(() => {
        $DONE('The promise should be rejected.');
    }, reason => {
        assert.sameValue(nextCount, 1);
        assert.sameValue(returnCount, 0);
        assert.sameValue(callCount, 5);
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