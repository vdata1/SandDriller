try {
    var obj = { 'a': 'a' };
    Object.defineProperty(obj, 'b', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return 'b';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(obj, 'c', {
        get: function () {
            return 'c';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(obj, 'd', {
        value: 'd',
        enumerable: false,
        configurable: true
    });
    var actual = Object.getOwnPropertyNames(obj);
    var expected = [
        'a',
        'b',
        'c',
        'd'
    ];
    assert(compareArray(actual, expected), 'compareArray(actual, expected) !== true');
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