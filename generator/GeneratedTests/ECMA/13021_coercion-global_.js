try {
    var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var r = {};
    r.global = undefined;
    assert.sameValue(get.call(r), '', 'global: undefined');
    r.global = null;
    assert.sameValue(get.call(r), '', 'global: null');
    r.global = NaN;
    assert.sameValue(get.call(r), '', 'global: NaN');
    r.global = '';
    assert.sameValue(get.call(r), '', 'global: the empty string');
    r.global = 'string';
    assert.sameValue(get.call(r), 'g', 'global: string');
    r.global = 86;
    assert.sameValue(get.call(r), 'g', 'global: 86');
    r.global = Symbol();
    assert.sameValue(get.call(r), 'g', 'global: Symbol()');
    r.global = [];
    assert.sameValue(get.call(r), 'g', 'global: []');
    r.global = {};
    assert.sameValue(get.call(r), 'g', 'global: {}');
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