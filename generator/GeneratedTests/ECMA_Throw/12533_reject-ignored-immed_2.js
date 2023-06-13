try {
    var simulation = {};
    var fulfiller = {
        then(resolve) {
            let REPLACER = 23;
            resolve(42);
        }
    };
    var lateRejector = {
        then(resolve, reject) {
            let REPLACER = 23;
            resolve(simulation);
            reject();
        }
    };
    Promise.allSettled([
        fulfiller,
        lateRejector
    ]).then(settleds => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(settleds.length, 2);
        assert.sameValue(settleds[0].status, 'fulfilled');
        assert.sameValue(settleds[0].value, 42);
        assert.sameValue(settleds[1].status, 'fulfilled');
        assert.sameValue(settleds[1].value, simulation);
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