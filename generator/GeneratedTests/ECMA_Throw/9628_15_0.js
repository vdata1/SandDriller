try {
    var newObj = {};
    var props = {};
    var i = 0;
    Object.defineProperty(props, 'prop1', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            i++;
            return {};
        },
        enumerable: true
    });
    Object.defineProperty(props, 'prop2', {
        get: function () {
            if (1 === i++) {
                throw new RangeError();
            } else {
                return {};
            }
        },
        enumerable: true
    });
    assert.throws(RangeError, function () {
        newObj = Object.create({}, props);
    });
    assert.sameValue(newObj.hasOwnProperty('prop1'), false, 'newObj.hasOwnProperty("prop1")');
    assert.sameValue(i, 2, 'i');
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