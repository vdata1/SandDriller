try {
    if ('x' <= 'x' !== true) {
        $ERROR('#1: ("x" <= "x") === true');
    }
    if ('' <= 'x' !== true) {
        $ERROR('#2: ("" <= "x") === true');
    }
    if ('ab' <= 'abcd' !== true) {
        $ERROR('#3: ("ab" <= abcd") === true');
    }
    if ('abcd' <= 'abcd' !== true) {
        $ERROR('#4: ("abcd" <= abc\\u0064") === true');
    }
    if ('x' <= 'x' + 'y' !== true) {
        $ERROR('#5: ("x" <= "x" + "y") === true');
    }
    var x = 'x';
    if (x <= x + 'y' !== true) {
        $ERROR('#6: var x = "x"; (x <= x + "y") === true');
    }
    if ('a\0' <= 'a\0a' !== true) {
        $ERROR('#7: ("a\\u0000" <= "a\\u0000a") === true');
    }
    if ('x' <= ' x' !== false) {
        $ERROR('#8: ("x" <= " x") === false');
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