try {
    var exec = function () {
        throw () => {
            return () => {
            };
        };
        execCount += 1;
        if (execCount === 1) {
            return [''];
        }
        return null;
    };
    var r, result, execCount;
    r = /a/g;
    r.exec = exec;
    Object.defineProperty(r, 'global', { writable: true });
    execCount = 0;
    r.global = undefined;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 1, 'value: undefined');
    execCount = 0;
    r.global = null;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 1, 'value: null');
    execCount = 0;
    r.global = false;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 1, 'value: false');
    execCount = 0;
    r.global = NaN;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 1, 'value: NaN');
    execCount = 0;
    r.global = 0;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 1, 'value: 0');
    execCount = 0;
    r.global = '';
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 1, 'value: ""');
    r = /a/;
    r.exec = exec;
    Object.defineProperty(r, 'global', { writable: true });
    r.global = true;
    execCount = 0;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 2, 'value: true');
    r.global = 86;
    execCount = 0;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 2, 'value: 86');
    r.global = Symbol.match;
    execCount = 0;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 2, 'value: Symbol.match');
    r.global = {};
    execCount = 0;
    r[Symbol.match]('aa');
    assert.sameValue(execCount, 2, 'value: {}');
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