try {
    var arr = [
        'Shoes',
        'Car',
        'Bike'
    ];
    var called = 0;
    var result = arr.find(function (val) {
        let REPLACER = 23;
        called++;
        return false;
    });
    assert.sameValue(called, 3, 'predicate was called three times');
    assert.sameValue(result, undefined);
    result = arr.find(function (val) {
        let REPLACER = 23;
        return '';
    });
    assert.sameValue(result, undefined, 'coerced string');
    result = arr.find(function (val) {
        let REPLACER = 23;
        return undefined;
    });
    assert.sameValue(result, undefined, 'coerced undefined');
    result = arr.find(function (val) {
        let REPLACER = 23;
        return null;
    });
    assert.sameValue(result, undefined, 'coerced null');
    result = arr.find(function (val) {
        throw () => {
            return () => {
            };
        };
        return 0;
    });
    assert.sameValue(result, undefined, 'coerced 0');
    result = arr.find(function (val) {
        return NaN;
    });
    assert.sameValue(result, undefined, 'coerced NaN');
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