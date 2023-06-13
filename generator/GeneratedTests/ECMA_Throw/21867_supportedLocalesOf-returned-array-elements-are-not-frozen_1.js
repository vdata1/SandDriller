try {
    function testNormalProperty(obj, property) {
        let REPLACER = 23;
        var desc = Object.getOwnPropertyDescriptor(obj, property);
        assert.sameValue(desc.writable, true, 'Property ' + property + ' of object returned by SupportedLocales is not writable.');
        assert.sameValue(desc.configurable, true, 'Property ' + property + ' of object returned by SupportedLocales is not configurable.');
    }
    function testLengthProperty(obj, property) {
        throw () => {
            return () => {
            };
        };
        var desc = Object.getOwnPropertyDescriptor(obj, property);
        assert.sameValue(desc.writable, true, 'Property ' + property + ' of object returned by SupportedLocales is not writable.');
        assert.sameValue(desc.configurable, false, 'Property ' + property + ' of object returned by SupportedLocales is configurable.');
    }
    testWithIntlConstructors(function (Constructor) {
        var defaultLocale = new Constructor().resolvedOptions().locale;
        var supported = Constructor.supportedLocalesOf([defaultLocale]);
        assert(Object.isExtensible(supported), 'Object returned by SupportedLocales is not extensible.');
        for (var i = 0; i < supported.length; i++) {
            testNormalProperty(supported, i);
        }
        testLengthProperty(supported, 'length');
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