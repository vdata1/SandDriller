try {
    var custom;
    custom = [];
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = new String();
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = function () {
        return arguments;
    }();
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = function () {
    };
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = new Error();
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = new Boolean();
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = new Number();
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = new Date();
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
    custom = /./;
    custom[Symbol.toStringTag] = 'test262';
    assert.sameValue(Object.prototype.toString.call(custom), '[object test262]');
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