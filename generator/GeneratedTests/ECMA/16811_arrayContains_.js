try {
    const willMatch = [
        0,
        1,
        2
    ];
    assert(arrayContains([
        0,
        1,
        2,
        3
    ], willMatch));
    assert(arrayContains([
        null,
        0,
        1,
        2,
        3
    ], willMatch));
    assert(arrayContains([
        undefined,
        0,
        1,
        2,
        3
    ], willMatch));
    assert(arrayContains([
        false,
        0,
        1,
        2,
        3
    ], willMatch));
    assert(arrayContains([
        NaN,
        0,
        1,
        2,
        3
    ], willMatch));
    const willNotMatch = [
        1,
        0,
        2
    ];
    assert(!arrayContains([
        1,
        ,
        2
    ], willNotMatch), '[1, /* intentional hole */, 2], willNotMatch)');
    assert(!arrayContains([
        1,
        null,
        2
    ], willNotMatch), '[1, null, 2], willNotMatch)');
    assert(!arrayContains([
        1,
        undefined,
        2
    ], willNotMatch), '[1, undefined, 2], willNotMatch)');
    assert(!arrayContains([
        1,
        false,
        2
    ], willNotMatch), '[1, false, 2], willNotMatch)');
    assert(!arrayContains([
        1,
        NaN,
        2
    ], willNotMatch), '[1, NaN, 2], willNotMatch)');
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