try {
    Object.defineProperty(this, 'data1', {
        configurable: false,
        value: 0,
        writable: true,
        enumerable: false
    });
    Object.defineProperty(this, 'data2', {
        configurable: false,
        value: 0,
        writable: false,
        enumerable: true
    });
    Object.defineProperty(this, 'data3', {
        configurable: false,
        value: 0,
        writable: false,
        enumerable: false
    });
    Object.defineProperty(this, 'accessor1', {
        configurable: false,
        get: function () {
        },
        set: function () {
        },
        enumerable: true
    });
    Object.defineProperty(this, 'accessor2', {
        configurable: false,
        get: function () {
        },
        set: function () {
        },
        enumerable: true
    });
    assert.throws(TypeError, function () {
        $262.evalScript('var x; function data1() {}');
    }, 'writable, non-enumerable data property');
    assert.throws(ReferenceError, function () {
        x;
    }, 'bindings not created for writable, non-enumerable data property');
    assert.throws(TypeError, function () {
        $262.evalScript('var x; function data2() {}');
    }, 'non-writable, enumerable data property');
    assert.throws(ReferenceError, function () {
        x;
    }, 'bindings not created for non-writable, enumerable data property');
    assert.throws(TypeError, function () {
        $262.evalScript('var x; function data3() {}');
    }, 'non-writable, non-enumerable data property');
    assert.throws(ReferenceError, function () {
        x;
    }, 'bindings not created for non-writable, non-enumerable data property');
    assert.throws(TypeError, function () {
        $262.evalScript('var x; function accessor1() {}');
    }, 'enumerable accessor property');
    assert.throws(ReferenceError, function () {
        x;
    }, 'bindings not created for enumerableaccessor property');
    assert.throws(TypeError, function () {
        $262.evalScript('var x; function accessor2() {}');
    }, 'non-enumerable accessor property');
    assert.throws(ReferenceError, function () {
        x;
    }, 'bindings not created for non-enumerableaccessor property');
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