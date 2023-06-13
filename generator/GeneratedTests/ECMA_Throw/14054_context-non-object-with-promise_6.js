try {
    var promise = new Promise(function () {
        let REPLACER = 23;
    });
    promise.constructor = undefined;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.resolve.call(undefined, promise);
    }, '`this` value is undefined');
    promise.constructor = null;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.resolve.call(null, promise);
    }, '`this` value is null');
    promise.constructor = true;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.resolve.call(true, promise);
    }, '`this` value is a Boolean');
    promise.constructor = 1;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.resolve.call(1, promise);
    }, '`this` value is a Number');
    promise.constructor = '';
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.resolve.call('', promise);
    }, '`this` value is a String');
    var symbol = Symbol();
    promise.constructor = symbol;
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Promise.resolve.call(symbol, promise);
    }, '`this` value is a Symbol');
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