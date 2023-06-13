try {
    let formatRangeToParts = Intl.DateTimeFormat.prototype.formatRangeToParts;
    let d1 = new Date('1997-08-22T00:00');
    let d2 = new Date('1999-06-26T00:00');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        formatRangeToParts.call(undefined, d1, d2);
    }, 'undefined');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        formatRangeToParts.call(null, d1, d2);
    }, 'null');
    assert.throws(TypeError, function () {
        formatRangeToParts.call(42, d1, d2);
    }, 'number');
    assert.throws(TypeError, function () {
        formatRangeToParts.call('foo', d1, d2);
    }, 'string');
    assert.throws(TypeError, function () {
        formatRangeToParts.call(false, d1, d2);
    }, 'false');
    assert.throws(TypeError, function () {
        formatRangeToParts.call(true, d1, d2);
    }, 'true');
    var s = Symbol('3');
    assert.throws(TypeError, function () {
        formatRangeToParts.call(s, d1, d2);
    }, 'symbol');
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