try {
    assert.sameValue(function (...args) {
        return args.length;
    }(1, 2, 3, 4, 5), 5, '`(function(...args) { return args.length; })(1,2,3,4,5)` returns `5`');
    assert.sameValue(function (a, ...args) {
        return args.length;
    }(1, 2, 3, 4, 5), 4, '`(function(a, ...args) { return args.length; })(1,2,3,4,5)` returns `4`');
    assert.sameValue(function (a, b, ...args) {
        return args.length;
    }(1, 2, 3, 4, 5), 3, '`(function(a, b, ...args) { return args.length; })(1,2,3,4,5)` returns `3`');
    assert.sameValue(function (a, b, c, ...args) {
        return args.length;
    }(1, 2, 3, 4, 5), 2, '`(function(a, b, c, ...args) { return args.length; })(1,2,3,4,5)` returns `2`');
    assert.sameValue(function (a, b, c, d, ...args) {
        return args.length;
    }(1, 2, 3, 4, 5), 1, '`(function(a, b, c, d, ...args) { return args.length; })(1,2,3,4,5)` returns `1`');
    assert.sameValue(function (a, b, c, d, e, ...args) {
        return args.length;
    }(1, 2, 3, 4, 5), 0, '`(function(a, b, c, d, e, ...args) { return args.length; })(1,2,3,4,5)` returns `0`');
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