try {
    if (!(undefined !== null)) {
        $ERROR('#1: undefined !== null');
    }
    if (!(null !== undefined)) {
        $ERROR('#2: null !== undefined');
    }
    if (!(null !== 0)) {
        $ERROR('#3: null !== 0');
    }
    if (!(0 !== null)) {
        $ERROR('#4: 0 !== null');
    }
    if (!(null !== false)) {
        $ERROR('#5: null !== false');
    }
    if (!(false !== null)) {
        $ERROR('#6: false !== null');
    }
    if (!(undefined !== false)) {
        $ERROR('#7: undefined !== false');
    }
    if (!(false !== undefined)) {
        $ERROR('#8: false !== undefined');
    }
    if (!(null !== new Object())) {
        $ERROR('#9: null !== new Object()');
    }
    if (!(new Object() !== null)) {
        $ERROR('#10: new Object() !== null');
    }
    if (!(null !== 'null')) {
        $ERROR('#11: null !== "null"');
    }
    if (!('null' !== null)) {
        $ERROR('#12: "null" !== null');
    }
    if (!(undefined !== 'undefined')) {
        $ERROR('#13: undefined !== "undefined"');
    }
    if (!('undefined' !== undefined)) {
        $ERROR('#14: "undefined" !== undefined');
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