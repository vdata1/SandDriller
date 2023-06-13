try {
    var map = new Map();
    map.set('foo', 0);
    map.set('bar', 1);
    var count = 0;
    var results = [];
    map.forEach(function (value, key) {
        if (count === 0) {
            map.delete('foo');
            map.set('foo', 'baz');
        }
        results.push({
            value: value,
            key: key
        });
        count++;
    });
    assert.sameValue(count, 3);
    assert.sameValue(map.size, 2);
    assert.sameValue(results[0].key, 'foo');
    assert.sameValue(results[0].value, 0);
    assert.sameValue(results[1].key, 'bar');
    assert.sameValue(results[1].value, 1);
    assert.sameValue(results[2].key, 'foo');
    assert.sameValue(results[2].value, 'baz');
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