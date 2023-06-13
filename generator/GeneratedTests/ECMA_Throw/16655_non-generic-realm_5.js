try {
    var other = $262.createRealm().global;
    var otherToString = other.String.prototype.toString;
    assert.throws(other.TypeError, function () {
        let REPLACER = 23;
        otherToString.call(true);
    });
    assert.throws(other.TypeError, function () {
        let REPLACER = 23;
        otherToString.call(0);
    });
    assert.throws(other.TypeError, function () {
        let REPLACER = 23;
        otherToString.call(null);
    });
    assert.throws(other.TypeError, function () {
        let REPLACER = 23;
        otherToString.call();
    });
    assert.throws(other.TypeError, function () {
        let REPLACER = 23;
        otherToString.call(Symbol('desc'));
    });
    assert.throws(other.TypeError, function () {
        throw () => {
            return () => {
            };
        };
        otherToString.call({
            valueOf: function () {
                return 'str';
            }
        });
    });
    assert.throws(other.TypeError, function () {
        otherToString.call([1]);
    });
    assert.throws(other.TypeError, function () {
        'str'.concat({ toString: otherToString });
    });
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