try {
    var arr = [
        'a',
        'b',
        'c'
    ];
    Array.prototype[0] = 'test';
    var newArr = arr.splice(2, 1, 'd');
    var verifyValue = false;
    verifyValue = arr.length === 3 && arr[0] === 'a' && arr[1] === 'b' && arr[2] === 'd' && newArr[0] === 'c' && newArr.length === 1;
    var verifyEnumerable = false;
    for (var p in newArr) {
        if (newArr.hasOwnProperty('0') && p === '0') {
            verifyEnumerable = true;
        }
    }
    var verifyWritable = false;
    newArr[0] = 12;
    verifyWritable = newArr[0] === 12;
    var verifyConfigurable = false;
    delete newArr[0];
    verifyConfigurable = newArr.hasOwnProperty('0');
    assert(verifyValue, 'verifyValue !== true');
    assert.sameValue(verifyConfigurable, false, 'verifyConfigurable');
    assert(verifyEnumerable, 'verifyEnumerable !== true');
    assert(verifyWritable, 'verifyWritable !== true');
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