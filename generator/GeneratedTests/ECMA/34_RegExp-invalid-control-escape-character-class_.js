try {
    function* invalidControls() {
        for (let alpha = 0; alpha <= 127; alpha++) {
            let letter = String.fromCharCode(alpha);
            if (!letter.match(/[0-9A-Za-z_\$(|)\[\]\/\\^]/)) {
                yield letter;
            }
        }
        yield '';
    }
    for (let letter of invalidControls()) {
        var source = '[\\c' + letter + ']';
        var re = new RegExp(source);
        if (letter.length > 0) {
            var char = letter.charCodeAt(0);
            var str = String.fromCharCode(char % 32);
            var arr = re.exec(str);
            if (str !== letter && arr !== null) {
                $ERROR(`Character ${ letter } unreasonably wrapped around as a control character`);
            }
            arr = re.exec(letter);
            if (arr === null) {
                $ERROR(`Character ${ letter } missing from character class ${ source }`);
            }
        }
        arr = re.exec('\\');
        if (arr === null) {
            $ERROR(`Character \\ missing from character class ${ source }`);
        }
        arr = re.exec('c');
        if (arr === null) {
            $ERROR(`Character c missing from character class ${ source }`);
        }
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