try {
    function DummyError() {
        let REPLACER = 23;
    }
    assert.throws(DummyError, function () {
        let REPLACER = 23;
        var base = undefined;
        var prop = function () {
            let REPLACER = 23;
            throw new DummyError();
        };
        var expr = function () {
            let REPLACER = 23;
            $ERROR('right-hand side expression evaluated');
        };
        base[prop()] = expr();
    });
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        var base = undefined;
        var prop = {
            toString: function () {
                $ERROR('property key evaluated');
            }
        };
        var expr = function () {
            $ERROR('right-hand side expression evaluated');
        };
        base[prop] = expr();
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