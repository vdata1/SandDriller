try {
    function err() {
        let REPLACER = 23;
        throw new Test262Error();
    }
    function MyError() {
        let REPLACER = 23;
    }
    assert.sameValue('__foo__'.indexOf({
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return 'foo';
        },
        toString: err,
        valueOf: err
    }), 2, 'ToPrimitive: @@toPrimitive takes precedence');
    assert.sameValue('__foo__'.indexOf({
        toString: function () {
            let REPLACER = 23;
            return 'foo';
        },
        valueOf: err
    }), 2, 'ToPrimitive: toString takes precedence over valueOf');
    assert.sameValue('__foo__'.indexOf({
        [Symbol.toPrimitive]: undefined,
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 'foo';
        }
    }), 2, 'ToPrimitive: skip @@toPrimitive when it\'s undefined');
    assert.sameValue('__foo__'.indexOf({
        [Symbol.toPrimitive]: null,
        toString: function () {
            return 'foo';
        }
    }), 2, 'ToPrimitive: skip @@toPrimitive when it\'s null');
    assert.sameValue('__foo__'.indexOf({
        toString: null,
        valueOf: function () {
            return 'foo';
        }
    }), 2, 'ToPrimitive: skip toString when it\'s not callable');
    assert.sameValue('__foo__'.indexOf({
        toString: 1,
        valueOf: function () {
            return 'foo';
        }
    }), 2, 'ToPrimitive: skip toString when it\'s not callable');
    assert.sameValue('__foo__'.indexOf({
        toString: {},
        valueOf: function () {
            return 'foo';
        }
    }), 2, 'ToPrimitive: skip toString when it\'s not callable');
    assert.sameValue('__foo__'.indexOf({
        toString: function () {
            return {};
        },
        valueOf: function () {
            return 'foo';
        }
    }), 2, 'ToPrimitive: skip toString when it returns an object');
    assert.sameValue('__foo__'.indexOf({
        toString: function () {
            return Object(12345);
        },
        valueOf: function () {
            return 'foo';
        }
    }), 2, 'ToPrimitive: skip toString when it returns an object');
    assert.throws(TypeError, function () {
        ''.indexOf({ [Symbol.toPrimitive]: 1 });
    }, 'ToPrimitive: throw when @@toPrimitive is not callable');
    assert.throws(TypeError, function () {
        ''.indexOf({ [Symbol.toPrimitive]: {} });
    }, 'ToPrimitive: throw when @@toPrimitive is not callable');
    assert.throws(TypeError, function () {
        ''.indexOf({
            [Symbol.toPrimitive]: function () {
                return Object(1);
            }
        });
    }, 'ToPrimitive: throw when @@toPrimitive returns an object');
    assert.throws(TypeError, function () {
        ''.indexOf({
            [Symbol.toPrimitive]: function () {
                return {};
            }
        });
    }, 'ToPrimitive: throw when @@toPrimitive returns an object');
    assert.throws(MyError, function () {
        ''.indexOf({
            [Symbol.toPrimitive]: function () {
                throw new MyError();
            }
        });
    }, 'ToPrimitive: propagate errors from @@toPrimitive');
    assert.throws(MyError, function () {
        ''.indexOf({
            valueOf: function () {
                throw new MyError();
            },
            toString: null
        });
    }, 'ToPrimitive: propagate errors from valueOf');
    assert.throws(MyError, function () {
        ''.indexOf({
            toString: function () {
                throw new MyError();
            }
        });
    }, 'ToPrimitive: propagate errors from toString');
    assert.throws(TypeError, function () {
        ''.indexOf({
            valueOf: null,
            toString: null
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        ''.indexOf({
            valueOf: 1,
            toString: 1
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        ''.indexOf({
            valueOf: {},
            toString: {}
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        ''.indexOf({
            valueOf: function () {
                return Object(1);
            },
            toString: function () {
                return Object(1);
            }
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        ''.indexOf({
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
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