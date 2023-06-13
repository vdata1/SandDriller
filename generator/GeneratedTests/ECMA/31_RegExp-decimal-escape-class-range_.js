try {
    var __executed = /[\d][\12-\14]{1,}[^\d]/.exec('line1\n\n\n\n\nline2');
    var __expected = ['1\n\n\n\n\nl'];
    __expected.index = 4;
    __expected.input = 'line1\n\n\n\n\nline2';
    assert.sameValue(__executed.length, __expected.length, '.length');
    assert.sameValue(__executed.index, __expected.index, '.index');
    assert.sameValue(__executed.input, __expected.input, '.input');
    for (var index = 0; index < __expected.length; index++) {
        assert.sameValue(__executed[index], __expected[index], 'index: ' + index);
    }
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