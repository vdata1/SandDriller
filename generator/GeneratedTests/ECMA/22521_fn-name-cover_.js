try {
    var namedSym = Symbol('test262');
    var anonSym = Symbol();
    var o;
    o = {
        xId: (0, function () {
        }),
        id: function () {
        },
        [anonSym]: function () {
        },
        [namedSym]: function () {
        }
    };
    assert(o.xId.name !== 'xId');
    assert.sameValue(o.id.name, 'id', 'via IdentifierName');
    verifyNotEnumerable(o.id, 'name');
    verifyNotWritable(o.id, 'name');
    verifyConfigurable(o.id, 'name');
    assert.sameValue(o[anonSym].name, '', 'via anonymous Symbol');
    verifyNotEnumerable(o[anonSym], 'name');
    verifyNotWritable(o[anonSym], 'name');
    verifyConfigurable(o[anonSym], 'name');
    assert.sameValue(o[namedSym].name, '[test262]', 'via Symbol');
    verifyNotEnumerable(o[namedSym], 'name');
    verifyNotWritable(o[namedSym], 'name');
    verifyConfigurable(o[namedSym], 'name');
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