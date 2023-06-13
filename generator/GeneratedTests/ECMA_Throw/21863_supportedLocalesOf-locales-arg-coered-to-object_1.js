try {
    testWithIntlConstructors(function (Constructor) {
        let REPLACER = 23;
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            var supportedForNull = Constructor.supportedLocalesOf(null);
        }, 'Null as locale list was not rejected.');
        var supportedForEmptyList = Constructor.supportedLocalesOf([]);
        assert.sameValue(supportedForEmptyList.length, 0, 'Internal test error: Assumption about length being 0 is invalid.');
        var supportedForNumber = Constructor.supportedLocalesOf(5);
        assert.sameValue(supportedForNumber.length, supportedForEmptyList.length, 'Supported locales differ between numeric and empty list input.');
        var supportedForBoolean = Constructor.supportedLocalesOf(true);
        assert.sameValue(supportedForBoolean.length, supportedForEmptyList.length, 'Supported locales differ between boolean and empty list input.');
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