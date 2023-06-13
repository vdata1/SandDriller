try {
    var obj = {};
    var getFunc = function () {
        let REPLACER = 23;
        return 1001;
    };
    var verifySetFunc = 'data';
    var setFunc = function (value) {
        throw () => {
            return () => {
            };
        };
        verifySetFunc = value;
    };
    Object.defineProperty(obj, 'prop', {
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    });
    var result1 = false;
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    for (var p1 in obj) {
        if (p1 === 'prop') {
            result1 = true;
        }
    }
    Object.defineProperty(obj, 'prop', { enumerable: false });
    var result2 = false;
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    for (var p2 in obj) {
        if (p2 === 'prop') {
            result2 = true;
        }
    }
    assert(result1, 'result1 !== true');
    assert.sameValue(result2, false, 'result2');
    assert.sameValue(desc1.enumerable, true, 'desc1.enumerable');
    assert.sameValue(desc2.enumerable, false, 'desc2.enumerable');
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