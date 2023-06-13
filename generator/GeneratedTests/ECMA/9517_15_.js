try {
    var obj = {};
    Object.defineProperty(obj, 'foo1', {
        value: 10,
        writable: false,
        enumerable: true,
        configurable: false
    });
    Object.defineProperty(obj, 'foo2', {
        value: 20,
        writable: true,
        enumerable: false,
        configurable: false
    });
    Object.freeze(obj);
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'foo1');
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'foo2');
    verifyEqualTo(obj, 'foo1', 10);
    verifyNotWritable(obj, 'foo1');
    verifyEnumerable(obj, 'foo1');
    verifyNotConfigurable(obj, 'foo1');
    verifyEqualTo(obj, 'foo2', 20);
    verifyNotWritable(obj, 'foo2');
    verifyNotEnumerable(obj, 'foo2');
    verifyNotConfigurable(obj, 'foo2');
    if (desc1.configurable !== false) {
        $ERROR('Expected desc1.configurable === false, actually ' + desc1.configurable);
    }
    if (desc1.writable !== false) {
        $ERROR('Expected desc1.writable === false, actually ' + desc1.writable);
    }
    if (desc2.configurable !== false) {
        $ERROR('Expected desc2.configurable === false, actually ' + desc2.configurable);
    }
    if (desc2.writable !== false) {
        $ERROR('Expected desc2.writable === false, actually ' + desc2.writable);
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