try {
    var other = $262.createRealm().global;
    var newTarget = new other.Function();
    var dtf;
    newTarget.prototype = undefined;
    dtf = Reflect.construct(Intl.DateTimeFormat, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(dtf), other.Intl.DateTimeFormat.prototype, 'newTarget.prototype is undefined');
    newTarget.prototype = null;
    dtf = Reflect.construct(Intl.DateTimeFormat, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(dtf), other.Intl.DateTimeFormat.prototype, 'newTarget.prototype is null');
    newTarget.prototype = false;
    dtf = Reflect.construct(Intl.DateTimeFormat, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(dtf), other.Intl.DateTimeFormat.prototype, 'newTarget.prototype is a Boolean');
    newTarget.prototype = 'str';
    dtf = Reflect.construct(Intl.DateTimeFormat, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(dtf), other.Intl.DateTimeFormat.prototype, 'newTarget.prototype is a String');
    newTarget.prototype = Symbol();
    dtf = Reflect.construct(Intl.DateTimeFormat, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(dtf), other.Intl.DateTimeFormat.prototype, 'newTarget.prototype is a Symbol');
    newTarget.prototype = 1;
    dtf = Reflect.construct(Intl.DateTimeFormat, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(dtf), other.Intl.DateTimeFormat.prototype, 'newTarget.prototype is a Number');
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