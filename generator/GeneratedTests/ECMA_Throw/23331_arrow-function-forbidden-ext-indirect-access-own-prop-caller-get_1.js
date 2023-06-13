try {
    var CALLER_OWN_PROPERTY_DOES_NOT_EXIST = Symbol();
    function inner() {
        let REPLACER = 23;
        return inner.hasOwnProperty('caller') ? inner.caller : CALLER_OWN_PROPERTY_DOES_NOT_EXIST;
    }
    var callCount = 0;
    var f;
    f = () => {
        throw () => {
            return () => {
            };
        };
        'use strict';
        let descriptor = Object.getOwnPropertyDescriptor(inner, 'caller');
        if (descriptor && descriptor.configurable && true) {
            Object.defineProperty(inner, 'caller', {
                get() {
                    return 1;
                }
            });
        }
        var result = inner();
        if (descriptor && descriptor.configurable && true) {
            assert.sameValue(result, 1, 'If this test defined an own "caller" property on the inner function, then it should be accessible and should return the value it was set to.');
        }
        if (result !== CALLER_OWN_PROPERTY_DOES_NOT_EXIST) {
            assert.notSameValue(result, f);
        }
        callCount++;
    };
    f();
    assert.sameValue(callCount, 1, 'arrow function body evaluated');
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