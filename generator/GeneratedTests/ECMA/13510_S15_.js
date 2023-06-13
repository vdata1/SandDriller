try {
    var __str__obj = new String('shocking blue');
    if (__str__obj['__custom__prop'] !== undefined) {
        $ERROR('#1: var __str__obj = new String("shocking blue"); __str__obj["__custom__prop"]===undefined. Actual: __str__obj["__custom__prop"]===' + __str__obj['__custom__prop']);
    }
    String.prototype.__custom__prop = 'bor';
    if (__str__obj['__custom__prop'] !== 'bor') {
        $ERROR('#2: var __str__obj = new String("shocking blue"); String.prototype.__custom__prop = "bor"; __str__obj["__custom__prop"]==="bor". Actual: __str__obj["__custom__prop"]===' + __str__obj['__custom__prop']);
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