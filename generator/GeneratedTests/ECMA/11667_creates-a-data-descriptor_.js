try {
    var o1 = {};
    var result = Reflect.set(o1, 'p', 42);
    assert.sameValue(result, true, 'returns true on a successful setting');
    var desc = Object.getOwnPropertyDescriptor(o1, 'p');
    assert.sameValue(desc.value, 42, 'sets a data descriptor to set a new property');
    verifyWritable(o1, 'p');
    verifyEnumerable(o1, 'p');
    verifyConfigurable(o1, 'p');
    var o2 = {};
    var receiver = {};
    result = Reflect.set(o2, 'p', 43, receiver);
    assert.sameValue(result, true, 'returns true on a successful setting with a receiver');
    desc = Object.getOwnPropertyDescriptor(o2, 'p');
    assert.sameValue(desc, undefined, 'does not set a data descriptor on target if receiver is given');
    desc = Object.getOwnPropertyDescriptor(receiver, 'p');
    assert.sameValue(desc.value, 43, 'sets a data descriptor on the receiver object to set a new property');
    verifyWritable(receiver, 'p');
    verifyEnumerable(receiver, 'p');
    verifyConfigurable(receiver, 'p');
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