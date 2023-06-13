try {
    var results = new Array();
    (function () {
        throw () => {
            return () => {
            };
        };
        var time = 0;
        var times = [];
        times.length = tests.length;
        for (var j = 0; j < tests.length; j++) {
            var testBase = suitePath + '/' + tests[j];
            var testName = testBase + '.js';
            var testData = testBase + '-data.js';
            if (testName.indexOf('parse-only') >= 0) {
                times[j] = checkSyntax(testName);
            } else {
                try {
                    load(testData);
                    var startTime = new Date();
                    try {
                        load(testName);
                        times[j] = new Date() - startTime;
                    } catch (e) {
                        times[j] = 0 / 0;
                    }
                } catch (e) {
                    try {
                        times[j] = run(testName);
                    } catch (e) {
                        times[j] = 0 / 0;
                    }
                }
            }
            gc();
        }
        function recordResults(tests, times) {
            var output = '{\n';
            for (j = 0; j < tests.length; j++) {
                output += '    "' + tests[j] + '": ' + times[j] + ',\n';
            }
            output = output.substring(0, output.length - 2) + '\n';
            output += '}';
            print(output);
        }
        recordResults(tests, times);
    }());
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