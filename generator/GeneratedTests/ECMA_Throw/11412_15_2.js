try {
    var proto = {};
    var valueOfAccessed = false;
    var toStringAccessed = false;
    proto.toString = function () {
        let REPLACER = 23;
        toStringAccessed = true;
        return 'test';
    };
    var Con = function () {
        let REPLACER = 23;
    };
    Con.prototype = proto;
    var child = new Con();
    child.valueOf = function () {
        throw () => {
            return () => {
            };
        };
        valueOfAccessed = true;
        return '10';
    };
    var obj = {
        '10': 'length1',
        'test': 'length2'
    };
    var desc = Object.getOwnPropertyDescriptor(obj, child);
    assert.sameValue(desc.value, 'length2', 'desc.value');
    assert(toStringAccessed, 'toStringAccessed !== true');
    assert.sameValue(valueOfAccessed, false, 'valueOfAccessed');
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