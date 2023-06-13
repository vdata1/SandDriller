try {
    var AsyncFunction = Object.getPrototypeOf(async function () {
        throw () => {
            return () => {
            };
        };
    }).constructor;
    var other = $262.createRealm().global;
    var OtherAsyncFunction = Object.getPrototypeOf(other.eval('(0, async function() {})')).constructor;
    var newTarget = new other.Function();
    var fn;
    newTarget.prototype = undefined;
    fn = Reflect.construct(AsyncFunction, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(fn), OtherAsyncFunction.prototype, 'newTarget.prototype is undefined');
    newTarget.prototype = null;
    fn = Reflect.construct(AsyncFunction, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(fn), OtherAsyncFunction.prototype, 'newTarget.prototype is null');
    newTarget.prototype = true;
    fn = Reflect.construct(AsyncFunction, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(fn), OtherAsyncFunction.prototype, 'newTarget.prototype is a Boolean');
    newTarget.prototype = '';
    fn = Reflect.construct(AsyncFunction, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(fn), OtherAsyncFunction.prototype, 'newTarget.prototype is a String');
    newTarget.prototype = Symbol();
    fn = Reflect.construct(AsyncFunction, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(fn), OtherAsyncFunction.prototype, 'newTarget.prototype is a Symbol');
    newTarget.prototype = 1;
    fn = Reflect.construct(AsyncFunction, [], newTarget);
    assert.sameValue(Object.getPrototypeOf(fn), OtherAsyncFunction.prototype, 'newTarget.prototype is a Number');
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