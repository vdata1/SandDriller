try {
    var BaseClass = class {
    };
    assert.sameValue(BaseClass.hasOwnProperty('caller'), false, 'No "caller" own property');
    assert.sameValue(BaseClass.hasOwnProperty('arguments'), false, 'No "arguments" own property');
    assert.throws(TypeError, function () {
        return BaseClass.caller;
    });
    assert.throws(TypeError, function () {
        BaseClass.caller = {};
    });
    assert.throws(TypeError, function () {
        return BaseClass.arguments;
    });
    assert.throws(TypeError, function () {
        BaseClass.arguments = {};
    });
    var SubClass = class extends BaseClass {
    };
    assert.sameValue(SubClass.hasOwnProperty('caller'), false, 'No "caller" own property');
    assert.sameValue(SubClass.hasOwnProperty('arguments'), false, 'No "arguments" own property');
    assert.throws(TypeError, function () {
        return SubClass.caller;
    });
    assert.throws(TypeError, function () {
        SubClass.caller = {};
    });
    assert.throws(TypeError, function () {
        return SubClass.arguments;
    });
    assert.throws(TypeError, function () {
        SubClass.arguments = {};
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