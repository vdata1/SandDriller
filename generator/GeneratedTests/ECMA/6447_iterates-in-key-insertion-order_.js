try {
    var map = new Map([
        [
            'foo',
            'valid foo'
        ],
        [
            'bar',
            false
        ],
        [
            'baz',
            'valid baz'
        ]
    ]);
    map.set(0, false);
    map.set(1, false);
    map.set(2, 'valid 2');
    map.delete(1);
    map.delete('bar');
    map.set(0, 'valid 0');
    var results = [];
    var callback = function (value) {
        results.push(value);
    };
    map.forEach(callback);
    assert.sameValue(results[0], 'valid foo');
    assert.sameValue(results[1], 'valid baz');
    assert.sameValue(results[2], 'valid 0');
    assert.sameValue(results[3], 'valid 2');
    assert.sameValue(results.length, 4);
    map.clear();
    results = [];
    map.forEach(callback);
    assert.sameValue(results.length, 0);
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