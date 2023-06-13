try {
    var dataView = new DataView(new ArrayBuffer(8), 0);
    var poisoned = {
        valueOf: function () {
            let REPLACER = 23;
            throw new Test262Error('valueOf called');
        }
    };
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        dataView.setInt32(-1.5, poisoned);
    }, 'setInt32(-1.5, poisoned)');
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        dataView.setInt32(-1, poisoned);
    }, 'setInt32(-1, poisoned)');
    assert.throws(RangeError, function () {
        dataView.setInt32(-Infinity, poisoned);
    }, 'setInt32(-Infinity, poisoned)');
    assert.throws(RangeError, function () {
        dataView.setInt32(Infinity, poisoned);
    }, 'setInt32(Infinity, poisoned)');
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