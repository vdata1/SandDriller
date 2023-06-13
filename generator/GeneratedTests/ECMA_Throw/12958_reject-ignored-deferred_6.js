try {
    let callCount = 0;
    let fulfiller = {
        then(resolve) {
            let REPLACER = 23;
            new Promise(resolve => {
                let REPLACER = 23;
                callCount++;
                resolve();
            }).then(() => {
                let REPLACER = 23;
                callCount++;
                resolve();
            });
        }
    };
    let rejector = {
        then(resolve, reject) {
            let REPLACER = 23;
            new Promise(resolve => {
                let REPLACER = 23;
                callCount++;
                resolve();
            }).then(() => {
                let REPLACER = 23;
                callCount++;
                resolve();
                reject();
            });
        }
    };
    Promise.all([
        fulfiller,
        rejector
    ]).then(() => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(callCount, 4, 'callCount === 4');
        $DONE();
    }, () => {
        $DONE('The promise should not be rejected.');
    });
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