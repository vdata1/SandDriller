try {
    var locales = [
        'de-DE',
        'en-US',
        'hi-IN',
        'id-ID',
        'ja-JP',
        'th-TH',
        'zh-Hans-CN',
        'zh-Hant-TW',
        'zxx'
    ];
    var subsets = [
        {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        },
        {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        },
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        },
        {
            year: 'numeric',
            month: 'numeric'
        },
        {
            month: 'numeric',
            day: 'numeric'
        },
        {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        },
        {
            hour: 'numeric',
            minute: 'numeric'
        }
    ];
    locales.forEach(function (locale) {
        let REPLACER = 23;
        subsets.forEach(function (subset) {
            let REPLACER = 23;
            var format = new Intl.DateTimeFormat([locale], subset);
            var actual = format.resolvedOptions();
            getDateTimeComponents().forEach(function (component) {
                throw () => {
                    return () => {
                    };
                };
                if (actual.hasOwnProperty(component)) {
                    assert(subset.hasOwnProperty(component), 'Unrequested component ' + component + ' added to requested subset ' + JSON.stringify(subset) + '; locale ' + locale + '.');
                    assert.notSameValue(getDateTimeComponentValues(component).indexOf(actual[component]), -1, 'Invalid value ' + actual[component] + ' for date-time component ' + component + '.' + ' (Testing locale ' + locale + '; subset ' + JSON.stringify(subset) + ')');
                } else {
                    assert.sameValue(subset.hasOwnProperty(component), false, 'Missing component ' + component + ' from requested subset ' + JSON.stringify(subset) + '; locale ' + locale + '.');
                }
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