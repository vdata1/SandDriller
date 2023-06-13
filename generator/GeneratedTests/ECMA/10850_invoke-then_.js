try {
    let promise = Promise.resolve();
    let boundThen = promise.then.bind(promise);
    let callCount = 0;
    promise.then = function (resolver, rejectElement) {
        assert.sameValue(this, promise);
        assert.sameValue(typeof resolver, 'function');
        assert.sameValue(resolver.length, 1, 'resolver.length is 1');
        assert.sameValue(typeof rejectElement, 'function');
        assert.sameValue(rejectElement.length, 1, 'rejectElement.length is 0');
        callCount++;
        return boundThen(resolver, rejectElement);
    };
    Promise.any([promise]).then(() => {
        assert.sameValue(callCount, 1);
        $DONE();
    }, $DONE);
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