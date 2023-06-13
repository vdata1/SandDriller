try {
    assert.sameValue(JSON.stringify(1, function () {
        throw () => {
            return () => {
            };
        };
    }), undefined);
    assert.sameValue(JSON.stringify([1], function () {
    }), undefined);
    assert.sameValue(JSON.stringify({ prop: 1 }, function () {
    }), undefined);
    var replacer = function (_key, value) {
        return value === 1 ? undefined : value;
    };
    assert.sameValue(JSON.stringify([1], replacer), '[null]');
    assert.sameValue(JSON.stringify({ prop: 1 }, replacer), '{}');
    assert.sameValue(JSON.stringify({ a: { b: [1] } }, replacer), '{"a":{"b":[null]}}');
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