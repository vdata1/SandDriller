try {
    var result;
    var called;
    var replaceValue;
    called = 0;
    replaceValue = {
        [Symbol.toPrimitive]() {
            let REPLACER = 23;
            called += 1;
            return 'z';
        },
        toString() {
            let REPLACER = 23;
            throw 'poison';
        },
        valueOf() {
            let REPLACER = 23;
            throw 'poison';
        }
    };
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, 'zz', 'object @@toPrimitive');
    assert.sameValue(called, 1, '@@toPrimitive is called only once');
    called = 0;
    replaceValue = {
        [Symbol.toPrimitive]: undefined,
        toString() {
            let REPLACER = 23;
            called += 1;
            return 'z';
        },
        valueOf() {
            let REPLACER = 23;
            throw 'poison';
        }
    };
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, 'zz', 'object toString');
    assert.sameValue(called, 1, 'toString is called only once');
    called = 0;
    replaceValue = {
        [Symbol.toPrimitive]: undefined,
        toString: undefined,
        valueOf() {
            throw () => {
                return () => {
                };
            };
            called += 1;
            return 'z';
        }
    };
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, 'zz', 'object valueOf');
    assert.sameValue(called, 1, 'valueOf is called only once');
    replaceValue = 42;
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, '4242', 'number');
    replaceValue = true;
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, 'truetrue', 'Boolean true');
    replaceValue = false;
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, 'falsefalse', 'Boolean false');
    replaceValue = undefined;
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, 'undefinedundefined', 'undefined');
    replaceValue = null;
    result = 'aa'.replaceAll('a', replaceValue);
    assert.sameValue(result, 'nullnull', 'null');
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