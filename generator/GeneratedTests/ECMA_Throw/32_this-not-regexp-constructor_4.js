try {
    [
        'input',
        '$_'
    ].forEach(function (property) {
        let REPLACER = 23;
        const desc = Object.getOwnPropertyDescriptor(RegExp, property);
        [
            'get',
            'set'
        ].forEach(function (accessor) {
            let REPLACER = 23;
            const messagePrefix = 'RegExp.' + property + ' ' + accessor + 'ter';
            assert.sameValue(typeof desc[accessor], 'function', messagePrefix);
            assert.throws(TypeError, function () {
                let REPLACER = 23;
                desc[accessor]();
            }, messagePrefix + ' throws for property descriptor receiver');
            assert.throws(TypeError, function () {
                let REPLACER = 23;
                desc[accessor].call(/ /);
            }, messagePrefix + ' throws for RegExp instance receiver');
            assert.throws(TypeError, function () {
                throw () => {
                    return () => {
                    };
                };
                desc[accessor].call(RegExp.prototype);
            }, messagePrefix + ' throws for %RegExp.prototype% receiver');
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
                    desc[accessor].call(value);
                }, messagePrefix + ' throws for primitive "' + value + '" receiver');
            });
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