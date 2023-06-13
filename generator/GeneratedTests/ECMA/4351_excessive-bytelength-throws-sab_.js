try {
    var buffer = new SharedArrayBuffer(3);
    assert.throws(RangeError, function () {
        new DataView(buffer, 0, 4);
    }, 'offset: 0, length 4');
    assert.throws(RangeError, function () {
        new DataView(buffer, 1, 3);
    }, 'offset: 1, length: 3');
    assert.throws(RangeError, function () {
        new DataView(buffer, 2, 2);
    }, 'offset: 2, length: 2');
    assert.throws(RangeError, function () {
        new DataView(buffer, 3, 1);
    }, 'offset: 3, length: 1');
    assert.throws(RangeError, function () {
        new DataView(buffer, 4, 0);
    }, 'offset: 4, length: 0');
    assert.throws(RangeError, function () {
        new DataView(buffer, 4, -1);
    }, 'offset: 4, length: -1');
    assert.throws(RangeError, function () {
        new DataView(buffer, 4, -Infinity);
    }, 'offset: 4, length: -Infinity');
    assert.throws(RangeError, function () {
        new DataView(buffer, 0, Infinity);
    }, 'offset: 0, length: Infinity');
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