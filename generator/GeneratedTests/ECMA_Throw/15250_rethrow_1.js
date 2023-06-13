try {
    var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        get.call({
            get hasIndices() {
                throw () => {
                    return () => {
                    };
                };
                throw new Test262Error();
            }
        });
    }, 'Let hasIndices be ToBoolean(? Get(R, "hasIndices"))');
    assert.throws(Test262Error, function () {
        get.call({
            get global() {
                throw new Test262Error();
            }
        });
    }, 'Let global be ToBoolean(? Get(R, "global"))');
    assert.throws(Test262Error, function () {
        get.call({
            get ignoreCase() {
                throw new Test262Error();
            }
        });
    }, 'Let ignoreCase be ToBoolean(? Get(R, "ignoreCase"))');
    assert.throws(Test262Error, function () {
        get.call({
            get multiline() {
                throw new Test262Error();
            }
        });
    }, 'Let multiline be ToBoolean(? Get(R, "multiline"))');
    assert.throws(Test262Error, function () {
        get.call({
            get dotAll() {
                throw new Test262Error();
            }
        });
    }, 'Let dotAll be ToBoolean(? Get(R, "dotAll"))');
    assert.throws(Test262Error, function () {
        get.call({
            get unicode() {
                throw new Test262Error();
            }
        });
    }, 'Let unicode be ToBoolean(? Get(R, "unicode"))');
    assert.throws(Test262Error, function () {
        get.call({
            get sticky() {
                throw new Test262Error();
            }
        });
    }, 'Let sticky be ToBoolean(? Get(R, "sticky"))');
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