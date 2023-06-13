try {
    var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var r = {};
    r.ignoreCase = undefined;
    assert.sameValue(get.call(r), '', 'ignoreCase: undefined');
    r.ignoreCase = null;
    assert.sameValue(get.call(r), '', 'ignoreCase: null');
    r.ignoreCase = NaN;
    assert.sameValue(get.call(r), '', 'ignoreCase: NaN');
    r.ignoreCase = '';
    assert.sameValue(get.call(r), '', 'ignoreCase: the empty string');
    r.ignoreCase = 'string';
    assert.sameValue(get.call(r), 'i', 'ignoreCase: string');
    r.ignoreCase = 86;
    assert.sameValue(get.call(r), 'i', 'ignoreCase: 86');
    r.ignoreCase = Symbol();
    assert.sameValue(get.call(r), 'i', 'ignoreCase: Symbol()');
    r.ignoreCase = [];
    assert.sameValue(get.call(r), 'i', 'ignoreCase: []');
    r.ignoreCase = {};
    assert.sameValue(get.call(r), 'i', 'ignoreCase: {}');
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