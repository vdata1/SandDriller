try {
    if (encodeURIComponent('http://ru.wikipedia.org/wiki/Юникод') !== 'http%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4' && encodeURIComponent('http://ru.wikipedia.org/wiki/Юникод') !== 'http%3A%2F%2Fru.wikipedia.org%2Fwiki%2F' + '%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4'.toLowerCase()) {
        $ERROR('#1: http://ru.wikipedia.org/wiki/Юникод');
    }
    if (encodeURIComponent('http://ru.wikipedia.org/wiki/Юникод#Ссылки') !== 'http%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%23%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B8' && encodeURIComponent('http://ru.wikipedia.org/wiki/Юникод#Ссылки') !== 'http%3A%2F%2Fru.wikipedia.org%2Fwiki%2F' + '%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%23%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B8'.toLowerCase()) {
        $ERROR('#2: http://ru.wikipedia.org/wiki/Юникод#Ссылки');
    }
    if (encodeURIComponent('http://ru.wikipedia.org/wiki/Юникод#Версии Юникода') !== 'http%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%23%D0%92%D0%B5%D1%80%D1%81%D0%B8%D0%B8%20%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%D0%B0' && encodeURIComponent('http://ru.wikipedia.org/wiki/Юникод%23Версии Юникода') !== 'http%3A%2F%2Fru.wikipedia.org%2Fwiki%2F' + '%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4#%D0%92%D0%B5%D1%80%D1%81%D0%B8%D0%B8%20%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%D0%B0'.toLowerCase()) {
        $ERROR('#3: http://ru.wikipedia.org/wiki/Юникод#Версии Юникода');
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