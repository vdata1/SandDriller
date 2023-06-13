try {
    var x11 = new Date(date_1899_end);
    if (typeof x11.constructor.prototype !== 'object') {
        $ERROR('#1.1: typeof x11.constructor.prototype === \'object\'');
    }
    var x12 = new Date(date_1899_end);
    if (!Date.prototype.isPrototypeOf(x12)) {
        $ERROR('#1.2: Date.prototype.isPrototypeOf(x12)');
    }
    var x13 = new Date(date_1899_end);
    if (Date.prototype !== x13.constructor.prototype) {
        $ERROR('#1.3: Date.prototype !== x13.constructor.prototype');
    }
    var x21 = new Date(date_1900_start);
    if (typeof x21.constructor.prototype !== 'object') {
        $ERROR('#2.1: typeof x21.constructor.prototype === \'object\'');
    }
    var x22 = new Date(date_1900_start);
    if (!Date.prototype.isPrototypeOf(x22)) {
        $ERROR('#2.2: Date.prototype.isPrototypeOf(x22)');
    }
    var x23 = new Date(date_1900_start);
    if (Date.prototype !== x23.constructor.prototype) {
        $ERROR('#2.3: Date.prototype !== x23.constructor.prototype');
    }
    var x31 = new Date(date_1969_end);
    if (typeof x31.constructor.prototype !== 'object') {
        $ERROR('#3.1: typeof x31.constructor.prototype === \'object\'');
    }
    var x32 = new Date(date_1969_end);
    if (!Date.prototype.isPrototypeOf(x32)) {
        $ERROR('#3.2: Date.prototype.isPrototypeOf(x32)');
    }
    var x33 = new Date(date_1969_end);
    if (Date.prototype !== x33.constructor.prototype) {
        $ERROR('#3.3: Date.prototype !== x33.constructor.prototype');
    }
    var x41 = new Date(date_1970_start);
    if (typeof x41.constructor.prototype !== 'object') {
        $ERROR('#4.1: typeof x11.constructor.prototype === \'object\'');
    }
    var x42 = new Date(date_1970_start);
    if (!Date.prototype.isPrototypeOf(x42)) {
        $ERROR('#4.2: Date.prototype.isPrototypeOf(x42)');
    }
    var x43 = new Date(date_1970_start);
    if (Date.prototype !== x43.constructor.prototype) {
        $ERROR('#4.3: Date.prototype !== x43.constructor.prototype');
    }
    var x51 = new Date(date_1999_end);
    if (typeof x51.constructor.prototype !== 'object') {
        $ERROR('#5.1: typeof x51.constructor.prototype === \'object\'');
    }
    var x52 = new Date(date_1999_end);
    if (!Date.prototype.isPrototypeOf(x52)) {
        $ERROR('#5.2: Date.prototype.isPrototypeOf(x52)');
    }
    var x53 = new Date(date_1999_end);
    if (Date.prototype !== x53.constructor.prototype) {
        $ERROR('#5.3: Date.prototype !== x53.constructor.prototype');
    }
    var x61 = new Date(date_2000_start);
    if (typeof x61.constructor.prototype !== 'object') {
        $ERROR('#6.1: typeof x61.constructor.prototype === \'object\'');
    }
    var x62 = new Date(date_2000_start);
    if (!Date.prototype.isPrototypeOf(x62)) {
        $ERROR('#6.2: Date.prototype.isPrototypeOf(x62)');
    }
    var x63 = new Date(date_2000_start);
    if (Date.prototype !== x63.constructor.prototype) {
        $ERROR('#6.3: Date.prototype !== x63.constructor.prototype');
    }
    var x71 = new Date(date_2099_end);
    if (typeof x71.constructor.prototype !== 'object') {
        $ERROR('#7.1: typeof x71.constructor.prototype === \'object\'');
    }
    var x72 = new Date(date_2099_end);
    if (!Date.prototype.isPrototypeOf(x72)) {
        $ERROR('#7.2: Date.prototype.isPrototypeOf(x72)');
    }
    var x73 = new Date(date_2099_end);
    if (Date.prototype !== x73.constructor.prototype) {
        $ERROR('#7.3: Date.prototype !== x73.constructor.prototype');
    }
    var x81 = new Date(date_2100_start);
    if (typeof x81.constructor.prototype !== 'object') {
        $ERROR('#8.1: typeof x81.constructor.prototype === \'object\'');
    }
    var x82 = new Date(date_2100_start);
    if (!Date.prototype.isPrototypeOf(x82)) {
        $ERROR('#8.2: Date.prototype.isPrototypeOf(x82)');
    }
    var x83 = new Date(date_2100_start);
    if (Date.prototype !== x83.constructor.prototype) {
        $ERROR('#8.3: Date.prototype !== x83.constructor.prototype');
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