try {
    var x1 = new Date(1899, 11, 31, 23, 59, 59);
    if (Object.prototype.toString.call(x1) !== '[object Date]') {
        $ERROR('#1: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x2 = new Date(1899, 12, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x2) !== '[object Date]') {
        $ERROR('#2: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x3 = new Date(1900, 0, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x3) !== '[object Date]') {
        $ERROR('#3: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x4 = new Date(1969, 11, 31, 23, 59, 59);
    if (Object.prototype.toString.call(x4) !== '[object Date]') {
        $ERROR('#4: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x5 = new Date(1969, 12, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x5) !== '[object Date]') {
        $ERROR('#5: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x6 = new Date(1970, 0, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x6) !== '[object Date]') {
        $ERROR('#6: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x7 = new Date(1999, 11, 31, 23, 59, 59);
    if (Object.prototype.toString.call(x7) !== '[object Date]') {
        $ERROR('#7: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x8 = new Date(1999, 12, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x8) !== '[object Date]') {
        $ERROR('#8: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x9 = new Date(2000, 0, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x9) !== '[object Date]') {
        $ERROR('#9: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x10 = new Date(2099, 11, 31, 23, 59, 59);
    if (Object.prototype.toString.call(x10) !== '[object Date]') {
        $ERROR('#10: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x11 = new Date(2099, 12, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x11) !== '[object Date]') {
        $ERROR('#11: The [[Class]] property of the newly constructed object is set to \'Date\'');
    }
    var x12 = new Date(2100, 0, 1, 0, 0, 0);
    if (Object.prototype.toString.call(x12) !== '[object Date]') {
        $ERROR('#12: The [[Class]] property of the newly constructed object is set to \'Date\'');
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