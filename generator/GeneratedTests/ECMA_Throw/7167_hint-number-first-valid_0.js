try {
    var voCallCount = 0;
    var tsAccessCount = 0;
    var obj = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            voCallCount += 1;
            return 'valueOf test262';
        },
        get toString() {
            tsAccessCount += 1;
        }
    };
    assert.sameValue(Date.prototype[Symbol.toPrimitive].call(obj, 'number'), 'valueOf test262');
    assert.sameValue(voCallCount, 1, '`valueOf` method was invoked exactly once');
    assert.sameValue(tsAccessCount, 0, '`toString` method was not referenced');
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