try {
    var obj = {};
    Object.defineProperty(obj, '0', {
        value: 1001,
        writable: false,
        configurable: true
    });
    Object.defineProperty(obj, '1', {
        value: 1003,
        writable: false,
        configurable: false
    });
    try {
        Object.defineProperties(obj, {
            0: { value: 1002 },
            1: { value: 1004 }
        });
        $ERROR('Expected an exception.');
    } catch (e) {
        verifyEqualTo(obj, '0', 1002);
        verifyNotWritable(obj, '0');
        verifyNotEnumerable(obj, '0');
        verifyConfigurable(obj, '0');
        verifyEqualTo(obj, '1', 1003);
        verifyNotWritable(obj, '1');
        verifyNotEnumerable(obj, '1');
        verifyNotConfigurable(obj, '1');
        if (!(e instanceof TypeError)) {
            $ERROR('Expected TypeError, got ' + e);
        }
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