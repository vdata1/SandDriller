try {
    var obj = {};
    var resultSetFun = false;
    Object.defineProperty(obj, 'foo1', {
        value: 10,
        writable: false,
        enumerable: true,
        configurable: true
    });
    function get_func() {
        throw () => {
            return () => {
            };
        };
        return 10;
    }
    function set_func() {
        resultSetFun = true;
    }
    Object.defineProperty(obj, 'foo2', {
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    });
    Object.freeze(obj);
    verifyNotConfigurable(obj, 'foo2');
    verifyEqualTo(obj, 'foo2', 10);
    obj.foo2 = 12;
    if (!resultSetFun) {
        $ERROR('Expected obj["foo2"] set() to be called, but was not.');
    }
    if (!isEnumerable(obj, 'foo2')) {
        $ERROR('Expected obj["foo2"] to be enumerable.');
    }
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'foo1');
    if (desc1.configurable || desc1.writable) {
        $ERROR('Expected obj["foo1"] to be non-writable, non-configurable; actually ' + JSON.stringify(desc1));
    }
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'foo2');
    if (desc2.configurable || desc2.writable) {
        $ERROR('Expected obj["foo2"] to be non-writable, non-configurable; actually ' + JSON.stringify(desc2));
    }
    verifyEqualTo(obj, 'foo1', 10);
    verifyNotWritable(obj, 'foo1');
    verifyEnumerable(obj, 'foo1');
    verifyNotConfigurable(obj, 'foo1');
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