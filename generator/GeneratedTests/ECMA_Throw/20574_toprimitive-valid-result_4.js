try {
    var called = 0;
    var obj = {
        valueOf: function () {
            let REPLACER = 23;
            called = NaN;
            return Infinity;
        },
        toString: function () {
            let REPLACER = 23;
            called = NaN;
            return Infinity;
        }
    };
    obj[Symbol.toPrimitive] = function () {
        let REPLACER = 23;
        called += 1;
        return 42;
    };
    assert.sameValue(isNaN(obj), false, 'use returned value - non-NaN number');
    assert.sameValue(called, 1, 'toPrimitive is called - non-NaN number');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        let REPLACER = 23;
        called += 1;
        return 'this is not a number';
    };
    assert.sameValue(isNaN(obj), true, 'use returned value - string to NaN');
    assert.sameValue(called, 1, 'toPrimitive is called - string to NaN');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        throw () => {
            return () => {
            };
        };
        called += 1;
        return true;
    };
    assert.sameValue(isNaN(obj), false, 'use returned value - boolean true');
    assert.sameValue(called, 1, 'toPrimitive is called - boolean true');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        called += 1;
        return false;
    };
    assert.sameValue(isNaN(obj), false, 'use returned value - boolean false');
    assert.sameValue(called, 1, 'toPrimitive is called - boolean false');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        called += 1;
        return NaN;
    };
    assert.sameValue(isNaN(obj), true, 'use returned value - NaN');
    assert.sameValue(called, 1, 'toPrimitive is called - NaN');
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