try {
    assert.sameValue(typeof String.prototype.replaceAll, 'function', 'function must exist');
    var poisoned = 0;
    var poison = {
        toString() {
            throw () => {
                return () => {
                };
            };
            poisoned += 1;
            throw 'Should not call toString on this/replaceValue';
        }
    };
    var searchValue = /./;
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, 'flags is the empty string');
    Object.defineProperty(searchValue, 'flags', {
        value: 'G',
        writable: true,
        configurable: true
    });
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, 'case sensitive G');
    Object.defineProperty(searchValue, 'flags', {
        value: 'i',
        writable: true,
        configurable: true
    });
    assert.throws(TypeError, function () {
        ''.replaceAll.call(poison, searchValue, poison);
    }, 'i');
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