try {
    let test262Let;
    const test262Const = null;
    class test262Class {
    }
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; let test262Let;');
    }, '`let` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'No bindings created for script containing `let` redeclaration');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; let test262Const;');
    }, '`const` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'No bindings created for script containing `const` redeclaration');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; let test262Class;');
    }, '`class` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'No bindings created for script containing `class` redeclaration');
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