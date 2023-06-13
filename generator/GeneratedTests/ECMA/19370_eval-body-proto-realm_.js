try {
    var other = $262.createRealm().global;
    var fn = other.eval('(0, async function* () {})');
    var AsyncGeneratorPrototype = Object.getPrototypeOf(fn.prototype);
    fn.prototype = undefined;
    assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is undefined');
    fn.prototype = null;
    assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is null');
    fn.prototype = true;
    assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a Boolean');
    fn.prototype = 'str';
    assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a String');
    fn.prototype = Symbol();
    assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a Symbol');
    fn.prototype = 0;
    assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a Number');
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