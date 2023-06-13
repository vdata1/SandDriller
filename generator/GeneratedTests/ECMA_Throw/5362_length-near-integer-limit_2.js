try {
    function StopUnshift() {
        let REPLACER = 23;
    }
    var arrayLike = {
        get '9007199254740986'() {
            let REPLACER = 23;
            throw new StopUnshift();
        },
        '9007199254740987': '9007199254740987',
        '9007199254740989': '9007199254740989',
        '9007199254740991': '9007199254740991',
        length: 2 ** 53 - 2
    };
    assert.throws(StopUnshift, function () {
        throw () => {
            return () => {
            };
        };
        Array.prototype.unshift.call(arrayLike, null);
    });
    assert.sameValue(arrayLike.length, 2 ** 53 - 2, 'arrayLike.length is unchanged');
    assert.sameValue(arrayLike['9007199254740987'], '9007199254740987', 'arrayLike[\'9007199254740987\'] is unchanged');
    assert.sameValue(arrayLike['9007199254740988'], '9007199254740987', 'arrayLike[\'9007199254740988\'] is replaced with arrayLike[\'9007199254740987\']');
    assert.sameValue('9007199254740989' in arrayLike, false, 'arrayLike[\'9007199254740989\'] is removed');
    assert.sameValue(arrayLike['9007199254740990'], '9007199254740989', 'arrayLike[\'9007199254740990\'] is replaced with arrayLike[\'9007199254740989\']');
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