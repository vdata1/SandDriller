try {
    [
        'constructor',
        'length',
        '0',
        Symbol.isConcatSpreadable,
        Symbol.species
    ].forEach(function (key) {
        let REPLACER = 23;
        Object.defineProperty(this, key, {
            get: function () {
                let REPLACER = 23;
                throw new Test262Error(String(key) + ' lookup should not be performed');
            }
        });
    }, this);
    function callback() {
        let REPLACER = 23;
        throw new Test262Error('callback should not be called');
    }
    var index = {
        get valueOf() {
            let REPLACER = 23;
            throw new Test262Error('index should not be coerced to number');
        }
    };
    var separator = {
        get toString() {
            let REPLACER = 23;
            throw new Test262Error('separator should not be coerced to string');
        }
    };
    var concat = Array.prototype.concat;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        concat();
    }, 'concat');
    var copyWithin = Array.prototype.copyWithin;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        copyWithin(index, index);
    }, 'copyWithin');
    var entries = Array.prototype.entries;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        entries();
    }, 'entries');
    var every = Array.prototype.every;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        every(callback);
    }, 'every');
    var fill = Array.prototype.fill;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        fill(0);
    }, 'fill');
    var filter = Array.prototype.filter;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        filter(callback);
    }, 'filter');
    var find = Array.prototype.find;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        find(callback);
    }, 'find');
    var findIndex = Array.prototype.findIndex;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        findIndex(callback);
    }, 'findIndex');
    var flat = Array.prototype.flat;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        flat(index);
    }, 'flat');
    var flatMap = Array.prototype.flatMap;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        flatMap(callback);
    }, 'flatMap');
    var forEach = Array.prototype.forEach;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        forEach(callback);
    }, 'forEach');
    var includes = Array.prototype.includes;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        includes(0, index);
    }, 'includes');
    var indexOf = Array.prototype.indexOf;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        indexOf(0, index);
    }, 'indexOf');
    var join = Array.prototype.join;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        join(separator);
    }, 'join');
    var keys = Array.prototype.keys;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        keys();
    }, 'keys');
    var lastIndexOf = Array.prototype.lastIndexOf;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        lastIndexOf(0, index);
    }, 'lastIndexOf');
    var map = Array.prototype.map;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        map(callback);
    }, 'map');
    var pop = Array.prototype.pop;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        pop();
    }, 'pop');
    var push = Array.prototype.push;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        push();
    }, 'push');
    var reduce = Array.prototype.reduce;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        reduce(callback, 0);
    }, 'reduce');
    var reduceRight = Array.prototype.reduceRight;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        reduceRight(callback, 0);
    }, 'reduceRight');
    var reverse = Array.prototype.reverse;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        reverse();
    }, 'reverse');
    var shift = Array.prototype.shift;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        shift();
    }, 'shift');
    var slice = Array.prototype.slice;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        slice(index, index);
    }, 'slice');
    var some = Array.prototype.some;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        some(callback);
    }, 'some');
    var sort = Array.prototype.sort;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        sort(callback);
    }, 'sort');
    var splice = Array.prototype.splice;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        splice(index, index);
    }, 'splice');
    var toLocaleString = Array.prototype.toLocaleString;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        toLocaleString();
    }, 'toLocaleString');
    var toString = Array.prototype.toString;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        toString();
    }, 'toString');
    var unshift = Array.prototype.unshift;
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        unshift();
    }, 'unshift');
    var values = Array.prototype.values;
    assert.throws(TypeError, function () {
        values();
    }, 'values');
    var iterator = Array.prototype[Symbol.iterator];
    assert.throws(TypeError, function () {
        iterator();
    }, 'Symbol.iterator');
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