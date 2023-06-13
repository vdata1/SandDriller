try {
    var args;
    var count = 0;
    var o1 = {};
    var receiver = {};
    var _receiver;
    Object.defineProperty(o1, 'p', {
        set: function (a) {
            count++;
            args = arguments;
            _receiver = this;
            return false;
        }
    });
    var result = Reflect.set(o1, 'p', 42, receiver);
    assert.sameValue(result, true, 'returns true if target.p has an accessor descriptor');
    assert.sameValue(args.length, 1, 'target.p set is called with 1 argument');
    assert.sameValue(args[0], 42, 'target.p set is called with V');
    assert.sameValue(count, 1, 'target.p set is called once');
    assert.sameValue(_receiver, receiver, 'target.p set is called with receiver as `this`');
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