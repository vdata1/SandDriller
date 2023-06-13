try {
    var view = new DataView(new ArrayBuffer(9));
    assert.sameValue(view.getUint8(0), 0, 'index 0');
    assert.sameValue(view.getUint8(1), 0, 'index 1');
    assert.sameValue(view.getUint8(2), 0, 'index 2');
    assert.sameValue(view.getUint8(3), 0, 'index 3');
    assert.sameValue(view.getUint8(4), 0, 'index 4');
    assert.sameValue(view.getUint8(5), 0, 'index 5');
    assert.sameValue(view.getUint8(6), 0, 'index 6');
    assert.sameValue(view.getUint8(7), 0, 'index 7');
    assert.sameValue(view.getUint8(8), 0, 'index 8');
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