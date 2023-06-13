try {
    assert.sameValue(typeof BigInt, 'function');
    assert.sameValue(typeof BigInt.asIntN, 'function');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        BigInt.asIntN();
    }, 'ToBigInt: no argument => undefined => TypeError');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        BigInt.asIntN(0);
    }, 'ToBigInt: no argument => undefined => TypeError');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        BigInt.asIntN(0, undefined);
    }, 'ToBigInt: undefined => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            [Symbol.toPrimitive]: function () {
                return undefined;
            }
        });
    }, 'ToBigInt: @@toPrimitive => undefined => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            valueOf: function () {
                return undefined;
            }
        });
    }, 'ToBigInt: valueOf => undefined => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            toString: function () {
                return undefined;
            }
        });
    }, 'ToBigInt: toString => undefined => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, null);
    }, 'ToBigInt: null => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            [Symbol.toPrimitive]: function () {
                return null;
            }
        });
    }, 'ToBigInt: @@toPrimitive => null => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            valueOf: function () {
                return null;
            }
        });
    }, 'ToBigInt: valueOf => null => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            toString: function () {
                return null;
            }
        });
    }, 'ToBigInt: toString => null => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, 0);
    }, 'ToBigInt: Number => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, Object(0));
    }, 'ToBigInt: unbox object with internal slot => Number => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            [Symbol.toPrimitive]: function () {
                return 0;
            }
        });
    }, 'ToBigInt: @@toPrimitive => Number => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            valueOf: function () {
                return 0;
            }
        });
    }, 'ToBigInt: valueOf => Number => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            toString: function () {
                return 0;
            }
        });
    }, 'ToBigInt: toString => Number => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, NaN);
    }, 'ToBigInt: Number => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, Infinity);
    }, 'ToBigInt: Number => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, Symbol('1'));
    }, 'ToBigInt: Symbol => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, Object(Symbol('1')));
    }, 'ToBigInt: unbox object with internal slot => Symbol => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            [Symbol.toPrimitive]: function () {
                return Symbol('1');
            }
        });
    }, 'ToBigInt: @@toPrimitive => Symbol => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            valueOf: function () {
                return Symbol('1');
            }
        });
    }, 'ToBigInt: valueOf => Symbol => TypeError');
    assert.throws(TypeError, function () {
        BigInt.asIntN(0, {
            toString: function () {
                return Symbol('1');
            }
        });
    }, 'ToBigInt: toString => Symbol => TypeError');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, 'a');
    }, 'ToBigInt: unparseable BigInt');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, '0b2');
    }, 'ToBigInt: unparseable BigInt binary');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, Object('0b2'));
    }, 'ToBigInt: unbox object with internal slot => unparseable BigInt binary');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, {
            [Symbol.toPrimitive]: function () {
                return '0b2';
            }
        });
    }, 'ToBigInt: @@toPrimitive => unparseable BigInt binary');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, {
            valueOf: function () {
                return '0b2';
            }
        });
    }, 'ToBigInt: valueOf => unparseable BigInt binary');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, {
            toString: function () {
                return '0b2';
            }
        });
    }, 'ToBigInt: toString => unparseable BigInt binary');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, '   0b2   ');
    }, 'ToBigInt: unparseable BigInt with leading/trailing whitespace');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, '0o8');
    }, 'ToBigInt: unparseable BigInt octal');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, '0xg');
    }, 'ToBigInt: unparseable BigInt hex');
    assert.throws(SyntaxError, function () {
        BigInt.asIntN(0, '1n');
    }, 'ToBigInt: unparseable BigInt due to literal suffix');
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