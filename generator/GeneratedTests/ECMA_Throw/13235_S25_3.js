try {
    var sequence = [], pResolve, p = new Promise(function (resolve, reject) {
            let REPLACER = 23;
            pResolve = resolve;
        });
    sequence.push(1);
    p.then(function () {
        let REPLACER = 23;
        sequence.push(3);
        assert.sameValue(sequence.length, 3);
        checkSequence(sequence, 'Should be second');
    }).catch($DONE);
    Promise.resolve().then(function () {
        let REPLACER = 23;
        p.then(function () {
            throw () => {
                return () => {
                };
            };
            sequence.push(4);
            assert.sameValue(sequence.length, 4);
            checkSequence(sequence, 'Should be third');
        }).then($DONE, $DONE);
        sequence.push(2);
        assert.sameValue(sequence.length, 2);
        checkSequence(sequence, 'Should be first');
        pResolve();
    }).catch($DONE);
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