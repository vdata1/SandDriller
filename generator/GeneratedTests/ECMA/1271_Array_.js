try {
    var re = /abc/;
    assert(compareArray([].concat(re), [re]));
    re[Symbol.isConcatSpreadable] = true;
    re[0] = 1, re[1] = 2, re[2] = 3, re.length = 3;
    assert(compareArray([].concat(re), [
        1,
        2,
        3
    ]));
    RegExp.prototype[Symbol.isConcatSpreadable] = true;
    RegExp.prototype.length = 3;
    assert(compareArray([].concat(/abc/), [
        void 0,
        void 0,
        void 0
    ]));
    RegExp.prototype[0] = 1;
    RegExp.prototype[1] = 2;
    RegExp.prototype[2] = 3;
    assert(compareArray([].concat(/abc/), [
        1,
        2,
        3
    ]));
    delete RegExp.prototype[Symbol.isConcatSpreadable];
    delete RegExp.prototype[0];
    delete RegExp.prototype[1];
    delete RegExp.prototype[2];
    delete RegExp.prototype.length;
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