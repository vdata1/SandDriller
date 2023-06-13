try {
    var obj = {
        '0': 'a',
        '1': 'b',
        '9007199254740990': 'c',
        '9007199254740991': 'd',
        '9007199254740992': 'e'
    };
    obj.length = -0;
    assert.sameValue([].includes.call(obj, 'a'), false, '-0');
    obj.length = -1;
    assert.sameValue([].includes.call(obj, 'a'), false, '-1');
    obj.length = -0.1;
    assert.sameValue([].includes.call(obj, 'a'), false, '-0.1');
    obj.length = -Infinity;
    assert.sameValue([].includes.call(obj, 'a'), false, '-Infinity');
    var fromIndex = 9007199254740990;
    obj.length = 9007199254740991;
    assert.sameValue([].includes.call(obj, 'c', fromIndex), true, '2**53-1, found value at 2**53-2');
    obj.length = 9007199254740991;
    assert.sameValue([].includes.call(obj, 'd', fromIndex), false, '2**53-1, ignores indexes >= 2**53-1');
    obj.length = 9007199254740992;
    assert.sameValue([].includes.call(obj, 'd', fromIndex), false, '2**53, ignores indexes >= 2**53-1');
    obj.length = 9007199254740992;
    assert.sameValue([].includes.call(obj, 'd', fromIndex), false, '2**53+1, ignores indexes >= 2**53-1');
    obj.length = Infinity;
    assert.sameValue([].includes.call(obj, 'c', fromIndex), true, 'Infinity, found item');
    assert.sameValue([].includes.call(obj, 'd', fromIndex), false, 'Infinity, ignores indexes >= 2**53-1');
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