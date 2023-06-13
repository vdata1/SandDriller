try {
    var obj1 = {
        valueOf: function () {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    var obj2 = {
        toString: function () {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        Number(obj1);
    }, 'NewTarget is undefined, {}.valueOf');
    assert.throws(Test262Error, function () {
        Number(obj2);
    }, 'NewTarget is undefined, {}.toString');
    assert.throws(Test262Error, function () {
        new Number(obj1);
    }, 'NewTarget is defined, {}.valueOf');
    assert.throws(Test262Error, function () {
        new Number(obj2);
    }, 'NewTarget is defined, {}.toString');
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