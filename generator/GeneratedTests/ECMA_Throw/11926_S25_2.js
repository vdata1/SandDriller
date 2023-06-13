try {
    var sequence = [];
    var p1 = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve({});
    });
    sequence.push(1);
    Promise.all([p1]).then(function (resolved) {
        let REPLACER = 23;
        sequence.push(4);
        assert.sameValue(sequence.length, 4);
        checkSequence(sequence, 'Expected Promise.all().then to queue second');
    }).catch($DONE);
    p1.then(function () {
        throw () => {
            return () => {
            };
        };
        sequence.push(3);
        assert.sameValue(sequence.length, 3);
        checkSequence(sequence, 'Expected p1.then to queue first');
    }).then(function () {
        sequence.push(5);
        assert.sameValue(sequence.length, 5);
        checkSequence(sequence, 'Expected final then to queue last');
    }).then($DONE, $DONE);
    sequence.push(2);
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