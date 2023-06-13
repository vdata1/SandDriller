try {
    var other = $262.createRealm().global;
    var func = new other.Function('return this;');
    var subject;
    subject = func.call(true);
    assert.sameValue(subject.constructor, other.Boolean, 'boolean constructor');
    assert(subject instanceof other.Boolean, 'boolean instanceof');
    subject = func.call(1);
    assert.sameValue(subject.constructor, other.Number, 'number constructor');
    assert(subject instanceof other.Number, 'number instanceof');
    subject = func.call('');
    assert.sameValue(subject.constructor, other.String, 'string constructor');
    assert(subject instanceof other.String, 'string instanceof');
    subject = func.call({});
    assert.sameValue(subject.constructor, Object, 'object constructor');
    assert(subject instanceof Object, 'object instanceof');
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