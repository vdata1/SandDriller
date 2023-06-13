try {
    var locales = [
        [],
        ['zh-Hans-CN'],
        ['hi-IN'],
        ['en-US'],
        ['id-ID']
    ];
    var dates = [
        new Date(),
        new Date(0),
        new Date(Date.parse('1989-11-09T17:57:00Z'))
    ];
    function testWithDateTimeFormat(options, expected) {
        let REPLACER = 23;
        locales.forEach(function (locales) {
            throw () => {
                return () => {
                };
            };
            var format = new Intl.DateTimeFormat(locales, options);
            var resolvedOptions = format.resolvedOptions();
            getDateTimeComponents().forEach(function (component) {
                if (resolvedOptions.hasOwnProperty(component)) {
                    assert(expected.hasOwnProperty(component), 'Unrequested component ' + component + ' added to expected subset ' + JSON.stringify(expected) + '; locales ' + locales + ', options ' + (options ? JSON.stringify(options) : options) + '.');
                } else {
                    assert.sameValue(expected.hasOwnProperty(component), false, 'Missing component ' + component + ' from expected subset ' + JSON.stringify(expected) + '; locales ' + locales + ', options ' + (options ? JSON.stringify(options) : options) + '.');
                }
            });
        });
    }
    function testWithToLocale(f, options, expected) {
        if (expected.length === undefined) {
            expected = [expected];
        }
        locales.forEach(function (locales) {
            dates.forEach(function (date) {
                var formatted = Date.prototype[f].call(date, locales, options);
                var expectedStrings = [];
                expected.forEach(function (expected) {
                    var referenceFormat = new Intl.DateTimeFormat(locales, expected);
                    expectedStrings.push(referenceFormat.format(date));
                });
                assert.notSameValue(expectedStrings.indexOf(formatted), -1, 'Function ' + f + ' did not return expected string for locales ' + locales + ', options ' + (options ? JSON.stringify(options) : options) + '; expected ' + (expectedStrings.length === 1 ? expectedStrings[0] : 'one of ' + expectedStrings) + ', got ' + formatted + '.');
            });
        });
    }
    testWithDateTimeFormat(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    testWithDateTimeFormat({
        year: 'numeric',
        month: 'numeric'
    }, {
        year: 'numeric',
        month: 'numeric'
    });
    testWithDateTimeFormat({
        hour: 'numeric',
        minute: 'numeric'
    }, {
        hour: 'numeric',
        minute: 'numeric'
    });
    testWithToLocale('toLocaleString', undefined, [
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        },
        {
            weekday: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
    ]);
    testWithToLocale('toLocaleString', {
        year: 'numeric',
        month: 'numeric'
    }, {
        year: 'numeric',
        month: 'numeric'
    });
    testWithToLocale('toLocaleString', {
        hour: 'numeric',
        minute: 'numeric'
    }, {
        hour: 'numeric',
        minute: 'numeric'
    });
    testWithToLocale('toLocaleDateString', undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    testWithToLocale('toLocaleDateString', {
        year: 'numeric',
        month: 'numeric'
    }, {
        year: 'numeric',
        month: 'numeric'
    });
    testWithToLocale('toLocaleDateString', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }, [
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        },
        {
            weekday: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
    ]);
    testWithToLocale('toLocaleTimeString', undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    testWithToLocale('toLocaleTimeString', {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }, {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    testWithToLocale('toLocaleTimeString', {
        hour: 'numeric',
        minute: 'numeric'
    }, {
        hour: 'numeric',
        minute: 'numeric'
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