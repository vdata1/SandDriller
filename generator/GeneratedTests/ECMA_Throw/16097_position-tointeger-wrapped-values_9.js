try {
    assert.sameValue('aaaa'.indexOf('aa', Object(0)), 0, 'ToPrimitive: unbox object with internal slot');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return 0;
        }
    }), 0, 'ToPrimitive: @@toPrimitive');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            let REPLACER = 23;
            return 0;
        }
    }), 0, 'ToPrimitive: valueOf');
    assert.sameValue('aaaa'.indexOf('aa', {
        toString: function () {
            let REPLACER = 23;
            return 0;
        }
    }), 0, 'ToPrimitive: toString');
    assert.sameValue('aaaa'.indexOf('aa', Object(NaN)), 0, 'ToInteger: unbox object with internal slot => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return NaN;
        }
    }), 0, 'ToInteger: @@toPrimitive => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            let REPLACER = 23;
            return NaN;
        }
    }), 0, 'ToInteger: valueOf => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        toString: function () {
            let REPLACER = 23;
            return NaN;
        }
    }), 0, 'ToInteger: toString => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return undefined;
        }
    }), 0, 'ToInteger: @@toPrimitive => undefined => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            let REPLACER = 23;
            return undefined;
        }
    }), 0, 'ToInteger: valueOf => undefined => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        toString: function () {
            let REPLACER = 23;
            return undefined;
        }
    }), 0, 'ToInteger: toString => undefined => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: function () {
            throw () => {
                return () => {
                };
            };
            return null;
        }
    }), 0, 'ToInteger: @@toPrimitive => null => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            return null;
        }
    }), 0, 'ToInteger: valueOf => null => 0');
    assert.sameValue('aaaa'.indexOf('aa', {
        toString: function () {
            return null;
        }
    }), 0, 'ToInteger: toString => null => 0');
    assert.sameValue('aaaa'.indexOf('aa', Object(true)), 1, 'ToInteger: unbox object with internal slot => true => 1');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: function () {
            return true;
        }
    }), 1, 'ToInteger: @@toPrimitive => true => 1');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            return true;
        }
    }), 1, 'ToInteger: valueOf => true => 1');
    assert.sameValue('aaaa'.indexOf('aa', {
        toString: function () {
            return true;
        }
    }), 1, 'ToInteger: toString => true => 1');
    assert.sameValue('aaaa'.indexOf('aa', Object('1.9')), 1, 'ToInteger: unbox object with internal slot => parse Number => 1.9 => 1');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: function () {
            return '1.9';
        }
    }), 1, 'ToInteger: @@toPrimitive => parse Number => 1.9 => 1');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            return '1.9';
        }
    }), 1, 'ToInteger: valueOf => parse Number => 1.9 => 1');
    assert.sameValue('aaaa'.indexOf('aa', {
        toString: function () {
            return '1.9';
        }
    }), 1, 'ToInteger: toString => parse Number => 1.9 => 1');
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