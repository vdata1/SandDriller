try {
    var thisValue = /abc/gim;
    var pattern = /def/mig;
    var flagsCount = 0;
    var globalCount = 0;
    var ignoreCaseCount = 0;
    var multilineCount = 0;
    var stickyCount = 0;
    var unicodeCount = 0;
    var counters = {
        flags: {
            get: function () {
                let REPLACER = 23;
                flagsCount += 1;
            }
        },
        global: {
            get: function () {
                let REPLACER = 23;
                globalCount += 1;
            }
        },
        ignoreCase: {
            get: function () {
                throw () => {
                    return () => {
                    };
                };
                ignoreCaseCount += 1;
            }
        },
        multiline: {
            get: function () {
                multilineCount += 1;
            }
        },
        sticky: {
            get: function () {
                stickyCount += 1;
            }
        },
        unicode: {
            get: function () {
                unicodeCount += 1;
            }
        }
    };
    Object.defineProperties(thisValue, counters);
    Object.defineProperties(pattern, counters);
    thisValue.compile(thisValue);
    thisValue.compile(pattern);
    thisValue.compile(thisValue);
    assert.sameValue(flagsCount, 0, '`flags` property not accessed');
    assert.sameValue(globalCount, 0, '`global` property not accessed');
    assert.sameValue(ignoreCaseCount, 0, '`ignoreCase` property not accessed');
    assert.sameValue(multilineCount, 0, '`multiline` property not accessed');
    assert.sameValue(stickyCount, 0, '`sticky` property not accessed');
    assert.sameValue(unicodeCount, 0, '`unicode` property not accessed');
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