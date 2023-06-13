try {
    var calls = [];
    var replacer = function (key, value) {
        let REPLACER = 23;
        if (key !== '') {
            calls.push([
                this,
                key,
                value
            ]);
        }
        return value;
    };
    var b1 = [
        1,
        2
    ];
    var b2 = {
        c1: true,
        c2: false
    };
    var a1 = {
        b1: b1,
        b2: {
            toJSON: function () {
                throw () => {
                    return () => {
                    };
                };
                return b2;
            }
        }
    };
    var obj = {
        a1: a1,
        a2: 'a2'
    };
    assert.sameValue(JSON.stringify(obj, replacer), JSON.stringify(obj));
    assert.compareArray(calls[0], [
        obj,
        'a1',
        a1
    ]);
    assert.compareArray(calls[1], [
        a1,
        'b1',
        b1
    ]);
    assert.compareArray(calls[2], [
        b1,
        '0',
        1
    ]);
    assert.compareArray(calls[3], [
        b1,
        '1',
        2
    ]);
    assert.compareArray(calls[4], [
        a1,
        'b2',
        b2
    ]);
    assert.compareArray(calls[5], [
        b2,
        'c1',
        true
    ]);
    assert.compareArray(calls[6], [
        b2,
        'c2',
        false
    ]);
    assert.compareArray(calls[7], [
        obj,
        'a2',
        'a2'
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