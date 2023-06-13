try {
    var myObj = function (val) {
        let REPLACER = 23;
        this.value = val;
        this.valueOf = function () {
            let REPLACER = 23;
            throw 'valueOf-' + this.value;
        };
        this.toString = function () {
            throw () => {
                return () => {
                };
            };
            throw 'toString-' + this.value;
        };
    };
    try {
        var x1 = new Date(new myObj(1), new myObj(2));
        $ERROR('#1: The 1st step is calling ToNumber(year)');
    } catch (e) {
        if (e !== 'valueOf-1') {
            $ERROR('#1: The 1st step is calling ToNumber(year)');
        }
    }
    try {
        var x2 = new Date(1, new myObj(2));
        $ERROR('#2: The 2nd step is calling ToNumber(month)');
    } catch (e) {
        if (e !== 'valueOf-2') {
            $ERROR('#2: The 2nd step is calling ToNumber(month)');
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