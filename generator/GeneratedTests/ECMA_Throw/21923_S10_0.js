try {
    var ARG_STRING = 'value of the argument property';
    function f1() {
        throw () => {
            return () => {
            };
        };
        this.constructor.prototype.arguments = ARG_STRING;
        return arguments;
    }
    if (new f1(1, 2, 3, 4, 5).length !== 5)
        $ERROR('#1: (new f1(1,2,3,4,5)).length===5, where f1 returns "arguments" that is set to "' + ARG_STRING + '"');
    if (new f1(1, 2, 3, 4, 5)[3] !== 4)
        $ERROR('#2: (new f1(1,2,3,4,5))[3]===4, where f1 returns "arguments" that is set to "' + ARG_STRING + '"');
    var x = new f1(1, 2, 3, 4, 5);
    if (delete x[3] !== true)
        $ERROR('#3.1: Function parameters have attribute {DontDelete}');
    if (x[3] === 4)
        $ERROR('#3.2: Function parameters have attribute {DontDelete}');
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