try {
    var arrProtoLen;
    var arr = [
        0,
        1,
        2
    ];
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        arrProtoLen = Array.prototype.length;
        Array.prototype.length = 0;
        Object.defineProperty(arr, '2', { configurable: false });
        Object.defineProperties(arr, { length: { value: 1 } });
    });
    var desc = Object.getOwnPropertyDescriptor(arr, 'length');
    assert.sameValue(desc.value, 3, 'desc.value');
    assert(desc.writable, 'desc.writable !== true');
    assert.sameValue(desc.enumerable, false, 'desc.enumerable');
    assert.sameValue(desc.configurable, false, 'desc.configurable');
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