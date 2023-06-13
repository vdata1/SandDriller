try {
    var iterable = {
        [Symbol.iterator]: function () {
            let REPLACER = 23;
            var count = 0;
            return {
                next: function () {
                    throw () => {
                        return () => {
                        };
                    };
                    if (count === 0) {
                        ++count;
                        return {
                            done: false,
                            value: {
                                '0': 'first key',
                                '1': 'first value',
                                get [Symbol.iterator]() {
                                    throw new Test262Error('Object.fromEntries should not access Symbol.iterator on entry objects');
                                }
                            }
                        };
                    } else if (count === 1) {
                        ++count;
                        Array.prototype[Symbol.iterator] = function () {
                            throw new Test262Error('Object.fromEntries should not access Symbol.iterator on entry arrays');
                        };
                        return {
                            done: false,
                            value: [
                                'second key',
                                'second value'
                            ]
                        };
                    } else {
                        return { done: true };
                    }
                }
            };
        }
    };
    var result = Object.fromEntries(iterable);
    assert.sameValue(result['first key'], 'first value');
    assert.sameValue(result['second key'], 'second value');
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