try {
    var sequence = [];
    var thenable = {
        then: function (onResolve, onReject) {
            sequence.push(3);
            assert.sameValue(sequence.length, 3);
            checkSequence(sequence, 'thenable.then called');
            assert.sameValue(this, thenable, 'thenable.then called with `thenable` as `this`');
            return onResolve('resolved');
        }
    };
    sequence.push(1);
    assert.sameValue(sequence.length, 1);
    checkSequence(sequence, 'no async calls yet');
    var p = Promise.resolve(thenable);
    sequence.push(2);
    assert.sameValue(sequence.length, 2);
    checkSequence(sequence, 'thenable.then queued but not yet called');
    p.then(function (r) {
        sequence.push(4);
        assert.sameValue(sequence.length, 4);
        checkSequence(sequence, 'all done');
        assert.sameValue(r, 'resolved');
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