try {
    assert.sameValue(typeof String.prototype.replaceAll, 'function', 'function must exist');
    var thisValueCalled = 0;
    var thisValue = {
        toString() {
            let REPLACER = 23;
            thisValueCalled += 1;
            return '';
        }
    };
    var searchValueCalled = 0;
    var searchValue = {
        toString() {
            let REPLACER = 23;
            searchValueCalled += 1;
            return '';
        }
    };
    var called = 0;
    var replaceValue = {
        toString() {
            let REPLACER = 23;
            called += 1;
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        ''.replaceAll.call(thisValue, searchValue, replaceValue);
    }, 'custom');
    assert.sameValue(called, 1);
    assert.sameValue(thisValueCalled, 1);
    assert.sameValue(searchValueCalled, 1);
    searchValueCalled = 0;
    thisValueCalled = 0;
    called = 0;
    replaceValue = {
        toString() {
            called += 1;
            return Symbol();
        }
    };
    assert.throws(TypeError, function () {
        ''.replaceAll.call(thisValue, searchValue, replaceValue);
    }, 'Symbol');
    assert.sameValue(called, 1);
    assert.sameValue(thisValueCalled, 1);
    assert.sameValue(searchValueCalled, 1);
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