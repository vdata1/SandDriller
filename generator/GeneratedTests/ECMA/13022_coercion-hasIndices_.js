try {
    var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var r = {};
    r.hasIndices = undefined;
    assert.sameValue(get.call(r), '', 'hasIndices: undefined');
    r.hasIndices = null;
    assert.sameValue(get.call(r), '', 'hasIndices: null');
    r.hasIndices = NaN;
    assert.sameValue(get.call(r), '', 'hasIndices: NaN');
    r.hasIndices = '';
    assert.sameValue(get.call(r), '', 'hasIndices: the empty string');
    r.hasIndices = 'string';
    assert.sameValue(get.call(r), 'd', 'hasIndices: string');
    r.hasIndices = 86;
    assert.sameValue(get.call(r), 'd', 'hasIndices: 86');
    r.hasIndices = Symbol();
    assert.sameValue(get.call(r), 'd', 'hasIndices: Symbol()');
    r.hasIndices = [];
    assert.sameValue(get.call(r), 'd', 'hasIndices: []');
    r.hasIndices = {};
    assert.sameValue(get.call(r), 'd', 'hasIndices: {}');
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