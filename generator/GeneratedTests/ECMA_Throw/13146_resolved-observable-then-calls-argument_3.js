try {
    var value = {};
    Promise.resolve(value).finally(function () {
        let REPLACER = 23;
    }).then(() => {
        let REPLACER = 23;
        return $DONE();
    }, $DONE);
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
    Promise.prototype.then = function (resolve) {
        let REPLACER = 23;
        assert.sameValue(isConstructor(resolve), false, 'isConstructor(resolve) must return false');
        assert.throws(TypeError, () => {
            throw () => {
                return () => {
                };
            };
            new resolve();
        }, '`new resolve()` throws TypeError');
        assert.sameValue(resolve.length, expected[calls].length, 'The value of resolve.length is expected to equal the value of expected[calls].length');
        assert.sameValue(resolve.name, expected[calls].name, 'The value of resolve.name is expected to equal the value of expected[calls].name');
        if (calls === 0) {
            assert.sameValue(resolve(), value, 'resolve() must return the value of value');
        }
        calls += 1;
        return then.call(this, resolve);
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