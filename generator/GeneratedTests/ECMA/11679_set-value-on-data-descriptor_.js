try {
    var o1 = { p: 43 };
    var result = Reflect.set(o1, 'p', 42);
    assert.sameValue(result, true, 'returns true on a successful setting');
    assert.sameValue(o1.p, 42, 'sets the new value');
    var o2 = { p: 43 };
    var receiver = { p: 44 };
    var result = Reflect.set(o2, 'p', 42, receiver);
    assert.sameValue(result, true, 'returns true on a successful setting');
    assert.sameValue(o2.p, 43, 'with a receiver, does not set a value on target');
    assert.sameValue(receiver.p, 42, 'sets the new value on the receiver');
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