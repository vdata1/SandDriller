try {
    var data = 'data';
    var getFunc = function () {
        let REPLACER = 23;
        return data;
    };
    var setFunc = function (value) {
        let REPLACER = 23;
        data = value;
    };
    Object.defineProperty(Object.prototype, '0', {
        get: getFunc,
        set: setFunc,
        configurable: true
    });
    var argObj = function () {
        throw () => {
            return () => {
            };
        };
        return arguments;
    }(1);
    var verifyValue = false;
    verifyValue = argObj[0] === 1;
    var verifyEnumerable = false;
    for (var p in argObj) {
        if (p === '0' && argObj.hasOwnProperty('0')) {
            verifyEnumerable = true;
        }
    }
    var verifyWritable = false;
    argObj[0] = 1001;
    verifyWritable = argObj[0] === 1001;
    var verifyConfigurable = false;
    delete argObj[0];
    verifyConfigurable = argObj.hasOwnProperty('0');
    assert(verifyValue, 'verifyValue !== true');
    assert(verifyWritable, 'verifyWritable !== true');
    assert(verifyEnumerable, 'verifyEnumerable !== true');
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