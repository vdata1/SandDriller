try {
    var obj = {};
    Object.defineProperty(obj, 'foo', {
        value: 10,
        writable: true,
        enumerable: true,
        configurable: false
    });
    Object.freeze(obj);
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    verifyEqualTo(obj, 'foo', 10);
    verifyNotWritable(obj, 'foo');
    verifyEnumerable(obj, 'foo');
    verifyNotConfigurable(obj, 'foo');
    if (desc.writable !== false) {
        $ERROR('Expected desc.writable === false, actually ' + desc.writable);
    }
    if (desc.configurable !== false) {
        $ERROR('Expected desc.configurable === false, actually ' + desc.configurable);
    }
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