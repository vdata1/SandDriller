try {
    var r = /^|\udf06/g;
    Object.defineProperty(r, 'unicode', { writable: true });
    r.unicode = undefined;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834XXX');
    r.unicode = null;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834XXX');
    r.unicode = false;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834XXX');
    r.unicode = NaN;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834XXX');
    r.unicode = 0;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834XXX');
    r.unicode = '';
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834XXX');
    r.unicode = true;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834\uDF06');
    r.unicode = 86;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834\uDF06');
    r.unicode = Symbol.replace;
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834\uDF06');
    r.unicode = {};
    assert.sameValue(r[Symbol.replace]('\uD834\uDF06', 'XXX'), 'XXX\uD834\uDF06');
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