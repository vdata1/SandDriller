try {
    var bool = new Boolean(true);
    assert(compareArray([bool], [].concat(bool)));
    bool[Symbol.isConcatSpreadable] = true;
    bool.length = 3;
    bool[0] = 1, bool[1] = 2, bool[2] = 3;
    assert(compareArray([
        1,
        2,
        3
    ], [].concat(bool)));
    Boolean.prototype[Symbol.isConcatSpreadable] = true;
    assert(compareArray([], [].concat(new Boolean(true))));
    Boolean.prototype[0] = 1;
    Boolean.prototype[1] = 2;
    Boolean.prototype[2] = 3;
    Boolean.prototype.length = 3;
    assert(compareArray([
        1,
        2,
        3
    ], [].concat(new Boolean(true))));
    assert(compareArray([true], [].concat(true)));
    delete Boolean.prototype[Symbol.isConcatSpreadable];
    delete Boolean.prototype[0];
    delete Boolean.prototype[1];
    delete Boolean.prototype[2];
    delete Boolean.prototype.length;
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