try {
    var obj = {};
    Object.defineProperty(obj, 'foo', {
        value: 10,
        configurable: true
    });
    function get_Func() {
        return 20;
    }
    Object.defineProperties(obj, { foo: { get: get_Func } });
    var verifyEnumerable = false;
    for (var p in obj) {
        if (p === 'foo') {
            verifyEnumerable = true;
        }
    }
    var verifyValue = false;
    verifyValue = obj.foo === 20;
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    var verifyConfigurable = true;
    delete obj.foo;
    verifyConfigurable = obj.hasOwnProperty('foo');
    assert.sameValue(verifyConfigurable, false, 'verifyConfigurable');
    assert.sameValue(verifyEnumerable, false, 'verifyEnumerable');
    assert(verifyValue, 'verifyValue !== true');
    assert.sameValue(typeof desc.set, 'undefined', 'typeof desc.set');
    assert.sameValue(desc.get, get_Func, 'desc.get');
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