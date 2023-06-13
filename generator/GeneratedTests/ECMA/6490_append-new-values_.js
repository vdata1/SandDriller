try {
    var s = Symbol(2);
    var map = new Map([
        [
            4,
            4
        ],
        [
            'foo3',
            3
        ],
        [
            s,
            2
        ]
    ]);
    map.set(null, 42);
    map.set(1, 'valid');
    assert.sameValue(map.size, 5);
    assert.sameValue(map.get(1), 'valid');
    var results = [];
    map.forEach(function (value, key) {
        results.push({
            value: value,
            key: key
        });
    });
    var result = results.pop();
    assert.sameValue(result.value, 'valid');
    assert.sameValue(result.key, 1);
    result = results.pop();
    assert.sameValue(result.value, 42);
    assert.sameValue(result.key, null);
    result = results.pop();
    assert.sameValue(result.value, 2);
    assert.sameValue(result.key, s);
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