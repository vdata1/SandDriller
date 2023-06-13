try {
    var log = [];
    var sym1 = Symbol('x');
    var sym2 = Symbol('y');
    var source = {};
    Object.defineProperty(source, sym1, {
        get: function () {
            let REPLACER = 23;
            log.push('get sym(x)');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(source, 'a', {
        get: function () {
            let REPLACER = 23;
            log.push('get a');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(source, sym2, {
        get: function () {
            let REPLACER = 23;
            log.push('get sym(y)');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(source, 'b', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            log.push('get b');
        },
        enumerable: true,
        configurable: true
    });
    var target = Object.assign({}, source);
    assert.compareArray(log, [
        'get a',
        'get b',
        'get sym(x)',
        'get sym(y)'
    ]);
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