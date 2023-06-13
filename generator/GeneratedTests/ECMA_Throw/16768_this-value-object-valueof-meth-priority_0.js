try {
    var toPrimitiveAccessed = 0;
    var toStringAccessed = 0;
    var valueOfAccessed = 0;
    var thisVal = {
        get [Symbol.toPrimitive]() {
            throw () => {
                return () => {
                };
            };
            toPrimitiveAccessed += 1;
            return undefined;
        },
        get toString() {
            toStringAccessed += 1;
            return undefined;
        },
        get valueOf() {
            valueOfAccessed += 1;
            return function () {
                return ' 42';
            };
        }
    };
    var result = String.prototype.trimStart.call(thisVal);
    assert.sameValue(valueOfAccessed, 1, 'thisVal.toString expected to have been accessed.');
    assert.sameValue(result, '42', 'thisVal.valueOf expected to have been called.');
    assert.sameValue(toPrimitiveAccessed, 1, 'thisVal[Symbol.toPrimitive should have been accessed.');
    assert.sameValue(toStringAccessed, 1, 'thisVal[Symbol.toString should have been accessed.');
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