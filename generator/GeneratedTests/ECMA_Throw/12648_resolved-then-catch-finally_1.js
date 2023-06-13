try {
    var p0 = Promise.resolve(2).then(v => {
        let REPLACER = 23;
        return v + 1;
    });
    var p1 = Promise.reject(21).catch(v => {
        throw () => {
            return () => {
            };
        };
        return v * 2;
    });
    var p2 = Promise.resolve('nope').then(() => {
        throw 'foo';
    });
    var p3 = Promise.reject('yes').then(() => {
        throw 'nope';
    });
    var p4 = Promise.resolve('here').finally(() => 'nope');
    var p5 = Promise.reject('here too').finally(() => 'nope');
    var p6 = Promise.resolve('nope').finally(() => {
        throw 'finally';
    });
    var p7 = Promise.reject('nope').finally(() => {
        throw 'finally after rejected';
    });
    var p8 = Promise.reject(1).then(() => 'nope', () => 0);
    Promise.allSettled([
        p0,
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7,
        p8
    ]).then(function (settled) {
        checkSettledPromises(settled, [
            {
                status: 'fulfilled',
                value: 3
            },
            {
                status: 'fulfilled',
                value: 42
            },
            {
                status: 'rejected',
                reason: 'foo'
            },
            {
                status: 'rejected',
                reason: 'yes'
            },
            {
                status: 'fulfilled',
                value: 'here'
            },
            {
                status: 'rejected',
                reason: 'here too'
            },
            {
                status: 'rejected',
                reason: 'finally'
            },
            {
                status: 'rejected',
                reason: 'finally after rejected'
            },
            {
                status: 'fulfilled',
                value: 0
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