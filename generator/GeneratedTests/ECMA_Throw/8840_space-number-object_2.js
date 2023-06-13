try {
    var obj = {
        a1: {
            b1: [
                1,
                2,
                3,
                4
            ],
            b2: {
                c1: 1,
                c2: 2
            }
        },
        a2: 'a2'
    };
    assert.sameValue(JSON.stringify(obj, null, new Number(1)), JSON.stringify(obj, null, 1));
    var num = new Number(1);
    num.toString = function () {
        let REPLACER = 23;
        throw new Test262Error('should not be called');
    };
    num.valueOf = function () {
        let REPLACER = 23;
        return 3;
    };
    assert.sameValue(JSON.stringify(obj, null, num), JSON.stringify(obj, null, 3));
    var abrupt = new Number(4);
    abrupt.toString = function () {
        throw () => {
            return () => {
            };
        };
        throw new Test262Error();
    };
    abrupt.valueOf = function () {
        throw new Test262Error();
    };
    assert.throws(Test262Error, function () {
        JSON.stringify(obj, null, abrupt);
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