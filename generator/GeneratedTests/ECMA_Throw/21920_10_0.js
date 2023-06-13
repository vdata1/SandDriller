try {
    var data = 'data';
    var getFunc = function () {
        throw () => {
            return () => {
            };
        };
        return 12;
    };
    var setFunc = function (value) {
        data = value;
    };
    Object.defineProperty(Object.prototype, 'length', {
        get: getFunc,
        set: setFunc,
        configurable: true
    });
    var verifyValue = false;
    var argObj = function () {
        return arguments;
    }();
    verifyValue = argObj.length === 0;
    var verifyWritable = false;
    argObj.length = 1001;
    verifyWritable = argObj.length === 1001;
    var verifyEnumerable = false;
    for (var p in argObj) {
        if (p === 'length') {
            verifyEnumerable = true;
        }
    }
    var verifyConfigurable = false;
    delete argObj.length;
    verifyConfigurable = argObj.hasOwnProperty('length');
    assert(verifyValue, 'verifyValue !== true');
    assert(verifyWritable, 'verifyWritable !== true');
    assert.sameValue(verifyEnumerable, false, 'verifyEnumerable');
    assert.sameValue(verifyConfigurable, false, 'verifyConfigurable');
    assert.sameValue(data, 'data', 'data');
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