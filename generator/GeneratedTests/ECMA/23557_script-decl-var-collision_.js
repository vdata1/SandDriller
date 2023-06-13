try {
    var test262Var;
    let test262Let;
    const test262Const = null;
    class test262Class {
    }
    $262.evalScript('var test262Var;');
    $262.evalScript('function test262Var() {}');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; var test262Let;');
    }, '`var` on `let` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'no bindings created (script declaring a `var` on a `let` binding)');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; var test262Const;');
    }, '`var` on `const` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'no bindings created (script declaring a `var` on a `const` binding)');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; var test262Class;');
    }, '`var` on `class` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'no bindings created (script declaring a `var` on a `class` binding)');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; function test262Let() {}');
    }, 'function on `let` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'no bindings created (script declaring a function on a `let` binding)');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; function test262Const() {}');
    }, 'function on `const` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'no bindings created (script declaring a function on a `const` binding)');
    assert.throws(SyntaxError, function () {
        $262.evalScript('var x; function test262Class() {}');
    }, 'function on `class` binding');
    assert.throws(ReferenceError, function () {
        x;
    }, 'no bindings created (script declaring a function on a class binding)');
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