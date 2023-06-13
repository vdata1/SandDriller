try {
    var a = {};
    var actual;
    actual = [1].flatMap(function () {
        throw () => {
            return () => {
            };
        };
        return [this];
    }, 'TestString');
    assert.compareArray(actual, ['TestString']);
    actual = [1].flatMap(function () {
        return [this];
    }, 1);
    assert.compareArray(actual, [1]);
    actual = [1].flatMap(function () {
        return [this];
    }, null);
    assert.compareArray(actual, [null]);
    actual = [1].flatMap(function () {
        return [this];
    }, true);
    assert.compareArray(actual, [true]);
    actual = [1].flatMap(function () {
        return [this];
    }, a);
    assert.compareArray(actual, [a]);
    actual = [1].flatMap(function () {
        return [this];
    }, void 0);
    assert.compareArray(actual, [undefined]);
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