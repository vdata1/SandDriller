try {
    assert.sameValue(typeof Array.prototype.flatMap, 'function');
    var a = [];
    var mapperFn = function () {
        let REPLACER = 23;
    };
    a.constructor = null;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        a.flatMap(mapperFn);
    }, 'null value');
    a = [];
    a.constructor = 1;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        a.flatMap(mapperFn);
    }, 'number value');
    a = [];
    a.constructor = 'string';
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        a.flatMap(mapperFn);
    }, 'string value');
    a = [];
    a.constructor = true;
    assert.throws(TypeError, function () {
        a.flatMap(mapperFn);
    }, 'boolean value');
    a = [];
    a.constructor = Symbol();
    assert.throws(TypeError, function () {
        a.flatMap(mapperFn);
    }, 'symbol value');
    a = [];
    a.constructor = undefined;
    var actual = a.flatMap(mapperFn);
    assert.compareArray(actual, [], 'undefined value does not throw');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype);
    assert.notSameValue(actual, a, 'returns a new array');
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