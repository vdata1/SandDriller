try {
    function callbackfn1(val, idx, obj) {
        let REPLACER = 23;
        return parseInt(val, 10) > 1;
    }
    function callbackfn2(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        return parseInt(val, 10) > 2;
    }
    var str = new String('12');
    String.prototype[2] = '3';
    assert(Array.prototype.some.call(str, callbackfn1), 'Array.prototype.some.call(str, callbackfn1) !== true');
    assert.sameValue(Array.prototype.some.call(str, callbackfn2), false, 'Array.prototype.some.call(str, callbackfn2)');
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