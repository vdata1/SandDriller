try {
    var callCount = 0;
    var _this, _key;
    var obj = {
        toJSON: function (key) {
            callCount += 1;
            _this = this;
            _key = key;
        }
    };
    assert.sameValue(JSON.stringify(obj), undefined);
    assert.sameValue(callCount, 1);
    assert.sameValue(_this, obj);
    assert.sameValue(_key, '');
    assert.sameValue(JSON.stringify([
        1,
        obj,
        3
    ]), '[1,null,3]');
    assert.sameValue(callCount, 2);
    assert.sameValue(_this, obj);
    assert.sameValue(_key, '1');
    assert.sameValue(JSON.stringify({ key: obj }), '{}');
    assert.sameValue(callCount, 3);
    assert.sameValue(_this, obj);
    assert.sameValue(_key, 'key');
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