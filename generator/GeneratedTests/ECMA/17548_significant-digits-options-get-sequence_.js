try {
    var minimumSignificantDigitsRead = false;
    var maximumSignificantDigitsRead = false;
    function readMinimumSignificantDigits() {
        assert.sameValue(minimumSignificantDigitsRead, false, 'minimumSignificantDigits getter already called');
        assert.sameValue(maximumSignificantDigitsRead, false, 'maximumSignificantDigits getter called before minimumSignificantDigits');
        minimumSignificantDigitsRead = true;
        return 1;
    }
    function readMaximumSignificantDigits() {
        assert.sameValue(maximumSignificantDigitsRead, false, 'maximumSignificantDigits getter already called');
        maximumSignificantDigitsRead = true;
        return 1;
    }
    var options = {};
    Object.defineProperty(options, 'minimumSignificantDigits', { get: readMinimumSignificantDigits });
    Object.defineProperty(options, 'maximumSignificantDigits', { get: readMaximumSignificantDigits });
    new Intl.NumberFormat('de', options);
    assert(minimumSignificantDigitsRead, 'minimumSignificantDigits getter was called once');
    assert(maximumSignificantDigitsRead, 'maximumSignificantDigits getter was called once');
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