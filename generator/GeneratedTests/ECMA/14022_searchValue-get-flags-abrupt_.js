try {
    var searchValue = {
        [Symbol.match]: true,
        get flags() {
            throw new Test262Error();
        }
    };
    var poisoned = 0;
    var poison = {
        toString() {
            poisoned += 1;
            throw 'Should not call toString on this/replaceValue';
        }
    };
    assert.throws(Test262Error, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, 'from custom searchValue object');
    var re1 = /./;
    Object.defineProperty(re1, 'flags', {
        get() {
            throw new Test262Error();
        }
    });
    assert.throws(Test262Error, function () {
        ''.replaceAll.call(poison, re1, poison);
    }, 'from RE instance, using default Symbol.match check');
    var called = 0;
    var re2 = /./;
    Object.defineProperty(re2, Symbol.match, {
        get() {
            called += 1;
            return true;
        }
    });
    Object.defineProperty(re2, 'flags', {
        get() {
            throw new Test262Error();
        }
    });
    assert.throws(Test262Error, function () {
        ''.replaceAll.call(poison, re2, poison);
    }, 'from RE instance, using Symbol.match check (true)');
    assert.sameValue(called, 1);
    called = 0;
    var re3 = /./;
    Object.defineProperty(re3, Symbol.match, {
        get() {
            called += 1;
            return 1;
        }
    });
    Object.defineProperty(re3, 'flags', {
        get() {
            throw new Test262Error();
        }
    });
    assert.throws(Test262Error, function () {
        ''.replaceAll.call(poison, re3, poison);
    }, 'from RE instance, using Symbol.match check (1), uses Internal for IsRegExp');
    assert.sameValue(called, 1);
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