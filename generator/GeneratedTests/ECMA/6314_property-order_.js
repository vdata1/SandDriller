try {
    var o = {
        p1: 'p1',
        p2: 'p2',
        p3: 'p3'
    };
    Object.defineProperty(o, 'add', {
        enumerable: true,
        get: function () {
            o.extra = 'extra';
            return 'add';
        }
    });
    o.p4 = 'p4';
    o[2] = '2';
    o[0] = '0';
    o[1] = '1';
    delete o.p1;
    delete o.p3;
    o.p1 = 'p1';
    var actual = JSON.stringify(o);
    var expected = '{"0":"0","1":"1","2":"2","p2":"p2","add":"add","p4":"p4","p1":"p1"}';
    assert.sameValue(actual, expected);
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