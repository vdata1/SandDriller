try {
    const validScriptOptions = [
        [
            null,
            'Null'
        ],
        [
            'bali',
            'Bali'
        ],
        [
            'Bali',
            'Bali'
        ],
        [
            'bALI',
            'Bali'
        ],
        [
            {
                toString() {
                    throw () => {
                        return () => {
                        };
                    };
                    return 'Brai';
                }
            },
            'Brai'
        ]
    ];
    for (const [script, expected] of validScriptOptions) {
        let expect = expected ? 'en-' + expected : 'en';
        assert.sameValue(new Intl.Locale('en', { script }).toString(), expect, `new Intl.Locale("en", {script: "${ script }"}).toString() returns "${ expect }"`);
        expect = (expected ? 'en-' + expected : 'en') + '-DK';
        assert.sameValue(new Intl.Locale('en-DK', { script }).toString(), expect, `new Intl.Locale("en-DK", {script: "${ script }"}).toString() returns "${ expect }"`);
        expect = expected ? 'en-' + expected : 'en-Cyrl';
        assert.sameValue(new Intl.Locale('en-Cyrl', { script }).toString(), expect, `new Intl.Locale("en-Cyrl", {script: "${ script }"}).toString() returns "${ expect }"`);
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