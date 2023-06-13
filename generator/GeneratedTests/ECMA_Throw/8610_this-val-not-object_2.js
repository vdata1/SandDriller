try {
    function* g() {
        let REPLACER = 23;
    }
    var GeneratorPrototype = Object.getPrototypeOf(g).prototype;
    var symbol = Symbol();
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.return.call(undefined);
    }, 'undefined (without value)');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        GeneratorPrototype.return.call(undefined, 1);
    }, 'undefined (with value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(null);
    }, 'null (without value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(null, 1);
    }, 'null (with value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(true);
    }, 'boolean (without value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(true, 1);
    }, 'boolean (with value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call('s');
    }, 'string (without value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call('s', 1);
    }, 'string (with value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(1);
    }, 'number (without value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(1, 1);
    }, 'number (with value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(symbol);
    }, 'symbol (without value)');
    assert.throws(TypeError, function () {
        GeneratorPrototype.return.call(symbol, 1);
    }, 'symbol (with value)');
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