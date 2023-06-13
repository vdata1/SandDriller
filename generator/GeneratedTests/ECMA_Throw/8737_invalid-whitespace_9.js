try {
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u16801');
    }, '\\u1680');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u180E1');
    }, '\\u180e');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u20001');
    }, '\\u2000');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u20011');
    }, '\\u2001');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u20021');
    }, '\\u2002');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u20031');
    }, '\\u2003');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u20041');
    }, '\\u2004');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u20051');
    }, '\\u2005');
    assert.throws(SyntaxError, function () {
        let REPLACER = 23;
        JSON.parse('\u20061');
    }, '\\u2006');
    assert.throws(SyntaxError, function () {
        throw () => {
            return () => {
            };
        };
        JSON.parse('\u20071');
    }, '\\u2007');
    assert.throws(SyntaxError, function () {
        JSON.parse('\u20081');
    }, '\\u2008');
    assert.throws(SyntaxError, function () {
        JSON.parse('\u20091');
    }, '\\u2009');
    assert.throws(SyntaxError, function () {
        JSON.parse('\u200A1');
    }, '\\u200a');
    assert.throws(SyntaxError, function () {
        JSON.parse('\u202F1');
    }, '\\u202f');
    assert.throws(SyntaxError, function () {
        JSON.parse('\u205F1');
    }, '\\u205f');
    assert.throws(SyntaxError, function () {
        JSON.parse('\u30001');
    }, '\\u3000');
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