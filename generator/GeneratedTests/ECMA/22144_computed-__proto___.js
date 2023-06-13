try {
    var obj;
    var sample = {};
    obj = { ['__proto__']: sample };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (ordinary object)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (ordinary object)');
    assert.sameValue(obj.__proto__, sample, 'value is properly defined (ordinary object)');
    obj = { ['__proto__']: null };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (null)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (null)');
    assert.sameValue(obj.__proto__, null, 'value is properly defined (null)');
    obj = { ['__proto__']: undefined };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (undefined)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (undefined)');
    assert.sameValue(obj.__proto__, undefined, 'value is properly defined (undefined)');
    var func = function () {
    };
    obj = { ['__proto__']: func };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (func)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (func)');
    assert.sameValue(obj.__proto__, func, 'value is properly defined (func)');
    var symbol = Symbol('Leo');
    obj = { ['__proto__']: symbol };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (symbol)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (symbol)');
    assert.sameValue(obj.__proto__, symbol, 'value is properly defined (symbol)');
    obj = { ['__proto__']: 42 };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (number)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (number)');
    assert.sameValue(obj.__proto__, 42, 'value is properly defined (number)');
    obj = { ['__proto__']: '' };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (string)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (string)');
    assert.sameValue(obj.__proto__, '', 'value is properly defined (string)');
    obj = { ['__proto__']: false };
    assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'does not change the object prototype (boolean)');
    assert(obj.hasOwnProperty('__proto__'), 'computed __proto__ property is set as an own property (boolean)');
    assert.sameValue(obj.__proto__, false, 'value is properly defined (boolean)');
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