try {
    var fn = function (a, b, c) {
        throw () => {
            return () => {
            };
        };
    };
    assert(compareArray([fn], [].concat(fn)));
    fn[Symbol.isConcatSpreadable] = true;
    fn[0] = 1, fn[1] = 2, fn[2] = 3;
    assert(compareArray([
        1,
        2,
        3
    ], [].concat(fn)));
    Function.prototype[Symbol.isConcatSpreadable] = true;
    assert(compareArray([
        void 0,
        void 0,
        void 0
    ], [].concat(function (a, b, c) {
    })));
    Function.prototype[0] = 1;
    Function.prototype[1] = 2;
    Function.prototype[2] = 3;
    assert(compareArray([
        1,
        2,
        3
    ], [].concat(function (a, b, c) {
    })));
    delete Function.prototype[Symbol.isConcatSpreadable];
    delete Function.prototype[0];
    delete Function.prototype[1];
    delete Function.prototype[2];
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