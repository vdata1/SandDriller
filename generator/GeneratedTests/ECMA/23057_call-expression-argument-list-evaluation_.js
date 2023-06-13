try {
    var number = 5;
    var string = 'str';
    var object = {};
    function fn() {
        return 'result';
    }
    var calls;
    calls = 0;
    (function () {
        return function () {
            calls++;
            assert.sameValue(arguments.length, 1, 'NoSubstitutionTemplate arguments length');
        };
    }()`NoSubstitutionTemplate`);
    assert.sameValue(calls, 1, 'NoSubstitutionTemplate function invocation');
    calls = 0;
    (function () {
        return function (site, n, s, o, f, r) {
            calls++;
            assert.sameValue(n, number);
            assert.sameValue(s, string);
            assert.sameValue(o, object);
            assert.sameValue(f, fn);
            assert.sameValue(r, 'result');
            assert.sameValue(arguments.length, 6, 'TemplateHead arguments length');
        };
    }()`TemplateHead${ number }TemplateSpans${ string }${ object }${ fn }${ fn() }`);
    assert.sameValue(calls, 1, 'TemplateHead function invocation');
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