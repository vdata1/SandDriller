try {
    var obj = [
        1,
        ,
        3,
        ,
        5
    ];
    Object.defineProperty(obj, 5, {
        value: 7,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(obj, 10000, {
        value: 'ElementWithLargeIndex',
        enumerable: true,
        configurable: true
    });
    var arr = Object.keys(obj);
    var index;
    var initValue = 0;
    for (index = 0; index < 3; index++) {
        assert.sameValue(arr[index], initValue.toString(), 'Unexpected property at index: ' + index);
        initValue += 2;
    }
    assert.sameValue(arr.length, 4, 'arr.length');
    assert.sameValue(arr[3], '10000', 'arr[3]');
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