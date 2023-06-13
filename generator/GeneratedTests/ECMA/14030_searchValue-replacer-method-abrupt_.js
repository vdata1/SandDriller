try {
    var poisoned = 0;
    var poison = {
        toString() {
            poisoned += 1;
            throw 'Should not call toString on this/replaceValue';
        }
    };
    var searchValue = {
        [Symbol.match]: false,
        flags: 'g',
        get [Symbol.replace]() {
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, 'custom abrupt');
    searchValue = {
        [Symbol.match]: false,
        flags: 'g',
        [Symbol.replace]: {},
        toString() {
            throw 'Should not call toString on searchValue';
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, '@@replace is an object (not callable)');
    searchValue = {
        [Symbol.match]: false,
        flags: 'g',
        [Symbol.replace]: '',
        toString() {
            throw 'Should not call toString on searchValue';
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, '@@replace is a string');
    searchValue = {
        [Symbol.match]: false,
        flags: 'g',
        [Symbol.replace]: 42,
        toString() {
            throw 'Should not call toString on searchValue';
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, '@@replace is a number');
    searchValue = {
        [Symbol.match]: false,
        flags: 'g',
        [Symbol.replace]: Symbol(),
        toString() {
            throw 'Should not call toString on searchValue';
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, '@@replace is a symbol');
    searchValue = {
        [Symbol.match]: false,
        flags: 'g',
        [Symbol.replace]: true,
        toString() {
            throw 'Should not call toString on searchValue';
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, '@@replace is true');
    searchValue = {
        [Symbol.match]: false,
        flags: 'g',
        [Symbol.replace]: false,
        toString() {
            throw 'Should not call toString on searchValue';
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, '@@replace is false');
    assert.sameValue(poisoned, 0);
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