try {
    var TAConstructors = [
        Float64Array,
        Float32Array,
        Int32Array,
        Int16Array,
        Int8Array,
        Uint32Array,
        Uint16Array,
        Uint8Array,
        Uint8ClampedArray
    ];
    var length = TAConstructors.length;
    assert(arrayContains(typedArrayConstructors, TAConstructors), 'All TypedArray constructors are accounted for');
    assert(typeof TypedArray === 'function');
    assert.sameValue(TypedArray, Object.getPrototypeOf(Uint8Array));
    var callCount = 0;
    testWithTypedArrayConstructors(() => callCount++);
    assert.sameValue(callCount, length);
    assert.sameValue(typedArrayConstructors[0], Float64Array);
    assert.sameValue(typedArrayConstructors[1], Float32Array);
    assert.sameValue(typedArrayConstructors[2], Int32Array);
    assert.sameValue(typedArrayConstructors[3], Int16Array);
    assert.sameValue(typedArrayConstructors[4], Int8Array);
    assert.sameValue(typedArrayConstructors[5], Uint32Array);
    assert.sameValue(typedArrayConstructors[6], Uint16Array);
    assert.sameValue(typedArrayConstructors[7], Uint8Array);
    assert.sameValue(typedArrayConstructors[8], Uint8ClampedArray);
    assert.sameValue(typedArrayConstructors[0], TAConstructors[0]);
    assert.sameValue(typedArrayConstructors[1], TAConstructors[1]);
    assert.sameValue(typedArrayConstructors[2], TAConstructors[2]);
    assert.sameValue(typedArrayConstructors[3], TAConstructors[3]);
    assert.sameValue(typedArrayConstructors[4], TAConstructors[4]);
    assert.sameValue(typedArrayConstructors[5], TAConstructors[5]);
    assert.sameValue(typedArrayConstructors[6], TAConstructors[6]);
    assert.sameValue(typedArrayConstructors[7], TAConstructors[7]);
    assert.sameValue(typedArrayConstructors[8], TAConstructors[8]);
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