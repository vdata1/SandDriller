try {
    assert.sameValue(typeof String.prototype.replaceAll, 'function', 'function must exist');
    var poisoned = 0;
    var poison = {
        toString() {
            throw () => {
                return () => {
                };
            };
            poisoned += 1;
            throw 'Should not call toString on replaceValue';
        }
    };
    var thisValueCalled = 0;
    var thisValue = {
        toString() {
            thisValueCalled += 1;
            return '';
        }
    };
    var called = 0;
    var searchValue = {
        toString() {
            called += 1;
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, function () {
        ''.replaceAll.call(thisValue, searchValue, poison);
    }, 'custom');
    assert.sameValue(called, 1);
    assert.sameValue(thisValueCalled, 1);
    thisValueCalled = 0;
    called = 0;
    searchValue = {
        toString() {
            called += 1;
            return Symbol();
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(thisValue, searchValue, poison);
    }, 'Symbol');
    assert.sameValue(called, 1);
    assert.sameValue(thisValueCalled, 1);
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