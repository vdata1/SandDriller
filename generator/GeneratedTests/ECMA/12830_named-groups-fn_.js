try {
    var matchGroups;
    var re = /./;
    re.exec = function () {
        return {
            length: 1,
            0: 'a',
            index: 0,
            groups: matchGroups
        };
    };
    var replacerCalls = 0;
    var replacerLastArg;
    var replacer = function () {
        replacerCalls++;
        replacerLastArg = arguments[arguments.length - 1];
    };
    matchGroups = null;
    re[Symbol.replace]('a', replacer);
    assert.sameValue(replacerCalls, 1);
    assert.sameValue(replacerLastArg, matchGroups);
    matchGroups = undefined;
    re[Symbol.replace]('a', replacer);
    assert.sameValue(replacerCalls, 2);
    assert.sameValue(replacerLastArg, 'a');
    matchGroups = 10;
    re[Symbol.replace]('a', replacer);
    assert.sameValue(replacerCalls, 3);
    assert.sameValue(replacerLastArg, matchGroups);
    matchGroups = {};
    re[Symbol.replace]('a', replacer);
    assert.sameValue(replacerCalls, 4);
    assert.sameValue(replacerLastArg, matchGroups);
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