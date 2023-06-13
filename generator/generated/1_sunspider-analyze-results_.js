try {
    var count = output.length;
    var itemTotals = {};
    itemTotals.length = count;
    var total = 0;
    var categoryTotals = {};
    var testTotalsByCategory = {};
    var mean = 0;
    var categoryMeans = {};
    var testMeansByCategory = {};
    var stdDev = 0;
    var categoryStdDevs = {};
    var testStdDevsByCategory = {};
    var stdErr = 0;
    var categoryStdErrs = {};
    var testStdErrsByCategory = {};
    function initialize() {
        itemTotals = { total: [] };
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            itemTotals[category] = [];
            categoryTotals[category] = 0;
            testTotalsByCategory[category] = {};
            categoryMeans[category] = 0;
            testMeansByCategory[category] = {};
            categoryStdDevs[category] = 0;
            testStdDevsByCategory[category] = {};
            categoryStdErrs[category] = 0;
            testStdErrsByCategory[category] = {};
        }
        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];
            itemTotals[test] = [];
            var category = test.replace(/-.*/, '');
            testTotalsByCategory[category][test] = 0;
            testMeansByCategory[category][test] = 0;
            testStdDevsByCategory[category][test] = 0;
            testStdErrsByCategory[category][test] = 0;
        }
        for (var i = 0; i < count; i++) {
            itemTotals['total'][i] = 0;
            for (var category in categoryTotals) {
                itemTotals[category][i] = 0;
                for (var test in testTotalsByCategory[category]) {
                    itemTotals[test][i] = 0;
                }
            }
        }
    }
    function computeItemTotals() {
        for (var i = 0; i < output.length; i++) {
            var result = output[i];
            for (var test in result) {
                var time = result[test];
                var category = test.replace(/-.*/, '');
                itemTotals['total'][i] += time;
                itemTotals[category][i] += time;
                itemTotals[test][i] += time;
            }
        }
    }
    function computeTotals() {
        for (var i = 0; i < output.length; i++) {
            var result = output[i];
            for (var test in result) {
                var time = result[test];
                var category = test.replace(/-.*/, '');
                total += time;
                categoryTotals[category] += time;
                testTotalsByCategory[category][test] += time;
            }
        }
    }
    function computeMeans() {
        mean = total / count;
        for (var category in categoryTotals) {
            categoryMeans[category] = categoryTotals[category] / count;
            for (var test in testTotalsByCategory[category]) {
                testMeansByCategory[category][test] = testTotalsByCategory[category][test] / count;
            }
        }
    }
    function standardDeviation(mean, items) {
        var deltaSquaredSum = 0;
        for (var i = 0; i < items.length; i++) {
            var delta = items[i] - mean;
            deltaSquaredSum += delta * delta;
        }
        variance = deltaSquaredSum / (items.length - 1);
        return Math.sqrt(variance);
    }
    function computeStdDevs() {
        stdDev = standardDeviation(mean, itemTotals['total']);
        for (var category in categoryStdDevs) {
            categoryStdDevs[category] = standardDeviation(categoryMeans[category], itemTotals[category]);
        }
        for (var category in categoryStdDevs) {
            for (var test in testStdDevsByCategory[category]) {
                testStdDevsByCategory[category][test] = standardDeviation(testMeansByCategory[category][test], itemTotals[test]);
            }
        }
    }
    function computeStdErrors() {
        var sqrtCount = Math.sqrt(count);
        stdErr = stdDev / sqrtCount;
        for (var category in categoryStdErrs) {
            categoryStdErrs[category] = categoryStdDevs[category] / sqrtCount;
        }
        for (var category in categoryStdDevs) {
            for (var test in testStdErrsByCategory[category]) {
                testStdErrsByCategory[category][test] = testStdDevsByCategory[category][test] / sqrtCount;
            }
        }
    }
    var tDistribution = [
        NaN,
        NaN,
        12.71,
        4.3,
        3.18,
        2.78,
        2.57,
        2.45,
        2.36,
        2.31,
        2.26,
        2.23,
        2.2,
        2.18,
        2.16,
        2.14,
        2.13,
        2.12,
        2.11,
        2.1,
        2.09,
        2.09,
        2.08,
        2.07,
        2.07,
        2.06,
        2.06,
        2.06,
        2.05,
        2.05,
        2.05,
        2.04,
        2.04,
        2.04,
        2.03,
        2.03,
        2.03,
        2.03,
        2.03,
        2.02,
        2.02,
        2.02,
        2.02,
        2.02,
        2.02,
        2.02,
        2.01,
        2.01,
        2.01,
        2.01,
        2.01,
        2.01,
        2.01,
        2.01,
        2.01,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.99,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.98,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.97,
        1.96
    ];
    var tMax = tDistribution.length;
    var tLimit = 1.96;
    function tDist(n) {
        if (n > tMax)
            return tLimit;
        return tDistribution[n];
    }
    function formatResult(meanWidth, mean, stdErr, n, mode) {
        if (mean != mean) {
            var result = '';
            for (var i = 0; i < meanWidth - 3; ++i)
                result += ' ';
            if (mode == 'test')
                result += 'ERROR: Invalid test run.';
            else
                result += 'ERROR: Some tests failed.';
            return result;
        }
        var meanString = mean.toFixed(1).toString();
        while (meanString.length < meanWidth) {
            meanString = ' ' + meanString;
        }
        if (n == 1)
            return meanString + 'ms';
        return meanString + 'ms +/- ' + (tDist(n) * stdErr / mean * 100).toFixed(1) + '%';
    }
    function computeLabelWidth() {
        var width = 'Total'.length;
        for (var category in categoryMeans) {
            if (category.length + 2 > width)
                width = category.length + 2;
        }
        for (var i = 0; i < tests.length; i++) {
            var shortName = tests[i].replace(/^[^-]*-/, '');
            if (shortName.length + 4 > width)
                width = shortName.length + 4;
        }
        return width;
    }
    function computeMeanWidth() {
        var width = mean.toFixed(1).toString().length;
        for (var category in categoryMeans) {
            var candidate = categoryMeans[category].toFixed(2).toString().length;
            if (candidate > width)
                width = candidate;
            for (var test in testMeansByCategory[category]) {
                var candidate = testMeansByCategory[category][test].toFixed(2).toString().length;
                if (candidate > width)
                    width = candidate;
            }
        }
        return width;
    }
    function resultLine(labelWidth, indent, label, meanWidth, mean, stdErr, mode) {
        var result = '';
        for (i = 0; i < indent; i++) {
            result += ' ';
        }
        result += label + ': ';
        for (i = 0; i < labelWidth - (label.length + indent); i++) {
            result += ' ';
        }
        return result + formatResult(meanWidth, mean, stdErr, count, mode);
    }
    function printOutput() {
        var labelWidth = computeLabelWidth();
        var meanWidth = computeMeanWidth();
        print('\n');
        print('============================================');
        if (count == 1)
            print('RESULTS');
        else
            print('RESULTS (means and 95% confidence intervals)');
        print('--------------------------------------------');
        print(resultLine(labelWidth, 0, 'Total', meanWidth, mean, stdErr, 'total'));
        print('--------------------------------------------');
        for (var category in categoryMeans) {
            print('');
            print(resultLine(labelWidth, 2, category, meanWidth, categoryMeans[category], categoryStdErrs[category], 'category'));
            for (var test in testMeansByCategory[category]) {
                var shortName = test.replace(/^[^-]*-/, '');
                print(resultLine(labelWidth, 4, shortName, meanWidth, testMeansByCategory[category][test], testStdErrsByCategory[category][test], 'test'));
            }
        }
    }
    initialize();
    computeItemTotals();
    computeTotals();
    computeMeans();
    computeStdDevs();
    computeStdErrors();
    printOutput();
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