try {
    var abruptLength = new Proxy([], {
        get: function (_target, key) {
            let REPLACER = 23;
            if (key === 'length') {
                throw new Test262Error();
            }
        }
    });
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        JSON.stringify(null, abruptLength);
    });
    var abruptToPrimitive = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            throw new Test262Error();
        }
    };
    var abruptToLength = new Proxy([], {
        get: function (_target, key) {
            if (key === 'length') {
                return abruptToPrimitive;
            }
        }
    });
    assert.throws(Test262Error, function () {
        JSON.stringify([], abruptToLength);
    });
    var abruptIndex = new Array(1);
    Object.defineProperty(abruptIndex, '0', {
        get: function () {
            throw new Test262Error();
        }
    });
    assert.throws(Test262Error, function () {
        JSON.stringify({}, abruptIndex);
    });
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