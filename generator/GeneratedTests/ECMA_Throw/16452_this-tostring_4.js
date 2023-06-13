try {
    var result;
    var called;
    var thisValue;
    called = 0;
    thisValue = {
        [Symbol.toPrimitive]() {
            let REPLACER = 23;
            called += 1;
            return 'aa';
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
    result = ''.replaceAll.call(thisValue, 'a', 'z');
    assert.sameValue(result, 'zz', 'object @@toPrimitive');
    assert.sameValue(called, 1, '@@toPrimitive is called only once');
    called = 0;
    thisValue = {
        [Symbol.toPrimitive]: undefined,
        toString() {
            let REPLACER = 23;
            called += 1;
            return 'aa';
        },
        valueOf() {
            throw () => {
                return () => {
                };
            };
            throw 'poison';
        }
    };
    result = ''.replaceAll.call(thisValue, 'a', 'z');
    assert.sameValue(result, 'zz', 'object toString');
    assert.sameValue(called, 1, 'toString is called only once');
    called = 0;
    thisValue = {
        [Symbol.toPrimitive]: undefined,
        toString: undefined,
        valueOf() {
            called += 1;
            return 'aa';
        }
    };
    result = ''.replaceAll.call(thisValue, 'a', 'z');
    assert.sameValue(result, 'zz', 'object valueOf');
    assert.sameValue(called, 1, 'valueOf is called only once');
    thisValue = 4244;
    result = ''.replaceAll.call(thisValue, '4', 'z');
    assert.sameValue(result, 'z2zz', 'number');
    thisValue = true;
    result = ''.replaceAll.call(thisValue, 'ru', 'o m');
    assert.sameValue(result, 'to me', 'Boolean true');
    thisValue = false;
    result = ''.replaceAll.call(thisValue, 'al', 'on');
    assert.sameValue(result, 'fonse', 'Boolean false');
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