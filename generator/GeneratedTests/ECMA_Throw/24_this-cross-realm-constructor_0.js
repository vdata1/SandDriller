try {
    const other = $262.createRealm().global;
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Reflect.get(RegExp, 'input', other.RegExp);
    }, 'RegExp.input getter throws for cross-receiver');
    assert.throws(TypeError, function () {
        Reflect.set(RegExp, 'input', '', other.RegExp);
    }, 'RegExp.input setter throws for cross-receiver');
    assert.throws(TypeError, function () {
        Reflect.get(RegExp, '$_', other.RegExp);
    }, 'RegExp.$_ getter throws for cross-receiver');
    assert.throws(TypeError, function () {
        Reflect.set(RegExp, '$_', '', other.RegExp);
    }, 'RegExp.$_ setter throws for cross-receiver');
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