try {
    assert.sameValue(Object.prototype.toString.call(function () {
    }), '[object Function]', 'Object.prototype.toString.call(function() {}) returns [object Function]');
    assert.sameValue(Object.prototype.toString.call(Object(function () {
    })), '[object Function]', 'Object.prototype.toString.call(Object(function() {})) returns [object Function]');
    assert.sameValue(Object.prototype.toString.call(Function()), '[object Function]', 'Object.prototype.toString.call(Function()) returns [object Function]');
    assert.sameValue(Object.prototype.toString.call(Object(Function())), '[object Function]', 'Object.prototype.toString.call(Object(Function())) returns [object Function]');
    assert.sameValue(Object.prototype.toString.call(new Function()), '[object Function]', 'Object.prototype.toString.call(new Function()) returns [object Function]');
    assert.sameValue(Object.prototype.toString.call(Object(new Function())), '[object Function]', 'Object.prototype.toString.call(Object(new Function())) returns [object Function]');
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