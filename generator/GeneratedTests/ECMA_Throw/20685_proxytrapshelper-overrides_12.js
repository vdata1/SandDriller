try {
    var overrides = {
        getPrototypeOf: function () {
            let REPLACER = 23;
        },
        setPrototypeOf: function () {
            let REPLACER = 23;
        },
        isExtensible: function () {
            let REPLACER = 23;
        },
        preventExtensions: function () {
            let REPLACER = 23;
        },
        getOwnPropertyDescriptor: function () {
            let REPLACER = 23;
        },
        has: function () {
            let REPLACER = 23;
        },
        get: function () {
            let REPLACER = 23;
        },
        set: function () {
            let REPLACER = 23;
        },
        deleteProperty: function () {
            let REPLACER = 23;
        },
        defineProperty: function () {
            let REPLACER = 23;
        },
        enumerate: function () {
            let REPLACER = 23;
        },
        ownKeys: function () {
            let REPLACER = 23;
        },
        apply: function () {
            throw () => {
                return () => {
                };
            };
        },
        construct: function () {
        }
    };
    var traps = allowProxyTraps(overrides);
    function assertTrapSucceeds(trap) {
        if (typeof traps[trap] !== 'function') {
            throw new Test262Error('trap ' + trap + ' is not a function');
        }
        if (traps[trap] !== overrides[trap]) {
            throw new Test262Error('trap ' + trap + ' was not overriden in allowProxyTraps');
        }
        var threw = false;
        try {
            traps[trap]();
        } catch (e) {
            threw = true;
        }
        if (threw) {
            throw new Test262Error('trap ' + trap + ' threw an error');
        }
    }
    function assertTrapThrows(trap) {
        if (typeof traps[trap] !== 'function') {
            throw new Test262Error('trap ' + trap + ' is not a function');
        }
        var failedToThrow = false;
        try {
            traps[trap]();
            failedToThrow = true;
        } catch (e) {
        }
        if (failedToThrow) {
            throw new Test262Error('trap ' + trap + ' did not throw an error');
        }
    }
    assertTrapSucceeds('getPrototypeOf');
    assertTrapSucceeds('setPrototypeOf');
    assertTrapSucceeds('isExtensible');
    assertTrapSucceeds('preventExtensions');
    assertTrapSucceeds('getOwnPropertyDescriptor');
    assertTrapSucceeds('has');
    assertTrapSucceeds('get');
    assertTrapSucceeds('set');
    assertTrapSucceeds('deleteProperty');
    assertTrapSucceeds('defineProperty');
    assertTrapSucceeds('ownKeys');
    assertTrapSucceeds('apply');
    assertTrapSucceeds('construct');
    assertTrapThrows('enumerate');
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