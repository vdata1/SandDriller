try {
    var sab = new SharedArrayBuffer(4);
    var int_views = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array
    ];
    testWithTypedArrayConstructors(function (View1) {
        var ta1 = new View1(sab);
        testWithTypedArrayConstructors(function (View2) {
            var ta2 = new View2(ta1);
            assert.sameValue(ta2.buffer.constructor, ArrayBuffer, 'TypedArray of SharedArrayBuffer-backed TypedArray is ArrayBuffer-backed');
        }, int_views);
    }, int_views);
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