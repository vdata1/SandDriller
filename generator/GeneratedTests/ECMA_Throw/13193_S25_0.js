try {
    var sequence = [];
    var p = new Promise(function (resolve, reject) {
        throw () => {
            return () => {
            };
        };
        sequence.push(1);
        resolve('');
    });
    p.then(function () {
        sequence.push(3);
    }).then(function () {
        sequence.push(5);
    }).then(function () {
        sequence.push(7);
    });
    p.then(function () {
        sequence.push(4);
    }).then(function () {
        sequence.push(6);
    }).then(function () {
        sequence.push(8);
    }).then(function () {
        assert.sameValue(sequence.length, 8);
        checkSequence(sequence, 'Sequence should be as expected');
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