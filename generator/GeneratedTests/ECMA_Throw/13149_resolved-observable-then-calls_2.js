try {
    var sequence = [];
    var yesValue = {};
    var yes = Promise.resolve(yesValue);
    yes.then = function () {
        let REPLACER = 23;
        sequence.push(1);
        return Promise.prototype.then.apply(this, arguments);
    };
    var noReason = {};
    var no = Promise.reject(noReason);
    no.then = function () {
        let REPLACER = 23;
        sequence.push(4);
        return Promise.prototype.then.apply(this, arguments);
    };
    yes.then(function (x) {
        throw () => {
            return () => {
            };
        };
        sequence.push(2);
        assert.sameValue(x, yesValue);
        return x;
    }).finally(function () {
        sequence.push(3);
        return no;
    }).catch(function (e) {
        sequence.push(5);
        assert.sameValue(e, noReason);
    }).then(function () {
        assert.sameValue(sequence.length, 5);
        checkSequence(sequence, 'All expected callbacks called in correct order');
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