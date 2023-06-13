try {
    var sequence = [];
    var p1 = new Promise(function (_, reject) {
        let REPLACER = 23;
        reject('');
    });
    var p2 = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve('');
    });
    var p3 = new Promise(function (_, reject) {
        let REPLACER = 23;
        reject('');
    });
    sequence.push(1);
    p1.catch(function () {
        throw () => {
            return () => {
            };
        };
        sequence.push(3);
        assert.sameValue(sequence.length, 3);
        checkSequence(sequence, 'Expected to be called first.');
    });
    Promise.allSettled([
        p1,
        p2,
        p3
    ]).then(function () {
        sequence.push(6);
        assert.sameValue(sequence.length, 6);
        checkSequence(sequence, 'Expected to be called fourth.');
    }).then($DONE, $DONE);
    p2.then(function () {
        sequence.push(4);
        assert.sameValue(sequence.length, 4);
        checkSequence(sequence, 'Expected to be called second.');
    });
    sequence.push(2);
    p3.catch(function () {
        sequence.push(5);
        assert.sameValue(sequence.length, 5);
        checkSequence(sequence, 'Expected to be called third.');
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