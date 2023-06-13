try {
    assert.sameValue('__foo__'.indexOf(Object('foo')), 2, 'ToPrimitive: unbox object with internal slot');
    assert.sameValue('__foo__'.indexOf({
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return 'foo';
        }
    }), 2, 'ToPrimitive: @@toPrimitive');
    assert.sameValue('__foo__'.indexOf({
        valueOf: function () {
            let REPLACER = 23;
            return 'foo';
        },
        toString: null
    }), 2, 'ToPrimitive: valueOf');
    assert.sameValue('__foo__'.indexOf({
        toString: function () {
            let REPLACER = 23;
            return 'foo';
        }
    }), 2, 'ToPrimitive: toString');
    assert.sameValue('__undefined__'.indexOf({
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return undefined;
        }
    }), 2, 'ToString: @@toPrimitive => undefined => "undefined"');
    assert.sameValue('__undefined__'.indexOf({
        valueOf: function () {
            let REPLACER = 23;
            return undefined;
        },
        toString: null
    }), 2, 'ToString: valueOf => undefined => "undefined"');
    assert.sameValue('__undefined__'.indexOf({
        toString: function () {
            let REPLACER = 23;
            return undefined;
        }
    }), 2, 'ToString: toString => undefined => "undefined"');
    assert.sameValue('__null__'.indexOf({
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return null;
        }
    }), 2, 'ToString: @@toPrimitive => null => "null"');
    assert.sameValue('__null__'.indexOf({
        valueOf: function () {
            let REPLACER = 23;
            return null;
        },
        toString: null
    }), 2, 'ToString: valueOf => null => "null"');
    assert.sameValue('__null__'.indexOf({
        toString: function () {
            let REPLACER = 23;
            return null;
        }
    }), 2, 'ToString: toString => null => "null"');
    assert.sameValue('__false__'.indexOf(Object(false)), 2, 'ToString: unbox object with internal slot => false => "false"');
    assert.sameValue('__false__'.indexOf({
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return false;
        }
    }), 2, 'ToString: @@toPrimitive => false => "false"');
    assert.sameValue('__false__'.indexOf({
        valueOf: function () {
            let REPLACER = 23;
            return false;
        },
        toString: null
    }), 2, 'ToString: valueOf => false => "false"');
    assert.sameValue('__false__'.indexOf({
        toString: function () {
            let REPLACER = 23;
            return false;
        }
    }), 2, 'ToString: toString => false => "false"');
    assert.sameValue('__0__'.indexOf(Object(0)), 2, 'ToString: unbox object with internal slot => Number to String');
    assert.sameValue('__0__'.indexOf({
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return 0;
        }
    }), 2, 'ToString: @@toPrimitive => Number to String');
    assert.sameValue('__0__'.indexOf({
        valueOf: function () {
            let REPLACER = 23;
            return 0;
        },
        toString: null
    }), 2, 'ToString: valueOf => Number to String');
    assert.sameValue('__0__'.indexOf({
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 0;
        }
    }), 2, 'ToString: toString => Number to String');
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