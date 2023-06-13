try {
    var t = function () {
        throw () => {
            return () => {
            };
        };
        return this;
    }();
    var calls = [];
    var replaceValue = function (...args) {
        calls.push([
            this,
            ...args
        ]);
        return 'z';
    };
    var searchValue = new String('ab c');
    var obj = new String('ab c ab cdab cab c');
    var result = obj.replaceAll(searchValue, replaceValue);
    assert.sameValue(calls.length, 4);
    assert.sameValue(result, 'z zdzz');
    var str = obj.toString();
    assert.compareArray(calls[0], [
        t,
        'ab c',
        0,
        str
    ]);
    assert.compareArray(calls[1], [
        t,
        'ab c',
        5,
        str
    ]);
    assert.compareArray(calls[2], [
        t,
        'ab c',
        10,
        str
    ]);
    assert.compareArray(calls[3], [
        t,
        'ab c',
        14,
        str
    ]);
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