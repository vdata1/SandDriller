try {
    var plain = {};
    var custom = {
        toString: function () {
            return '"own" toString';
        }
    };
    assert.sameValue(`${ plain }`, '[object Object]');
    assert.sameValue(`1${ plain }`, '1[object Object]');
    assert.sameValue(`${ plain }2`, '[object Object]2');
    assert.sameValue(`1${ plain }2`, '1[object Object]2');
    assert.sameValue(`${ custom }`, '"own" toString');
    assert.sameValue(`1${ custom }`, '1"own" toString');
    assert.sameValue(`${ custom }2`, '"own" toString2');
    assert.sameValue(`1${ custom }2`, '1"own" toString2');
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