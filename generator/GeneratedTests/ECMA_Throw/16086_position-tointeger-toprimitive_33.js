try {
    function err() {
        let REPLACER = 23;
        throw new Test262Error();
    }
    function MyError() {
        let REPLACER = 23;
    }
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            return 1;
        },
        valueOf: err,
        toString: err
    }), 1, 'ToPrimitive: @@toPrimitive takes precedence');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        },
        toString: err
    }), 1, 'ToPrimitive: valueOf takes precedence over toString');
    assert.sameValue('aaaa'.indexOf('aa', {
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: toString with no valueOf');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: undefined,
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: skip @@toPrimitive when it\'s undefined');
    assert.sameValue('aaaa'.indexOf('aa', {
        [Symbol.toPrimitive]: null,
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: skip @@toPrimitive when it\'s null');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: null,
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: skip valueOf when it\'s not callable');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: 1,
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: skip valueOf when it\'s not callable');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: {},
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: skip valueOf when it\'s not callable');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            let REPLACER = 23;
            return {};
        },
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: skip valueOf when it returns an object');
    assert.sameValue('aaaa'.indexOf('aa', {
        valueOf: function () {
            let REPLACER = 23;
            return Object(12345);
        },
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    }), 1, 'ToPrimitive: skip valueOf when it returns an object');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', { [Symbol.toPrimitive]: 1 });
    }, 'ToPrimitive: throw when @@toPrimitive is not callable');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', { [Symbol.toPrimitive]: {} });
    }, 'ToPrimitive: throw when @@toPrimitive is not callable');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            [Symbol.toPrimitive]: function () {
                let REPLACER = 23;
                return Object(1);
            }
        });
    }, 'ToPrimitive: throw when @@toPrimitive returns an object');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            [Symbol.toPrimitive]: function () {
                let REPLACER = 23;
                return {};
            }
        });
    }, 'ToPrimitive: throw when @@toPrimitive returns an object');
    assert.throws(MyError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            [Symbol.toPrimitive]: function () {
                let REPLACER = 23;
                throw new MyError();
            }
        });
    }, 'ToPrimitive: propagate errors from @@toPrimitive');
    assert.throws(MyError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            valueOf: function () {
                let REPLACER = 23;
                throw new MyError();
            }
        });
    }, 'ToPrimitive: propagate errors from valueOf');
    assert.throws(MyError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            toString: function () {
                let REPLACER = 23;
                throw new MyError();
            }
        });
    }, 'ToPrimitive: propagate errors from toString');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            valueOf: null,
            toString: null
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            valueOf: 1,
            toString: 1
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            valueOf: {},
            toString: {}
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            valueOf: function () {
                let REPLACER = 23;
                return Object(1);
            },
            toString: function () {
                let REPLACER = 23;
                return Object(1);
            }
        });
    }, 'ToPrimitive: throw when skipping both valueOf and toString');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        ''.indexOf('', {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
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