try {
    var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var r = {};
    r.multiline = undefined;
    assert.sameValue(get.call(r), '', 'multiline: undefined');
    r.multiline = null;
    assert.sameValue(get.call(r), '', 'multiline: null');
    r.multiline = NaN;
    assert.sameValue(get.call(r), '', 'multiline: NaN');
    r.multiline = '';
    assert.sameValue(get.call(r), '', 'multiline: the empty string');
    r.multiline = 'string';
    assert.sameValue(get.call(r), 'm', 'multiline: string');
    r.multiline = 86;
    assert.sameValue(get.call(r), 'm', 'multiline: 86');
    r.multiline = Symbol();
    assert.sameValue(get.call(r), 'm', 'multiline: Symbol()');
    r.multiline = [];
    assert.sameValue(get.call(r), 'm', 'multiline: []');
    r.multiline = {};
    assert.sameValue(get.call(r), 'm', 'multiline: {}');
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