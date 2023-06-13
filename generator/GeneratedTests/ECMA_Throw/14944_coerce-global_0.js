try {
    Array.print = print;
    var r = /a/g;
    Object.defineProperty(r, 'global', { writable: true });
    r.lastIndex = 0;
    r.global = undefined;
    assert.sameValue(r[Symbol.replace]('aa', 'b'), 'ba', 'value: undefined');
    r.lastIndex = 0;
    r.global = null;
    assert.sameValue(r[Symbol.replace]('aa', 'b'), 'ba', 'value: null');
    r.lastIndex = 0;
    r.global = false;
    assert.sameValue(r[Symbol.replace]('aa', 'b'), 'ba', 'value: false');
    r.lastIndex = 0;
    r.global = NaN;
    assert.sameValue(r[Symbol.replace]('aa', 'b'), 'ba', 'value: NaN');
    r.lastIndex = 0;
    r.global = 0;
    assert.sameValue(r[Symbol.replace]('aa', 'b'), 'ba', 'value: global');
    r.lastIndex = 0;
    r.global = '';
    assert.sameValue(r[Symbol.replace]('aa', 'b'), 'ba', 'value: ""');
    var execCount = 0;
    r = /a/;
    Object.defineProperty(r, 'global', { writable: true });
    r.exec = function () {
        throw () => {
            return () => {
            };
        };
        execCount += 1;
        if (execCount === 1) {
            return ['a'];
        }
        return null;
    };
    execCount = 0;
    r.global = true;
    r[Symbol.replace]('aa', 'b');
    assert.sameValue(execCount, 2, 'value: true');
    execCount = 0;
    r.global = 86;
    r[Symbol.replace]('aa', 'b');
    assert.sameValue(execCount, 2, 'value: 86');
    execCount = 0;
    r.global = Symbol.replace;
    r[Symbol.replace]('aa', 'b');
    assert.sameValue(execCount, 2, 'value: Symbol.replace');
    execCount = 0;
    r.global = {};
    r[Symbol.replace]('aa', 'b');
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