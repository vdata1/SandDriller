try {
    var date = new Date(2016, 6);
    var callCount = 0;
    var arg = {
        valueOf: function () {
            args = arguments;
            thisValue = this;
            callCount += 1;
            return 2;
        }
    };
    var args, thisValue, returnValue;
    returnValue = date.setMinutes(0, arg);
    assert.sameValue(callCount, 1, 'invoked exactly once');
    assert.sameValue(args.length, 0, 'invoked without arguments');
    assert.sameValue(thisValue, arg, '"this" value');
    assert.sameValue(returnValue, new Date(2016, 6, 1, 0, 0, 2).getTime(), 'application of specified value');
    returnValue = date.setMinutes(0, null);
    assert.sameValue(returnValue, new Date(2016, 6, 1).getTime(), 'null');
    returnValue = date.setMinutes(0, true);
    assert.sameValue(returnValue, new Date(2016, 6, 1, 0, 0, 1).getTime(), 'true');
    returnValue = date.setMinutes(0, false);
    assert.sameValue(returnValue, new Date(2016, 6, 1).getTime(), 'false');
    returnValue = date.setMinutes(0, '   +00200.000E-0002\t');
    assert.sameValue(returnValue, new Date(2016, 6, 1, 0, 0, 2).getTime(), 'string');
    returnValue = date.setMinutes(0, undefined);
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