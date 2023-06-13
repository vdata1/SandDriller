try {
    var num = new Number(true);
    assert(compareArray([num], [].concat(num)));
    num[Symbol.isConcatSpreadable] = true;
    num.length = 3;
    num[0] = 1, num[1] = 2, num[2] = 3;
    assert(compareArray([
        1,
        2,
        3
    ], [].concat(num)));
    Number.prototype[Symbol.isConcatSpreadable] = true;
    assert(compareArray([], [].concat(new Number(123))));
    Number.prototype[0] = 1;
    Number.prototype[1] = 2;
    Number.prototype[2] = 3;
    Number.prototype.length = 3;
    assert(compareArray([
        1,
        2,
        3
    ], [].concat(new Number(123))));
    assert(compareArray([true], [].concat(true)));
    delete Number.prototype[Symbol.isConcatSpreadable];
    delete Number.prototype[0];
    delete Number.prototype[1];
    delete Number.prototype[2];
    delete Number.prototype.length;
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