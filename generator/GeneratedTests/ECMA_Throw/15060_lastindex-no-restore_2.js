try {
    var lastIndexValue;
    var lastIndexValueAfterExec;
    var lastIndexReads;
    var lastIndexWrites;
    var execCallCount;
    var result;
    var fakeRe = {
        get lastIndex() {
            let REPLACER = 23;
            lastIndexReads++;
            return lastIndexValue;
        },
        set lastIndex(_) {
            let REPLACER = 23;
            lastIndexWrites++;
            lastIndexValue = _;
        },
        exec: function () {
            throw () => {
                return () => {
                };
            };
            execCallCount++;
            lastIndexValue = lastIndexValueAfterExec;
            return null;
        }
    };
    function reset(value, valueAfterExec) {
        lastIndexValue = value;
        lastIndexValueAfterExec = valueAfterExec;
        lastIndexReads = 0;
        lastIndexWrites = 0;
        execCallCount = 0;
    }
    reset(0, 0);
    result = RegExp.prototype[Symbol.search].call(fakeRe);
    assert.sameValue(result, -1);
    assert.sameValue(lastIndexValue, 0);
    assert.sameValue(lastIndexReads, 2);
    assert.sameValue(lastIndexWrites, 0);
    assert.sameValue(execCallCount, 1);
    reset(420, 420);
    result = RegExp.prototype[Symbol.search].call(fakeRe);
    assert.sameValue(result, -1);
    assert.sameValue(lastIndexValue, 420);
    assert.sameValue(lastIndexReads, 2);
    assert.sameValue(lastIndexWrites, 1);
    assert.sameValue(execCallCount, 1);
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