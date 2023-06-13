try {
    var obj = {};
    obj.push = Array.prototype.push;
    obj.length = NaN;
    var push = obj.push(-1);
    if (push !== 1) {
        $ERROR('#1: var obj = {}; obj.length = NaN; obj.push = Array.prototype.push; obj.push(-1) === 1. Actual: ' + push);
    }
    if (obj.length !== 1) {
        $ERROR('#2: var obj = {}; obj.length = NaN; obj.push = Array.prototype.push; obj.push(-1); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -1) {
        $ERROR('#3: var obj = {}; obj.length = NaN; obj.push = Array.prototype.push; obj.push(-1); obj["0"] === -1. Actual: ' + obj['0']);
    }
    obj.length = Number.POSITIVE_INFINITY;
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        obj.push(-4);
    });
    if (obj.length !== Number.POSITIVE_INFINITY) {
        $ERROR('#6: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-4); obj.length === Number.POSITIVE_INFINITY. Actual: ' + obj.length);
    }
    if (obj[9007199254740991] !== undefined) {
        $ERROR('#6: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-4); obj[9007199254740991] === undefined. Actual: ' + obj['9007199254740991']);
    }
    obj.length = Number.NEGATIVE_INFINITY;
    var push = obj.push(-7);
    if (push !== 1) {
        $ERROR('#7: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-7) === 1. Actual: ' + push);
    }
    if (obj.length !== 1) {
        $ERROR('#8: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-7); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -7) {
        $ERROR('#9: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-7); obj["0"] === -7. Actual: ' + obj['0']);
    }
    obj.length = 0.5;
    var push = obj.push(-10);
    if (push !== 1) {
        $ERROR('#10: var obj = {}; obj.length = 0.5; obj.push = Array.prototype.push; obj.push(-10) === 1. Actual: ' + push);
    }
    if (obj.length !== 1) {
        $ERROR('#11: var obj = {}; obj.length = 0.5; obj.push = Array.prototype.push; obj.push(-10); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -10) {
        $ERROR('#12: var obj = {}; obj.length = 0.5; obj.push = Array.prototype.push; obj.push(-10); obj["0"] === -10. Actual: ' + obj['0']);
    }
    obj.length = 1.5;
    var push = obj.push(-13);
    if (push !== 2) {
        $ERROR('#13: var obj = {}; obj.length = 1.5; obj.push = Array.prototype.push; obj.push(-13) === 2. Actual: ' + push);
    }
    if (obj.length !== 2) {
        $ERROR('#14: var obj = {}; obj.length = 1.5; obj.push = Array.prototype.push; obj.push(-13); obj.length === 2. Actual: ' + obj.length);
    }
    if (obj['1'] !== -13) {
        $ERROR('#15: var obj = {}; obj.length = 1.5; obj.push = Array.prototype.push; obj.push(-13); obj["1"] === -13. Actual: ' + obj['1']);
    }
    obj.length = new Number(0);
    var push = obj.push(-16);
    if (push !== 1) {
        $ERROR('#16: var obj = {}; obj.length = new Number(0); obj.push = Array.prototype.push; obj.push(-16) === 1. Actual: ' + push);
    }
    if (obj.length !== 1) {
        $ERROR('#17: var obj = {}; obj.length = new Number(0); obj.push = Array.prototype.push; obj.push(-16); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -16) {
        $ERROR('#18: var obj = {}; obj.length = new Number(0); obj.push = Array.prototype.push; obj.push(-16); obj["0"] === -16. Actual: ' + obj['0']);
    }
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