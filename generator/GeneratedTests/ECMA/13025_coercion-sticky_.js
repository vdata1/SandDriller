try {
    var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var r = {};
    r.sticky = undefined;
    assert.sameValue(get.call(r), '', 'sticky: undefined');
    r.sticky = null;
    assert.sameValue(get.call(r), '', 'sticky: null');
    r.sticky = NaN;
    assert.sameValue(get.call(r), '', 'sticky: NaN');
    r.sticky = '';
    assert.sameValue(get.call(r), '', 'sticky: the empty string');
    r.sticky = 'string';
    assert.sameValue(get.call(r), 'y', 'sticky: string');
    r.sticky = 86;
    assert.sameValue(get.call(r), 'y', 'sticky: 86');
    r.sticky = Symbol();
    assert.sameValue(get.call(r), 'y', 'sticky: Symbol()');
    r.sticky = [];
    assert.sameValue(get.call(r), 'y', 'sticky: []');
    r.sticky = {};
    assert.sameValue(get.call(r), 'y', 'sticky: {}');
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