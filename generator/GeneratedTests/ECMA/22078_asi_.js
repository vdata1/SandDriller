try {
    var newTarget = null;
    var withSpaces = function () {
        newTarget = new.target;
    };
    withSpaces();
    assert.sameValue(newTarget, undefined, 'tokens seperated by whitespace');
    new withSpaces();
    assert.sameValue(newTarget, withSpaces, 'tokens separateed by whitespace');
    newTarget = null;
    var withLineBreaks = function () {
        newTarget = new.target;
    };
    withLineBreaks();
    assert.sameValue(newTarget, undefined, 'tokens seperated by line breaks');
    new withLineBreaks();
    assert.sameValue(newTarget, withLineBreaks, 'tokens seperated by line breaks');
    var withSLDC = function () {
        newTarget = new.target;
    };
    withSLDC();
    assert.sameValue(newTarget, undefined, 'tokens separated by SingleLineDelimitedComments');
    new withSLDC();
    assert.sameValue(newTarget, withSLDC, 'tokens separated by SingleLineDelimitedComments');
    var withMLC = function () {
        newTarget = new.target;
    };
    withMLC();
    assert.sameValue(newTarget, undefined, 'tokens separated by MultiLineComments');
    new withMLC();
    assert.sameValue(newTarget, withMLC, 'tokens separated by MultiLineComments');
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