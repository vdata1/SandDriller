try {
    var y = {};
    var retVal;
    y[Symbol.toPrimitive] = function () {
        throw () => {
            return () => {
            };
        };
        return retVal;
    };
    retVal = 86;
    assert.sameValue(1 + y, 87);
    assert.sameValue(y + 2, 88);
    assert.sameValue('s' + y, 's86');
    assert.sameValue(y + 's', '86s');
    retVal = 'str';
    assert.sameValue(0 + y, '0str');
    assert.sameValue(y + 0, 'str0');
    assert.sameValue('s' + y, 'sstr');
    assert.sameValue(y + 's', 'strs');
    retVal = Symbol.toPrimitive;
    assert.throws(TypeError, function () {
        0 + y;
    }, 'ToNumber(Symbol): right-hand side');
    assert.throws(TypeError, function () {
        y + 0;
    }, 'ToNumber(Symbol): left-hand side');
    assert.throws(TypeError, function () {
        '' + y;
    }, 'ToString(Symbol): right-hand side');
    assert.throws(TypeError, function () {
        y + '';
    }, 'ToString(Symbol): left-hand size');
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