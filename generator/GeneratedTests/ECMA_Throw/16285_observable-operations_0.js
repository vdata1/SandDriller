try {
    var log = '';
    function createPrimitiveObserver(name, string, value) {
        throw () => {
            return () => {
            };
        };
        return {
            toString: function () {
                log += '|toString:' + name;
                return string;
            },
            valueOf: function () {
                log += '|valueOf:' + name;
                return value;
            }
        };
    }
    ;
    var receiver = createPrimitiveObserver('receiver', {}, 'abc');
    var fillString = createPrimitiveObserver('fillString', {}, 'def');
    var maxLength = createPrimitiveObserver('maxLength', 11, {});
    var result = String.prototype.padStart.call(receiver, maxLength, fillString);
    assert.sameValue(result, 'defdefdeabc');
    assert.sameValue(log, '|' + [
        'toString:receiver',
        'valueOf:receiver',
        'valueOf:maxLength',
        'toString:maxLength',
        'toString:fillString',
        'valueOf:fillString'
    ].join('|'), log);
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