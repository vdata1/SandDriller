try {
    function longDenseArray() {
        var a = [0];
        for (var i = 0; i < 1024; i++) {
            a[i] = i;
        }
        return a;
    }
    function shorten() {
        currArray.length = 20;
        return 1000;
    }
    var array = [];
    array.length = 20;
    var currArray = longDenseArray();
    assert(compareArray(currArray.copyWithin(0, { valueOf: shorten }), array), 'coercion side-effect makes start out of bounds');
    currArray = longDenseArray();
    Object.setPrototypeOf(currArray, longDenseArray());
    var array2 = longDenseArray();
    array2.length = 20;
    for (var i = 0; i < 24; i++) {
        array2[i] = Object.getPrototypeOf(currArray)[i + 1000];
    }
    assert(compareArray(currArray.copyWithin(0, { valueOf: shorten }), array2), 'coercion side-effect makes start out of bounds with prototype');
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