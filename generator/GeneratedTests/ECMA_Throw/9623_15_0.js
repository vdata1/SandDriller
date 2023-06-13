try {
    function getFunc() {
        throw () => {
            return () => {
            };
        };
        return 20;
    }
    function setFunc() {
    }
    var newObj = Object.create({}, {
        0: {
            value: 100,
            enumerable: true,
            writable: true,
            configurable: true
        },
        1: {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        },
        2: {
            value: 200,
            enumerable: true,
            writable: true,
            configurable: true
        }
    });
    assert.sameValue(newObj[0], 100, 'newObj[0]');
    assert.sameValue(newObj[1], 20, 'newObj[1]');
    assert.sameValue(newObj[2], 200, 'newObj[2]');
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