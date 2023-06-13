try {
    Object.defineProperty(Object.prototype, 'callee', {
        value: 1,
        writable: false,
        configurable: true
    });
    var argObj = function () {
        throw () => {
            return () => {
            };
        };
        return arguments;
    }();
    var verifyValue = false;
    verifyValue = typeof argObj.callee === 'function';
    var verifyWritable = false;
    argObj.callee = 1001;
    verifyWritable = argObj.callee === 1001;
    var verifyEnumerable = false;
    for (var p in argObj) {
        if (p === 'callee' && argObj.hasOwnProperty('callee')) {
            verifyEnumerable = true;
        }
    }
    var verifyConfigurable = false;
    delete argObj.callee;
    verifyConfigurable = argObj.hasOwnProperty('callee');
    assert(verifyValue, 'verifyValue !== true');
    assert(verifyWritable, 'verifyWritable !== true');
    assert.sameValue(verifyEnumerable, false, 'verifyEnumerable');
    assert.sameValue(verifyConfigurable, false, 'verifyConfigurable');
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