try {
    if (Boolean.prototype.toString(true) !== 'false') {
        $ERROR('#1: Boolean.prototype.toString(true) === "false"');
    }
    if (new Boolean().toString(true) !== 'false') {
        $ERROR('#2: (new Boolean()).toString(true) === "false"');
    }
    if (new Boolean(false).toString(true) !== 'false') {
        $ERROR('#3: (new Boolean(false)).toString(true) === "false"');
    }
    if (new Boolean(true).toString(false) !== 'true') {
        $ERROR('#4: (new Boolean(true)).toString(false) === "true"');
    }
    if (new Boolean(1).toString(false) !== 'true') {
        $ERROR('#5: (new Boolean(1)).toString(false) === "true"');
    }
    if (new Boolean(0).toString(true) !== 'false') {
        $ERROR('#6: (new Boolean(0)).toString(true) === "false"');
    }
    if (new Boolean(new Object()).toString(false) !== 'true') {
        $ERROR('#7: (new Boolean(new Object())).toString(false) === "true"');
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