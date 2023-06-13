try {
    var num = 1;
    if (typeof num !== 'number') {
        $ERROR('#1: 1.0 is NOT a number');
    }
    var n_obj = new Object(num);
    if (n_obj.constructor !== Number) {
        $ERROR('#2: When the Object constructor is called with Number argument return ToObject(number)');
    }
    if (typeof n_obj !== 'object') {
        $ERROR('#3: When the Object constructor is called with Number argument return ToObject(number)');
    }
    if (n_obj != num) {
        $ERROR('#4: When the Object constructor is called with Number argument return ToObject(number)');
    }
    if (n_obj === num) {
        $ERROR('#5: When the Object constructor is called with Number argument return ToObject(number)');
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