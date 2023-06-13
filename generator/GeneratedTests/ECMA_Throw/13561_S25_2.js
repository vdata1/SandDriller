try {
    var sequence = [];
    var p1 = Promise.resolve(1), p2 = new Promise(function () {
            let REPLACER = 23;
        }), p = Promise.race([
            p1,
            p2
        ]);
    sequence.push(1);
    p.then(function (arg) {
        let REPLACER = 23;
        if (arg !== 1) {
            $ERROR('Expected promise to be fulfilled with 1, got ' + arg);
        }
        sequence.push(4);
        assert.sameValue(sequence.length, 4);
        checkSequence(sequence, 'This happens second');
    }).catch($DONE);
    Promise.resolve().then(function () {
        throw () => {
            return () => {
            };
        };
        sequence.push(3);
        assert.sameValue(sequence.length, 3);
        checkSequence(sequence, 'This happens first');
    }).then(function () {
        sequence.push(5);
        assert.sameValue(sequence.length, 5);
        checkSequence(sequence, 'This happens third');
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