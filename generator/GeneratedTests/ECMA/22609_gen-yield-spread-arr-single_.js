try {
    var arr = [
        'a',
        'b',
        'c'
    ];
    var callCount = 0;
    var gen = {
        *method() {
            callCount += 1;
            yield [...yield];
        }
    }.method;
    var iter = gen();
    iter.next(false);
    var item = iter.next(arr);
    var value = item.value;
    assert.notSameValue(value, arr, 'value is a new array');
    assert(Array.isArray(value), 'value is an Array exotic object');
    assert.sameValue(value.length, 3);
    assert.sameValue(value[0], 'a');
    assert.sameValue(value[1], 'b');
    assert.sameValue(value[2], 'c');
    assert.sameValue(item.done, false);
    assert.sameValue(callCount, 1);
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