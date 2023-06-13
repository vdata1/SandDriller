try {
    function Coop() {
    }
    var coop = Array.of.call(Coop, 'Mike', 'Rick', 'Leo');
    assert.sameValue(coop.length, 3, 'Sets a length property with the number of arguments');
    assert.sameValue(coop[0], 'Mike', 'Sets each argument in order as integer properties - #1 argument');
    assert.sameValue(coop[1], 'Rick', 'Sets each argument in order as integer properties - #2 argument');
    assert.sameValue(coop[2], 'Leo', 'Sets each argument in order as integer properties - #3 argument');
    assert(coop instanceof Coop, 'Returns an instance from a custom constructor');
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