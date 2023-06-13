try {
    var s1 = 'First getter';
    var s2 = 'First setter';
    var s3 = 'Second getter';
    var o;
    eval('o = {get foo(){ return s1;},set foo(arg){return s2 = s3}, get bar(){ return s3}, set bar(arg){ s3 = arg;}};');
    assert.sameValue(o.foo, s1, 'o.foo');
    o.foo = 10;
    assert.sameValue(s2, s3, 's2');
    assert.sameValue(o.bar, s3, 'o.bar');
    o.bar = 'Second setter';
    assert.sameValue(o.bar, 'Second setter', 'o.bar');
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