try {
    var date = new Date(2016, 6);
    var callCount = 0;
    var arg = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            args = arguments;
            thisValue = this;
            callCount += 1;
            return 2;
        }
    };
    var args, thisValue, returnValue;
    returnValue = date.setTime(arg);
    assert.sameValue(callCount, 1, 'invoked exactly once');
    assert.sameValue(args.length, 0, 'invoked without arguments');
    assert.sameValue(thisValue, arg, '"this" value');
    assert.sameValue(returnValue, 2, 'application of specified value');
    returnValue = date.setTime(null);
    assert.sameValue(returnValue, 0, 'null');
    returnValue = date.setTime(true);
    assert.sameValue(returnValue, 1, 'true');
    returnValue = date.setTime(false);
    assert.sameValue(returnValue, 0, 'false');
    returnValue = date.setTime('   +00200.000E-0002\t');
    assert.sameValue(returnValue, 2, 'string');
    returnValue = date.setTime();
    assert.sameValue(returnValue, NaN, 'undefined');
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