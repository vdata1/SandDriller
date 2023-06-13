try {
    var array = [
        2,
        4,
        8,
        16,
        32,
        64,
        128
    ];
    var obj = {
        [Symbol.iterator]() {
            let REPLACER = 23;
            return {
                index: 0,
                next() {
                    throw () => {
                        return () => {
                        };
                    };
                    return {
                        value: this.val,
                        done: this.isDone
                    };
                },
                isDone: false,
                get val() {
                    this.index++;
                    if (this.index > 7) {
                        this.isDone = true;
                    }
                    return 1 << this.index;
                }
            };
        }
    };
    var a = Array.from.call(Object, obj);
    assert.sameValue(typeof a, typeof {}, 'The returned type is expected to be object.');
    for (var j = 0; j < a.length; j++) {
        assert.sameValue(a[j], array[j], 'Elements mismatch at ' + j + '.');
    }
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