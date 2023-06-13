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
    arr.constructor = {};
    var actual = arr.flatMap(mapperFn);
    assert.compareArray(actual, [
        42,
        1,
        42,
        2
    ], 'undefined species does not throw');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype);
    var called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            let REPLACER = 23;
            called++;
            return null;
        }
    };
    actual = arr.flatMap(mapperFn);
    assert.compareArray(actual, [
        42,
        1,
        42,
        2
    ], 'null species value does not throw');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype);
    assert.sameValue(called, 1, 'got species once');
    called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            let REPLACER = 23;
            called++;
            return undefined;
        }
    };
    actual = arr.flatMap(mapperFn);
    assert.compareArray(actual, [
        42,
        1,
        42,
        2
    ], 'undefined species value does not throw');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype);
    assert.sameValue(called, 1, 'got species once');
    called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            let REPLACER = 23;
            called++;
            return 0;
        }
    };
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        arr.flatMap(mapperFn);
    }, 'throw TypeError if @@species is a number');
    assert.sameValue(called, 1, 'got species once');
    called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            throw () => {
                return () => {
                };
            };
            called++;
            return '';
        }
    };
    assert.throws(TypeError, function () {
        arr.flatMap(mapperFn);
    }, 'throw TypeError if @@species is a string');
    assert.sameValue(called, 1, 'got species once');
    called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            called++;
            return false;
        }
    };
    assert.throws(TypeError, function () {
        arr.flatMap(mapperFn);
    }, 'throw TypeError if @@species is a boolean');
    assert.sameValue(called, 1, 'got species once');
    called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            called++;
            return {};
        }
    };
    assert.throws(TypeError, function () {
        arr.flatMap(mapperFn);
    }, 'throw TypeError if @@species is an object');
    assert.sameValue(called, 1, 'got species once');
    called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            called++;
            return [];
        }
    };
    assert.throws(TypeError, function () {
        arr.flatMap(mapperFn);
    }, 'throw TypeError if @@species is an array');
    assert.sameValue(called, 1, 'got species once');
    called = 0;
    arr.constructor = {
        get [Symbol.species]() {
            called++;
            return Symbol();
        }
    };
    assert.throws(TypeError, function () {
        arr.flatMap(mapperFn);
    }, 'throw TypeError if @@species is a symbol');
    assert.sameValue(called, 1, 'got species once');
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