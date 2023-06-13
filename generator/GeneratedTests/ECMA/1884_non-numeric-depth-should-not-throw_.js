try {
    var a = [
        1,
        [2]
    ];
    var expected = a;
    var depthNum = 'TestString';
    var actual = a.flat(depthNum);
    assert(compareArray(actual, expected), 'non integral string depthNum');
    depthNum = {};
    actual = a.flat(depthNum);
    assert(compareArray(actual, expected), 'object type depthNum');
    depthNum = Number.NEGATIVE_INFINITY;
    actual = a.flat(depthNum);
    assert(compareArray(actual, expected), 'negative infinity depthNum');
    depthNum = +0;
    actual = a.flat(depthNum);
    assert(compareArray(actual, expected), 'positive zero depthNum');
    depthNum = -0;
    actual = a.flat(depthNum);
    assert(compareArray(actual, expected), 'negative zero depthNum');
    depthNum = '1';
    actual = a.flat(depthNum);
    expected = [
        1,
        2
    ];
    assert(compareArray(actual, expected), 'integral string depthNum');
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