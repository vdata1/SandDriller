try {
    var first = {};
    var second = {};
    var results = [];
    var set = WeakMap.prototype.set;
    WeakMap.prototype.set = function (key, value) {
        results.push({
            _this: this,
            key: key,
            value: value
        });
        return set.call(this, key, value);
    };
    var map = new WeakMap([
        [
            first,
            42
        ],
        [
            second,
            43
        ]
    ]);
    assert.sameValue(results.length, 2, 'Called WeakMap#set for each object');
    assert.sameValue(results[0].key, first, 'Adds object in order - first key');
    assert.sameValue(results[0].value, 42, 'Adds object in order - first value');
    assert.sameValue(results[0]._this, map, 'Adds object in order - this');
    assert.sameValue(results[1].key, second, 'Adds object in order - second key');
    assert.sameValue(results[1].value, 43, 'Adds object in order - second value');
    assert.sameValue(results[1]._this, map, 'Adds object in order - this');
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