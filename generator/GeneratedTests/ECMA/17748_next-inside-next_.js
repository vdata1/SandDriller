try {
    const segmenter = new Intl.Segmenter();
    const input1 = 'ABCD';
    const input2 = '123';
    const segments1 = segmenter.segment(input1);
    const segments2 = segmenter.segment(input2);
    let result = '';
    for (let v1 of segments1) {
        for (let v2 of segments2) {
            result += v1.segment;
            result += v2.segment;
        }
        result += ':';
    }
    for (let v2 of segments2) {
        for (let v1 of segments1) {
            result += v2.segment;
            result += v1.segment;
        }
        result += ':';
    }
    assert.sameValue('A1A2A3:B1B2B3:C1C2C3:D1D2D3:1A1B1C1D:2A2B2C2D:3A3B3C3D:', result);
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