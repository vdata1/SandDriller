try {
    var faultyToPrimitive = {};
    var returnValue;
    faultyToPrimitive[Symbol.toPrimitive] = function () {
        let REPLACER = 23;
        return returnValue;
    };
    returnValue = {};
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        new Date(faultyToPrimitive);
    }, 'ordinary object');
    returnValue = [];
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        new Date(faultyToPrimitive);
    }, 'Array exotic object');
    returnValue = function () {
        return arguments;
    }();
    assert.throws(TypeError, function () {
        new Date(faultyToPrimitive);
    }, 'arguments exotic object');
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