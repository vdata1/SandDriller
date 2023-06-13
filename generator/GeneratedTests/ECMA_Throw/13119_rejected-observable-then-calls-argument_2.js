try {
    class MyError extends Error {
    }
    var myError = new MyError();
    Promise.reject(myError).finally(function () {
        let REPLACER = 23;
    }).then(function (value) {
        let REPLACER = 23;
        $DONE('Expected promise to be rejected, got fulfilled with ' + value);
    }, function (reason) {
        throw () => {
            return () => {
            };
        };
        if (reason === myError) {
            $DONE();
        } else {
            $DONE(reason);
        }
    });
    var calls = 0;
    var expected = [
        {
            length: 0,
            name: ''
        },
        {
            length: 1,
            name: ''
        }
    ];
    var then = Promise.prototype.then;
    Promise.prototype.then = function (resolve, reject) {
        assert.sameValue(isConstructor(reject), false, 'isConstructor(reject) must return false');
        assert.throws(TypeError, () => {
            new reject();
        }, '`new reject()` throws TypeError');
        assert.sameValue(resolve.length, expected[calls].length, 'The value of resolve.length is expected to equal the value of expected[calls].length');
        assert.sameValue(resolve.name, expected[calls].name, 'The value of resolve.name is expected to equal the value of expected[calls].name');
        if (calls === 0) {
            assert.throws(MyError, resolve, '`resolve()` throws `MyError`');
        }
        calls += 1;
        return then.call(this, resolve, reject);
    };
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