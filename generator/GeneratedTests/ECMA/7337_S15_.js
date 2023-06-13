try {
    var str = 'Obi-Wan Kenobi';
    if (typeof str !== 'string') {
        $ERROR('#1: "Obi-Wan Kenobi" is NOT a String');
    }
    var n_obj = new Object(str);
    if (n_obj.constructor !== String) {
        $ERROR('#2: When the Object constructor is called with String argument return ToObject(string)');
    }
    if (typeof n_obj !== 'object') {
        $ERROR('#3: When the Object constructor is called with String argument return ToObject(string)');
    }
    if (n_obj != str) {
        $ERROR('#4: When the Object constructor is called with String argument return ToObject(string)');
    }
    if (n_obj === str) {
        $ERROR('#5: When the Object constructor is called with String argument return ToObject(string)');
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