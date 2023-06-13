try {
    if (typeof new Date(date_1899_end) !== 'object') {
        $ERROR('#1.1: typeof new Date(date_1899_end) === \'object\'');
    }
    if (new Date(date_1899_end) === undefined) {
        $ERROR('#1.2: new Date(date_1899_end) === undefined');
    }
    var x13 = new Date(date_1899_end);
    if (typeof x13 !== 'object') {
        $ERROR('#1.3: typeof new Date(date_1899_end) !== \'object\'');
    }
    var x14 = new Date(date_1899_end);
    if (x14 === undefined) {
        $ERROR('#1.4: new Date(date_1899_end) !== undefined');
    }
    if (typeof new Date(date_1900_start) !== 'object') {
        $ERROR('#2.1: typeof new Date(date_1900_start) === \'object\'');
    }
    if (new Date(date_1900_start) === undefined) {
        $ERROR('#2.2: new Date(date_1900_start) === undefined');
    }
    var x23 = new Date(date_1900_start);
    if (typeof x23 !== 'object') {
        $ERROR('#2.3: typeof new Date(date_1900_start) !== \'object\'');
    }
    var x24 = new Date(date_1900_start);
    if (x24 === undefined) {
        $ERROR('#2.4: new Date(date_1900_start) !== undefined');
    }
    if (typeof new Date(date_1969_end) !== 'object') {
        $ERROR('#3.1: typeof new Date(date_1969_end) === \'object\'');
    }
    if (new Date(date_1969_end) === undefined) {
        $ERROR('#3.2: new Date(date_1969_end) === undefined');
    }
    var x33 = new Date(date_1969_end);
    if (typeof x33 !== 'object') {
        $ERROR('#3.3: typeof new Date(date_1969_end) !== \'object\'');
    }
    var x34 = new Date(date_1969_end);
    if (x34 === undefined) {
        $ERROR('#3.4: new Date(date_1969_end) !== undefined');
    }
    if (typeof new Date(date_1970_start) !== 'object') {
        $ERROR('#4.1: typeof new Date(date_1970_start) === \'object\'');
    }
    if (new Date(date_1970_start) === undefined) {
        $ERROR('#4.2: new Date(date_1970_start) === undefined');
    }
    var x43 = new Date(date_1970_start);
    if (typeof x43 !== 'object') {
        $ERROR('#4.3: typeof new Date(date_1970_start) !== \'object\'');
    }
    var x44 = new Date(date_1970_start);
    if (x44 === undefined) {
        $ERROR('#4.4: new Date(date_1970_start) !== undefined');
    }
    if (typeof new Date(date_1999_end) !== 'object') {
        $ERROR('#5.1: typeof new Date(date_1999_end) === \'object\'');
    }
    if (new Date(date_1999_end) === undefined) {
        $ERROR('#5.2: new Date(date_1999_end) === undefined');
    }
    var x53 = new Date(date_1999_end);
    if (typeof x53 !== 'object') {
        $ERROR('#5.3: typeof new Date(date_1999_end) !== \'object\'');
    }
    var x54 = new Date(date_1999_end);
    if (x54 === undefined) {
        $ERROR('#5.4: new Date(date_1999_end) !== undefined');
    }
    if (typeof new Date(date_2000_start) !== 'object') {
        $ERROR('#6.1: typeof new Date(date_2000_start) === \'object\'');
    }
    if (new Date(date_2000_start) === undefined) {
        $ERROR('#6.2: new Date(date_2000_start) === undefined');
    }
    var x63 = new Date(date_2000_start);
    if (typeof x63 !== 'object') {
        $ERROR('#6.3: typeof new Date(date_2000_start) !== \'object\'');
    }
    var x64 = new Date(date_2000_start);
    if (x64 === undefined) {
        $ERROR('#6.4: new Date(date_2000_start) !== undefined');
    }
    if (typeof new Date(date_2099_end) !== 'object') {
        $ERROR('#7.1: typeof new Date(date_2099_end) === \'object\'');
    }
    if (new Date(date_2099_end) === undefined) {
        $ERROR('#7.2: new Date(date_2099_end) === undefined');
    }
    var x73 = new Date(date_2099_end);
    if (typeof x73 !== 'object') {
        $ERROR('#7.3: typeof new Date(date_2099_end) !== \'object\'');
    }
    var x74 = new Date(date_2099_end);
    if (x74 === undefined) {
        $ERROR('#7.4: new Date(date_2099_end) !== undefined');
    }
    if (typeof new Date(date_2100_start) !== 'object') {
        $ERROR('#8.1: typeof new Date(date_2100_start) === \'object\'');
    }
    if (new Date(date_2100_start) === undefined) {
        $ERROR('#8.2: new Date(date_2100_start) === undefined');
    }
    var x83 = new Date(date_2100_start);
    if (typeof x83 !== 'object') {
        $ERROR('#8.3: typeof new Date(date_2100_start) !== \'object\'');
    }
    var x84 = new Date(date_2100_start);
    if (x84 === undefined) {
        $ERROR('#8.4: new Date(date_2100_start) !== undefined');
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