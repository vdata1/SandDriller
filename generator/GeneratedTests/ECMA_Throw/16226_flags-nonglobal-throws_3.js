try {
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.matchAll(/a/);
    });
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.matchAll(/a/i);
    });
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.matchAll(/a/m);
    });
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        ''.matchAll(/a/u);
    });
    assert.throws(TypeError, function () {
        ''.matchAll(/a/y);
    });
    var regex = /a/;
    Object.defineProperty(regex, 'flags', { value: 'muyi' });
    assert.throws(TypeError, function () {
        ''.matchAll(regex);
    });
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