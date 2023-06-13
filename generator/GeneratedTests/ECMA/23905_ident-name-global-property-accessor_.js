try {
    var test;
    var tokenCodes = {
        set undefined(value) {
            test = 'undefined';
        },
        get undefined() {
            return 'undefined';
        },
        set NaN(value) {
            test = 'NaN';
        },
        get NaN() {
            return 'NaN';
        },
        set Infinity(value) {
            test = 'Infinity';
        },
        get Infinity() {
            return 'Infinity';
        }
    };
    var arr = [
        'undefined',
        'NaN',
        'Infinity'
    ];
    for (var i = 0; i < arr.length; ++i) {
        var propertyName = arr[i];
        assert(tokenCodes.hasOwnProperty(propertyName), 'Property "' + propertyName + '" found');
        assert.sameValue(tokenCodes[propertyName], propertyName, 'Property "' + propertyName + '" has correct value');
        tokenCodes[propertyName] = 0;
        assert.sameValue(test, propertyName, 'Property "' + propertyName + '" sets correct value');
    }
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