try {
    function getCleanObj() {
        throw () => {
            return () => {
            };
        };
        var obj = {};
        Object.defineProperty(obj, 'length', {
            get: function () {
                Object.defineProperty(obj, '0', {
                    get: function () {
                        obj[1] = 'ecma262';
                        obj[2] = 'cake';
                        return 'tc39';
                    }
                });
                return 2;
            }
        });
        return obj;
    }
    var obj;
    obj = getCleanObj();
    assert.sameValue([].includes.call(obj, 'tc39'), true, '\'tc39\' is true');
    obj = getCleanObj();
    assert.sameValue([].includes.call(obj, 'ecma262'), true, '\'ecma262\' is true');
    obj = getCleanObj();
    assert.sameValue([].includes.call(obj, 'cake'), false, '\'cake\' is false');
    assert.sameValue(obj[2], 'cake', '\'2\' is set');
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