try {
    if (1 / Math.round(-0.5) !== 1 / -0) {
        $ERROR('#1: \'1 / Math.round(-0.5) !== 1 / -0\'');
    }
    if (1 / Math.round(-0.25) !== 1 / -0) {
        $ERROR('#2: \'1 / Math.round(-0.25) !== 1 / -0\'');
    }
    if (1 / Math.round(-0) !== 1 / -0) {
        $ERROR('#3: \'1 / Math.round(-0) !== 1 / -0\'');
    }
    var x = 0;
    x = 0.5 - Number.EPSILON / 4;
    if (1 / Math.round(x) !== 1 / 0) {
        $ERROR('#4: \'1 / Math.round(' + x + ') !== 1 / 0\'');
    }
    x = -(2 / Number.EPSILON - 1);
    if (Math.round(x) !== x) {
        $ERROR('#5: \'Math.round(' + x + ') !== ' + x + '\'');
    }
    x = -(1.5 / Number.EPSILON - 1);
    if (Math.round(x) !== x) {
        $ERROR('#6: \'Math.round(' + x + ') !== ' + x + '\'');
    }
    x = -(1 / Number.EPSILON + 1);
    if (Math.round(x) !== x) {
        $ERROR('#7: \'Math.round(' + x + ') !== ' + x + '\'');
    }
    x = 1 / Number.EPSILON + 1;
    if (Math.round(x) !== x) {
        $ERROR('#8: \'Math.round(' + x + ') !== ' + x + '\'');
    }
    x = 1.5 / Number.EPSILON - 1;
    if (Math.round(x) !== x) {
        $ERROR('#9: \'Math.round(' + x + ') !== ' + x + '\'');
    }
    x = 2 / Number.EPSILON - 1;
    if (Math.round(x) !== x) {
        $ERROR('#10: \'Math.round(' + x + ') !== ' + x + '\'');
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