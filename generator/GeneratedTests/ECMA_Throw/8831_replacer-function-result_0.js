try {
    var obj = {
        a1: {
            b1: [
                1,
                2
            ],
            b2: {
                c1: true,
                c2: false
            }
        },
        a2: 'a2'
    };
    var replacer = function (key, value) {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(value, null);
        switch (key) {
        case '':
            return {
                a1: null,
                a2: null
            };
        case 'a1':
            return {
                b1: null,
                b2: null
            };
        case 'a2':
            return 'a2';
        case 'b1':
            return [
                null,
                null
            ];
        case 'b2':
            return {
                c1: null,
                c2: null
            };
        case '0':
            return 1;
        case '1':
            return 2;
        case 'c1':
            return true;
        case 'c2':
            return false;
        }
        throw new Test262Error('unreachable');
    };
    assert.sameValue(JSON.stringify(null, replacer), JSON.stringify(obj));
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