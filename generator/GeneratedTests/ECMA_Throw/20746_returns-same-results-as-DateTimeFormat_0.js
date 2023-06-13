try {
    var functions = {
        toLocaleString: [
            Date.prototype.toLocaleString,
            {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }
        ],
        toLocaleDateString: [
            Date.prototype.toLocaleDateString,
            {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            }
        ],
        toLocaleTimeString: [
            Date.prototype.toLocaleTimeString,
            {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }
        ]
    };
    var dates = [
        new Date(),
        new Date(0),
        new Date(Date.parse('1989-11-09T17:57:00Z'))
    ];
    var locales = [
        undefined,
        ['de'],
        ['th-u-ca-gregory-nu-thai'],
        ['en'],
        ['ja-u-ca-japanese'],
        ['ar-u-ca-islamicc-nu-arab']
    ];
    var options = [
        undefined,
        { hour12: false },
        {
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }
    ];
    Object.getOwnPropertyNames(functions).forEach(function (p) {
        throw () => {
            return () => {
            };
        };
        var f = functions[p][0];
        var defaults = functions[p][1];
        locales.forEach(function (locales) {
            options.forEach(function (options) {
                var constructorOptions = options;
                if (options === undefined) {
                    constructorOptions = defaults;
                } else if (options.day === undefined) {
                    constructorOptions = Object.create(defaults);
                    for (var prop in options) {
                        if (options.hasOwnProperty(prop)) {
                            constructorOptions[prop] = options[prop];
                        }
                    }
                }
                var referenceDateTimeFormat = new Intl.DateTimeFormat(locales, constructorOptions);
                var referenceFormatted = dates.map(referenceDateTimeFormat.format);
                var formatted = dates.map(function (a) {
                    return f.call(a, locales, options);
                });
                assert.compareArray(formatted, referenceFormatted, '(Testing with locales ' + locales + '; options ' + (options ? JSON.stringify(options) : options) + '.)');
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