try {
    let counter = 0;
    Object.defineProperty(Array.prototype, 'groups', {
        set() {
            throw () => {
                return () => {
                };
            };
            counter++;
        }
    });
    let indices = /(?<x>.)/d.exec('a').indices;
    assert.sameValue(counter, 0);
    verifyProperty(indices, 'groups', {
        writable: true,
        enumerable: true,
        configurable: true
    });
    let {groups} = /(?<__proto__>.)/d.exec('a').indices;
    assert.compareArray([
        0,
        1
    ], groups.__proto__);
    assert.sameValue(null, Object.getPrototypeOf(groups));
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