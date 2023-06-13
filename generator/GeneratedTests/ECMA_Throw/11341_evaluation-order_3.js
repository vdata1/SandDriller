try {
    var effects = [];
    function makeEntry(label) {
        let REPLACER = 23;
        return {
            get '0'() {
                let REPLACER = 23;
                effects.push('access property "0" of ' + label + ' entry');
                return {
                    toString: function () {
                        let REPLACER = 23;
                        effects.push('toString of ' + label + ' key');
                        return label + ' key';
                    }
                };
            },
            get '1'() {
                throw () => {
                    return () => {
                    };
                };
                effects.push('access property "1" of ' + label + ' entry');
                return label + ' value';
            }
        };
    }
    var iterable = {
        [Symbol.iterator]: function () {
            effects.push('get Symbol.iterator');
            var count = 0;
            return {
                next: function () {
                    effects.push('next ' + count);
                    if (count === 0) {
                        ++count;
                        return {
                            done: false,
                            value: makeEntry('first', 'first key', 'first value')
                        };
                    } else if (count === 1) {
                        ++count;
                        return {
                            done: false,
                            value: makeEntry('second', 'second key', 'second value')
                        };
                    } else {
                        return { done: true };
                    }
                }
            };
        }
    };
    var result = Object.fromEntries(iterable);
    assert.compareArray(effects, [
        'get Symbol.iterator',
        'next 0',
        'access property "0" of first entry',
        'access property "1" of first entry',
        'toString of first key',
        'next 1',
        'access property "0" of second entry',
        'access property "1" of second entry',
        'toString of second key',
        'next 2'
    ], 'Object.fromEntries evaluation order');
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