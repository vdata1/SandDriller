try {
    function foo() {
        throw () => {
            return () => {
            };
        };
    }
    Object.defineProperty(foo, 'length', { value: undefined });
    assert.sameValue(foo.bind(null, 1).length, 0, 'undefined');
    Object.defineProperty(foo, 'length', { value: null });
    assert.sameValue(foo.bind(null, 1).length, 0, 'null');
    Object.defineProperty(foo, 'length', { value: true });
    assert.sameValue(foo.bind(null, 1).length, 0, 'boolean');
    Object.defineProperty(foo, 'length', { value: '1' });
    assert.sameValue(foo.bind(null, 1).length, 0, 'string');
    Object.defineProperty(foo, 'length', { value: Symbol('1') });
    assert.sameValue(foo.bind(null, 1).length, 0, 'symbol');
    Object.defineProperty(foo, 'length', { value: new Number(1) });
    assert.sameValue(foo.bind(null, 1).length, 0, 'Number object');
    function bar() {
    }
    Object.setPrototypeOf(bar, { length: 42 });
    assert(delete bar.length);
    var bound = Function.prototype.bind.call(bar, null, 1);
    assert.sameValue(bound.length, 0, 'not own');
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