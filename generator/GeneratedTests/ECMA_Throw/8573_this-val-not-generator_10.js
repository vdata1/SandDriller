try {
    function* g() {
        let REPLACER = 23;
    }
    var GeneratorPrototype = Object.getPrototypeOf(g).prototype;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.next.call({});
    }, 'ordinary object (without value)');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.next.call({}, 1);
    }, 'ordinary object (with value)');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.next.call(function () {
            let REPLACER = 23;
        });
    }, 'function object (without value)');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.next.call(function () {
            let REPLACER = 23;
        }, 1);
    }, 'function object (with value)');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.next.call(g);
    }, 'generator function object (without value)');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.next.call(g, 1);
    }, 'generator function object (with value)');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        GeneratorPrototype.next.call(g.prototype);
    }, 'generator function prototype object (without value)');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        GeneratorPrototype.next.call(g.prototype, 1);
    }, 'generator function prototype object (with value)');
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