try {
    var arr = [
        'Mike',
        'Rick',
        'Leo'
    ];
    var results = [];
    arr.find(function (kValue, k, O) {
        results.push(arguments);
    });
    assert.sameValue(results.length, 3);
    var result = results[0];
    assert.sameValue(result[0], 'Mike');
    assert.sameValue(result[1], 0);
    assert.sameValue(result[2], arr);
    assert.sameValue(result.length, 3);
    result = results[1];
    assert.sameValue(result[0], 'Rick');
    assert.sameValue(result[1], 1);
    assert.sameValue(result[2], arr);
    assert.sameValue(result.length, 3);
    result = results[2];
    assert.sameValue(result[0], 'Leo');
    assert.sameValue(result[1], 2);
    assert.sameValue(result[2], arr);
    assert.sameValue(result.length, 3);
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