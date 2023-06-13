try {
    Date.prototype.toString = Object.prototype.toString;
    var x1 = new Date(date_1899_end);
    if (x1.toString() !== '[object Date]') {
        $ERROR('#1: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x2 = new Date(date_1900_start);
    if (x2.toString() !== '[object Date]') {
        $ERROR('#2: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x3 = new Date(date_1969_end);
    if (x3.toString() !== '[object Date]') {
        $ERROR('#3: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x4 = new Date(date_1970_start);
    if (x4.toString() !== '[object Date]') {
        $ERROR('#4: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x5 = new Date(date_1999_end);
    if (x5.toString() !== '[object Date]') {
        $ERROR('#5: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x6 = new Date(date_2000_start);
    if (x6.toString() !== '[object Date]') {
        $ERROR('#6: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x7 = new Date(date_2099_end);
    if (x7.toString() !== '[object Date]') {
        $ERROR('#7: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x8 = new Date(date_2100_start);
    if (x8.toString() !== '[object Date]') {
        $ERROR('#8: The [[Class]] property of the newly constructed object is set to \'Date\'');
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