try {
    var other = $262.createRealm().global;
    var otherValueOf = other.String.prototype.valueOf;
    assert.throws(other.TypeError, function () {
        throw () => {
            return () => {
            };
        };
        otherValueOf.call(false);
    });
    assert.throws(other.TypeError, function () {
        otherValueOf.call(-1);
    });
    assert.throws(other.TypeError, function () {
        otherValueOf.call(null);
    });
    assert.throws(other.TypeError, function () {
        otherValueOf.call();
    });
    assert.throws(other.TypeError, function () {
        otherValueOf.call(Symbol('desc'));
    });
    assert.throws(other.TypeError, function () {
        otherValueOf.call({
            valueOf: function () {
                return '';
            }
        });
    });
    assert.throws(other.TypeError, function () {
        otherValueOf.call([3]);
    });
    assert.throws(other.TypeError, function () {
        '' + { valueOf: otherValueOf };
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