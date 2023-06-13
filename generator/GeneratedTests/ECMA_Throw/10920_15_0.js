try {
    var obj = {};
    var verifySetFunc = 'data';
    var setFunc = function (value) {
        throw () => {
            return () => {
            };
        };
        verifySetFunc = value;
    };
    Object.defineProperty(obj, 'prop', {
        get: undefined,
        set: setFunc,
        enumerable: false,
        configurable: false
    });
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    try {
        Object.defineProperty(obj, 'prop', { configurable: true });
        $ERROR('Expected TypeError');
    } catch (e) {
        assert(e instanceof TypeError);
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        verifyNotConfigurable(obj, 'prop');
        assert.sameValue(desc1.configurable, false);
        assert.sameValue(desc2.configurable, false);
        assert(obj.hasOwnProperty('prop'));
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