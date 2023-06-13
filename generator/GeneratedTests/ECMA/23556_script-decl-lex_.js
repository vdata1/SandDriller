try {
    Object.preventExtensions(this);
    $262.evalScript('let test262let = 1;');
    test262let = 2;
    assert.sameValue(test262let, 2, '`let` binding is mutable');
    assert.sameValue(this.hasOwnProperty('test262let'), false, 'property not created on the global object (let)');
    $262.evalScript('const test262const = 3;');
    assert.throws(TypeError, function () {
        test262const = 4;
    }, '`const` binding is strictly immutable');
    assert.sameValue(test262const, 3, '`const` binding cannot be modified');
    assert.sameValue(this.hasOwnProperty('test262const'), false, 'property not created on the global object (const)');
    $262.evalScript('class test262class {}');
    test262class = 5;
    assert.sameValue(test262class, 5, '`class` binding is mutable');
    assert.sameValue(this.hasOwnProperty('test262class'), false, 'property not created on the global object (class)');
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