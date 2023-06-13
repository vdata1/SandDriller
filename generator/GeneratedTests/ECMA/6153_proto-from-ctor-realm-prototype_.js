try {
    var realmA = $262.createRealm().global;
    realmA.calls = 0;
    var aGeneratorFunction = realmA.eval('(function* () {})').constructor;
    var aGeneratorPrototype = Object.getPrototypeOf(realmA.eval('(function* () {})').prototype);
    var realmB = $262.createRealm().global;
    var bGeneratorFunction = realmB.eval('(function* () {})').constructor;
    var newTarget = new realmB.Function();
    newTarget.prototype = null;
    var fn = Reflect.construct(aGeneratorFunction, ['calls += 1;'], newTarget);
    assert.sameValue(Object.getPrototypeOf(fn), bGeneratorFunction.prototype);
    assert.sameValue(Object.getPrototypeOf(fn.prototype), aGeneratorPrototype);
    var gen = fn();
    assert(gen instanceof realmA.Object);
    gen.next();
    assert.sameValue(realmA.calls, 1);
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