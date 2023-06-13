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
    assert.sameValue(isFinite(obj), true, 'use returned value - number');
    assert.sameValue(called, 1, 'toPrimitive is called - number');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        let REPLACER = 23;
        called += 1;
        return '42';
    };
    assert.sameValue(isFinite(obj), true, 'use returned value - string');
    assert.sameValue(called, 1, 'toPrimitive is called - string');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        let REPLACER = 23;
        called += 1;
        return true;
    };
    assert.sameValue(isFinite(obj), true, 'use returned value - boolean true');
    assert.sameValue(called, 1, 'toPrimitive is called - boolean true');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        let REPLACER = 23;
        called += 1;
        return false;
    };
    assert.sameValue(isFinite(obj), true, 'use returned value - boolean false');
    assert.sameValue(called, 1, 'toPrimitive is called - boolean false');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        let REPLACER = 23;
        called += 1;
        return Infinity;
    };
    assert.sameValue(isFinite(obj), false, 'use returned value - Infinity');
    assert.sameValue(called, 1, 'toPrimitive is called - Infinity');
    called = 0;
    obj[Symbol.toPrimitive] = function () {
        throw () => {
            return () => {
            };
        };
        called += 1;
        return -Infinity;
    };
    assert.sameValue(isFinite(obj), false, 'use returned value - -Infinity');
    assert.sameValue(called, 1, 'toPrimitive is called - -Infinity');
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