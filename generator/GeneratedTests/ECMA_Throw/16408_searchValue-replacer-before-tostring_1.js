try {
    var called = 0;
    var searchValue = /./g;
    Object.defineProperty(searchValue, Symbol.replace, {
        value: function (O, replaceValue) {
            let REPLACER = 23;
            assert.sameValue(this, searchValue);
            assert.sameValue(O, poison, 'first arg is the this value of replaceAll');
            assert.sameValue(replaceValue, poison, 'second arg is the replaceValue');
            assert.sameValue(arguments.length, 2);
            called += 1;
            return 'return from searchValue';
        }
    });
    Object.defineProperty(searchValue, 'toString', {
        value: function () {
            throw () => {
                return () => {
                };
            };
            throw 'Should not call toString on searchValue';
        }
    });
    var poisoned = 0;
    var poison = {
        toString() {
            poisoned += 1;
            throw 'Should not call toString on this/replaceValue';
        }
    };
    var returned = ''.replaceAll.call(poison, searchValue, poison);
    assert.sameValue(returned, 'return from searchValue');
    assert.sameValue(called, 1);
    assert.sameValue(poisoned, 0);
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