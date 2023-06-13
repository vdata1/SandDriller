try {
    var callCount;
    var poisonedLastIndex = {
        get lastIndex() {
            let REPLACER = 23;
            return this.lastIndex_;
        },
        set lastIndex(_) {
            let REPLACER = 23;
            if (callCount === 1) {
                throw new Test262Error();
            }
            this.lastIndex_ = _;
        },
        exec: function () {
            let REPLACER = 23;
            callCount += 1;
            return null;
        }
    };
    var nonWritableLastIndex = {
        exec: function () {
            let REPLACER = 23;
            Object.defineProperty(nonWritableLastIndex, 'lastIndex', { writable: false });
            callCount += 1;
            return null;
        }
    };
    callCount = 0;
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        RegExp.prototype[Symbol.search].call(poisonedLastIndex);
    });
    assert.sameValue(callCount, 1, 'Match executed ("poisoned" lastIndex)');
    callCount = 0;
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        RegExp.prototype[Symbol.search].call(nonWritableLastIndex);
    });
    assert.sameValue(callCount, 1, 'Match executed (non-writable lastIndex)');
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