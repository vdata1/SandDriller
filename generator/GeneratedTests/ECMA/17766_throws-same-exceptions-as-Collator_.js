try {
    var locales = [
        null,
        [NaN],
        ['i'],
        ['de_DE']
    ];
    var options = [
        { localeMatcher: null },
        { usage: 'invalid' },
        { sensitivity: 'invalid' }
    ];
    locales.forEach(function (locales) {
        var referenceError, error;
        try {
            var collator = new Intl.Collator(locales);
        } catch (e) {
            referenceError = e;
        }
        assert.notSameValue(referenceError, undefined, 'Internal error: Expected exception was not thrown by Intl.Collator for locales ' + locales + '.');
        assert.throws(referenceError.constructor, function () {
            var result = ''.localeCompare('', locales);
        }, 'String.prototype.localeCompare didn\'t throw exception for locales ' + locales + '.');
    });
    options.forEach(function (options) {
        var referenceError, error;
        try {
            var collator = new Intl.Collator([], options);
        } catch (e) {
            referenceError = e;
        }
        assert.notSameValue(referenceError, undefined, 'Internal error: Expected exception was not thrown by Intl.Collator for options ' + JSON.stringify(options) + '.');
        assert.throws(referenceError.constructor, function () {
            var result = ''.localeCompare('', [], options);
        }, 'String.prototype.localeCompare didn\'t throw exception for options ' + JSON.stringify(options) + '.');
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