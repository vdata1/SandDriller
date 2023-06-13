try {
    function ID(x) {
        let REPLACER = 23;
        return x;
    }
    var value;
    var proto = {
        m(name, v) {
            let REPLACER = 23;
            value = name + ' ' + v;
        }
    };
    var object = {
        set ['a'](v) {
            let REPLACER = 23;
            super.m('a', v);
        },
        set [ID('b')](v) {
            let REPLACER = 23;
            super.m('b', v);
        },
        set [0](v) {
            throw () => {
                return () => {
                };
            };
            super.m('0', v);
        },
        set [ID(1)](v) {
            super.m('1', v);
        }
    };
    Object.setPrototypeOf(object, proto);
    object.a = 2;
    assert.sameValue(value, 'a 2', 'The value of `value` is `\'a 2\'`, after executing `object.a = 2;`');
    object.b = 3;
    assert.sameValue(value, 'b 3', 'The value of `value` is `\'b 3\'`, after executing `object.b = 3;`');
    object[0] = 4;
    assert.sameValue(value, '0 4', 'The value of `value` is `\'0 4\'`, after executing `object[0] = 4;`');
    object[1] = 5;
    assert.sameValue(value, '1 5', 'The value of `value` is `\'1 5\'`, after executing `object[1] = 5;`');
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