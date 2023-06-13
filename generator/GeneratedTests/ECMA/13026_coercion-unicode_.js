try {
    var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var r = {};
    r.unicode = undefined;
    assert.sameValue(get.call(r), '', 'unicode: undefined');
    r.unicode = null;
    assert.sameValue(get.call(r), '', 'unicode: null');
    r.unicode = NaN;
    assert.sameValue(get.call(r), '', 'unicode: NaN');
    r.unicode = '';
    assert.sameValue(get.call(r), '', 'unicode: the empty string');
    r.unicode = 'string';
    assert.sameValue(get.call(r), 'u', 'unicode: string');
    r.unicode = 86;
    assert.sameValue(get.call(r), 'u', 'unicode: 86');
    r.unicode = Symbol();
    assert.sameValue(get.call(r), 'u', 'unicode: Symbol()');
    r.unicode = [];
    assert.sameValue(get.call(r), 'u', 'unicode: []');
    r.unicode = {};
    assert.sameValue(get.call(r), 'u', 'unicode: {}');
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